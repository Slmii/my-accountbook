import React           from 'react';
import { connect }     from 'react-redux';
import { fetchAdmins } from '../../actions/users';
import Head            from '../../helpers/helmet';
import requireAuth     from '../hoc/requireAuth';

class AdminList extends React.Component {
    // THIS IS FOR NAVIGATION WITHIN THE APPLICATION
    componentDidMount() {
        this.props.fetchAdmins();
    };

    renderAdmins() {
        const { admins } = this.props;
        return admins.map(({ id, name }) => (
            <li key={id} className="list-group-item">{name}</li>
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
    // CONNECT AND MAP THE CURRENT STATE OF THE STORE TO THE THIS.PROPS OBJECT
    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminList)),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};