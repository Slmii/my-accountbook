import React                from 'react';
import { connect }          from 'react-redux';
import { Link, NavLink }    from 'react-router-dom';
import './styles.scss';

export class Header extends React.Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            path: props.authUser ? '/api/logout' : '/auth/google',
            text: props.authUser ? 'Logout' : 'Login',
            loggedIn: props.authUser
        };
    }
    
    render()
    {
        const { path, text, loggedIn } = this.state;

        return (
            <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">        
                <Link to='/' className="navbar-brand" >
                    Mi Accounting
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsingNavbar">
                    <ul className="navbar-nav ml-auto">
                        { loggedIn &&                 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users" activeClassName="is-active" >Users</NavLink>
                            </li>   
                        }
                        { loggedIn &&                 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admins" activeClassName="is-active" >Admins</NavLink>
                            </li> 
                        }                           
                        <li className="nav-item">
                            <a className="nav-link" href={path}>{text}</a>
                        </li>
                    </ul>
                </div>        
            </nav>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        authUser: state.authUser
    };
};

export default connect(mapStateToProps)(Header);