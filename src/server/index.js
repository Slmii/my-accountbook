import 'babel-polyfill';
import './api/models/User';
import './api/services/passport';
import bodyParser         from 'body-parser';
import cookieSession      from 'cookie-session';
import cors               from 'cors';
import express            from 'express';
import mongoose           from 'mongoose';
import passport           from 'passport';
import React              from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet }         from 'react-helmet';
import { Provider }       from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { StaticRouter }   from 'react-router-dom'
import serialize          from 'serialize-javascript';
// import Loadable           from 'react-loadable';
import authRoutes         from './api/routes/authRoutes';
import keys               from './api/config/keys';
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

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Selami Cetinguney'
        },
        {
            id: 2,
            name: 'Lina Cetinguney'
        },
        {
            id: 3,
            name: 'Baby Cetinguney'
        }
    ]);
});

app.get('/api/admins', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Admin 1'
        },
        {
            id: 2,
            name: 'Admin 2'
        },
        {
            id: 3,
            name: 'Admin 3'
        }
    ]);
});

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
                promise
                .then(resolve)
                .catch(resolve);
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

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
                <link rel="stylesheet" type="text/css" href="styles.css" defer />
            </head>

            <body>
                <div id='root-app'>${content}</div>

                <script src="bundle.js" defer></script>
                <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
                
                <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
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