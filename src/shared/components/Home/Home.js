import './styles.scss';
import React       from 'react';
import { connect } from 'react-redux';
import requireAuth from '../hoc/requireAuth';
import Head        from '../../helpers/helmet';

const Home = () => {
    const headInfo = { 
        title: 'Mi Accounting | Home Page', 
        ogTitle: 'Home Page', 
        ogURL: 'http://localhost:3000'
    };
    
    return (
        <div>
            <Head {...headInfo} />
            <div className="row text-center" style={{display: "flex", alignItems: "center"}}>
                <div className="col-md-12">
                    <h1>Welcome</h1>
                    <p>Check this out</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <button type="button" className="btn btn-primary" onClick={() => console.log('I am pressed!')}>Press me</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ authUser }) => {
    return { authUser };
};

export default {
    component: connect(mapStateToProps)(requireAuth(Home))
};