import React                from 'react';
import { connect }          from 'react-redux';
import { Link, NavLink }    from 'react-router-dom';
import './styles.scss';

export class Header extends React.Component {

    renderHeader() {
        return this.props.authUser;
    };
    
    render()
    {
        return (
            <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">        
                <Link to='/' className="navbar-brand" >
                    My Accountbook
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsingNavbar">
                    { this.renderHeader() &&                 
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/credits" activeClassName="is-active" >Credits <span className="badge badge-pill badge-danger">{this.props.authUser.credits}</span></NavLink>
                            </li>   
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users" activeClassName="is-active" >Users</NavLink>
                            </li>   
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admins" activeClassName="is-active" >Admins</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.authUser.name}</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/dashboard' className="dropdown-item">Dashboard</Link>
                                    <Link to='/dashboard' className="dropdown-item">Settings</Link>
                                    <div className="dropdown-divider"></div>
                                    <a href='/api/logout' className="dropdown-item">Logout</a>
                                </div>
                            </li>
                        </ul>
                    }                    
                </div>        
            </nav>
        );
    };
};

const mapStateToProps = ({ authUser }) => {
    return {
        authUser
    };
};

export default connect(mapStateToProps)(Header);