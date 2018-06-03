import 'babel-polyfill';
import '../api/models/User';
import '../api/services/passport';
import bodyParser         from 'body-parser';
import cookieSession      from 'cookie-session';
import cors               from 'cors';
import express            from 'express';
import Loadable           from 'react-loadable';
import mongoose           from 'mongoose';
import passport           from 'passport';
import proxy              from 'express-http-proxy';
import React              from 'react';
import { Helmet }         from 'react-helmet';
import { Provider }       from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter }   from 'react-router-dom'
import serialize          from 'serialize-javascript';
import authRoutes         from '../api/routes/authRoutes';
import keys               from '../api/config/keys';
import createStore        from '../shared/helpers/store';
import routes             from '../shared/routes';

mongoose.connect(keys.mongoURI);

const app  = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// TELL 'PASSPORT' TO MAKE USE THE COOKIES, AND ASSIGN IT TO THE 'REQ', WHICH REPRESENT THE LOADED SESSION
app.use(
    cookieSession({
        // SET COOKIE TO 30 DAYS
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // ENCRYPT COOKIE, CHOOSE RANDOM ONE FROM ARRAY
        keys: [keys.cookieKey1, keys.cookieKey2]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.get('*', (req, res) => {
    const store = createStore(req);

    // RETURNS AN ARRAY OF PROMISES || NULL
    // CHECKS IF THE COMPONENT (ROUTE) HAS A FUNTION CALLED 'LOADDATA'
    const promises = matchRoutes(routes, req.path).map(({ route }) => {
        return route.loadData 
        ? route.loadData(store) 
        : null;
    }).map((promise) => {
        // LOOP THROUGH THE PROMISES ARRAY
        if (promise)
        {
            // IF THE CURRENT PROMISE IS TRUE, WRAP IT WITH A NEW PROMISE AND RESOLVE IT
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    // RUN THE PROMISE, GET THE CORRESPONDING ROUTE, AND CALL THE 'LOADDATA' FUNCTION
    Promise.all(promises)
    .then(() => {
        const context = {};

        const content = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.path} context={context} >
                    <div>{renderRoutes(routes)}</div>
                </StaticRouter>
            </Provider>
        );

        const helmet = Helmet.renderStatic();

        const renderer = 
            `<!DOCTYPE html>
            <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
            <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
            <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
            <!--[if gt IE 8]><!--> <html> <!--<![endif]-->
            <html>
            <head>
                ${helmet.title.toString()}
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                ${helmet.meta.toString()}

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
                <link rel="stylesheet" type="text/css" href="styles.css" defer />
            </head>

            <body>
                <div id='root-app'>${content}</div>

                <script src="bundle.js" defer></script>
                <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </body>
            </html>`;
        
        if (context.url)
        {
            return res.redirect(303, context.url)
        }

        if (context.notFound)
        {
            res.status(404);
        }

        res.send(renderer);
    });
});

app.listen(port, () => console.log('Server is up! Listening to port', port));