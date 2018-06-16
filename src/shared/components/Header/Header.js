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
                                <NavLink className="nav-link" to="/users" activeClassName="is-active" >Users</NavLink>
                            </li>   
                        
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admins" activeClassName="is-active" >Admins</NavLink>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href='/api/logout'>Logout</a>
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