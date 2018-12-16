import Header               from './components/Header/Header';
import React                from 'react';
import { fetchCurrentUser } from './actions/users';
import { renderRoutes }     from 'react-router-config';

// THIS IT THE ROUTE THAT GET SEND FROM THE SERVER (NODE.JS)
const App = ({ route }) => (
    <React.Fragment>
        <Header />
        <div className="container">
            {renderRoutes(route.routes)}
        </div>
    </React.Fragment>
);

// FETCH THE CURRENT USER DATA, LOAD IT IN THE REDUX STORE
export default {
    component: App,
    // GET ONLY THE DISPATCH FROM THE STORE (THE STORE IS SEND FROM THE SERVER, NODE.JS)
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};