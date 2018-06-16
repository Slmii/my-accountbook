import './styles.scss';
import React       from 'react';
import { connect } from 'react-redux';
import Head        from '../../helpers/helmet';

class Login extends React.Component {

    renderLogin() {
        return this.props.authUser;
    };

    render() {
        const headInfo = { 
            title: 'Mi Accounting | Login', 
            ogTitle: 'Login Page', 
            ogURL: 'http://localhost:3000'
        };
        
        return (
            <div>
            { this.renderLogin() 
                ? 
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Logged in already!</h1>
                    </div>
                </div>
                : 
                <div>
                    <Head {...headInfo} />
                    <div className="row justify-content-center text-center">
                        <div className="col-md-6" style={{marginTop: "20px"}}>
                            <a href="/auth/google" role="button" className="btn btn-lg" style={{background: "#DD4B39", color: "#FFFFFF"}}>
                                <i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Google Sign In
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-6" style={{marginTop: "20px"}}>
                            <a href="/auth/facebook" role="button" className="btn btn-lg" style={{background: "#3B5998", color: "#FFFFFF"}}>
                                <i className="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Facebook Sign In
                            </a>
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    };
};

const mapStateToProps = ({ authUser }) => {
    return { 
        authUser 
    };
};

export default {
    component: connect(mapStateToProps)(Login)
};