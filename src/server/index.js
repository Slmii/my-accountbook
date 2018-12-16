import 'babel-polyfill';
import './api/models/User';
import './api/models/Survey';
import './api/services/passport';
import authRoutes         from './api/routes/authRoutes';
import billingRoutes      from './api/routes/billingRoutes';
import createStore        from '../shared/helpers/store';
import keys               from './api/config/keys';
import routes             from '../shared/routes';
import surveyRoutes       from './api/routes/surveyRoutes';
import testData           from './api/routes/getTestData';

import bodyParser         from 'body-parser';
import cookieSession      from 'cookie-session';
import cors               from 'cors';
import express            from 'express';
import mongoose           from 'mongoose';
import passport           from 'passport';
import React              from 'react';
import serialize          from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { Helmet }         from 'react-helmet';
import { Provider }       from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { StaticRouter }   from 'react-router-dom'

mongoose.connect(keys.mongoURI);

const app  = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// TELL 'PASSPORT' TO MAKE USE THE COOKIES, AND ASSIGN THE 'USER OBJ' TO THE 'REQ', WHICH REPRESENT THE LOADED SESSION
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
billingRoutes(app);
testData(app);
surveyRoutes(app);

// IF ITS AN UNKOWN ROUTE/REQUEST, THEN LOOK IN THE 'PUBLIC' FOLDER FOR THE MACTHING REQUEST
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    // RETURNS AN ARRAY OF PROMISES || NULL
    // CHECKS IF THE COMPONENT (ROUTE) HAS A FUNTION CALLED 'LOADDATA'
    const promises = matchRoutes(routes, req.path).map(({ route }) => {
        return route.loadData 
        // INITIATE THE 'loadData' FUNCTION IN THE FRONT-END WITH THE DATA FROM THE STORE
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

        // THIS IS THE ROUTES IN THE 'ROUTES.JS' FROM THE SHARED FOLDER
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

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
                    <link rel="stylesheet" type="text/css" href="../styles.css" defer />
                </head>

                <body>
                    <div id='root-app'>${content}</div>

                    <script src="../bundle.js" defer></script>
                    <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
                    
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
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