import React                from 'react';
import { renderRoutes }     from 'react-router-config';
import { fetchCurrentUser } from './actions/users';
import Header               from './components/Header/Header';

const App = ({ route }) => (
    <div>
        <Header />
        <div className="container">
            {renderRoutes(route.routes)}
        </div>
    </div>
);

// FETCH THE CURRENT USER DATA, LOAD IT IN THE REDUX STORE
export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};