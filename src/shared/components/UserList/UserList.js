import './styles.scss';
import React          from 'react';
import { connect }    from 'react-redux';
import { fetchUsers } from '../../actions/users';
import requireAuth    from '../hoc/requireAuth';
import Head           from '../../helpers/helmet';

class UserList extends React.Component {

    // THIS IS FOR NAVIGATION WITHIN THE APPLICATION
    componentDidMount() {
        this.props.fetchUsers();
    };

    renderUsers() {
        const { users } = this.props;
        return users.map(({ id, name }) => (
            <li key={id} className="list-group-item">{name}</li>
        ));
    };
    
    render() {
        const headInfo = { 
            title: 'Mi Accounting | Users List', 
            ogTitle: 'Users List', 
            ogURL: 'http://localhost:3000/users'
        };

        return(
            <div className="row justify-content-md-center">
                <div className="col-md-12 text-center">
                    <Head {...headInfo} />
                    <h1>Here is a list of all the users!</h1>
                    <ul className="list-group" style={{ width: "50%", marginLeft: "25%" }}>
                        {this.renderUsers()}
                    </ul>
                </div>
            </div>
        );
    };
};

// THE FETCHED DATA FROM THE 'ACTIONS' IS NOW AVAILABLE IN THE STORE
const mapStateToProps = ({ users, authUser }) => { 
    return { 
        users, 
        authUser 
    };
};

// EXECUTE THE FUNCTION THATS GET CALLED IN THE ACTIONS
// NOW THE DATA IS AVAILABLE IN THE STORE AND CAN BE USED TO SHOW DATA
export default {
    component: connect(mapStateToProps, { fetchUsers })(requireAuth(UserList)),
    loadData: ({ dispatch }) => dispatch(fetchUsers())
};