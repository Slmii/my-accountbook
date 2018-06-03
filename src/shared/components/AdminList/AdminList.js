import React           from 'react';
import { connect }     from 'react-redux';
import { fetchAdmins } from '../../actions/users';
import requireAuth     from '../hoc/requireAuth';
import Head            from '../../helpers/helmet';

class AdminList extends React.Component {
    // THIS IS FOR NAVIGATION WITHIN THE APPLICATION
    componentDidMount() {
        this.props.fetchAdmins();
    };

    renderAdmins() {
        return this.props.admins.map((admin) => (
            <li key={admin.id} className="list-group-item">{admin.name}</li>
        ));
    };
    
    render() {
        const headInfo = { 
            title: 'Mi Accounting | Admins List', 
            ogTitle: 'Admins List', 
            ogURL: 'http://localhost:3000/admins'
        };

        return(
            <div className="row justify-content-md-center">
                <div className="col-md-12 text-center">
                    <Head {...headInfo} />
                    <h1>Here is a list of all the admin users!</h1>
                    <ul className="list-group" style={{ width: "50%", marginLeft: "25%" }}>
                        {this.renderAdmins()}
                    </ul>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ admins, authUser }) => { 
    return { 
        admins,
        authUser
    };
}

export default {
    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminList)),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};