import './styles.scss';
import React      from 'react';
import { connect } from 'react-redux';
import Head       from '../../helpers/helmet';

class Login extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            authUser: props.authUser
        };
    }

    render() {

        const headInfo = { 
            title: 'Mi Accounting | Login', 
            ogTitle: 'Login Page', 
            ogURL: 'http://localhost:3000'
        };

        const { authUser } = this.state;
        const text = 
        authUser
        ? 'You are logged in' 
        : 'Please login';
        
        return (
            <div>
                <Head {...headInfo} />
                <div className="row text-center" style={{display: "flex", alignItems: "center"}}>
                    <div className="col-md-12">
                        <h1>{text}</h1>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ authUser }) => {
    return { authUser };
};

export default {
    component: connect(mapStateToProps)(Login)
};