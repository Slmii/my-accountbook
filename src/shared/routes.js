import AdminList from './components/AdminList/AdminList';
import App       from './App';
import Credit    from './components/Credit/Credit';
import Dashboard from './components/Dashboard/Dashboard';
import Home      from './components/Home/Home';
import Login     from './components/Login/Login';
import NotFound  from './components/NotFound/NotFound';
import SurveyNew from './components/Survey/SurveyNew';
import UserList  from './components/UserList/UserList';

// THE SPREAD OPERATER LOADS EVERYTHING IN THE EXPORT OF THE COMPONENT
// THE EXPORT OF THE COMONENT IS AN OBJECT, SO IT LOADS EVERYTHING IN THAT OBJECT
const routes = [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...Login,
                path: '/login',
            },
            {
                ...AdminList,
                path: '/admins'
            },
            {
                ...UserList,
                path: '/users'
            },
            {
                ...Credit,
                path: '/credits'
            },
            {
                ...Dashboard,
                path: '/dashboard'
            },
            {
                ...SurveyNew,
                path: '/survey/new'
            },
            {
                ...NotFound
            }
        ]
    }
]

export default routes;