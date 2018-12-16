import './styles.scss';
import React       from 'react';
import { connect } from 'react-redux';
import Head        from '../../helpers/helmet';
import requireAuth from '../hoc/requireAuth';

const Home = ({ authUser }) => {
    const headInfo = { 
        title: 'Mi Accounting | Home Page', 
        ogTitle: 'Home Page', 
        ogURL: 'http://localhost:3000'
    };
    
    return (
        <React.Fragment>
            <Head {...headInfo} />
            <div className="row text-center">
                <div className="col-md-12">
                    <h1>Welcome {authUser.name}</h1>
                    <p>Check this out</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <button type="button" className="btn btn-primary" onClick={() => alert('I am pressed!')}>Press me</button>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({ authUser }) => {
    return { authUser };
};

export default {
    component: connect(mapStateToProps)(requireAuth(Home))
};