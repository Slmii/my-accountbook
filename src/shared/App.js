import React             from 'react';
import { renderRoutes }  from 'react-router-config';
import { Route, Switch } from 'react-router-dom';
import { fetchCurrentUser } from './actions/users';
import Header            from './components/Header/Header';
import routes            from './routes';

const App = ({ route }) => (
    <div>
        <Header />
        <div className="container">
            {renderRoutes(route.routes)}
        </div>
    </div>
);

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};