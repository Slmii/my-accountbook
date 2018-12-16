import React            from 'react';
import { connect }      from 'react-redux';
import { Link }         from 'react-router-dom';
import { fetchSurveys } from '../../actions/surveys';
import Head             from '../../helpers/helmet';
import requireAuth      from '../hoc/requireAuth';

class Dashboard extends React.Component {
    // THIS IS FOR NAVIGATION WITHIN THE APPLICATION
    componentDidMount() {
        this.props.fetchSurveys();
    };

    renderSurveys() {
        const { surveys } = this.props;
        return surveys.map(({ id, name }) => {
            return <li key={id} className="list-group-item">{name}</li>;
        });
    };

    render() {
        const headInfo = { 
            title: 'Mi Accounting | Dashboard', 
            ogTitle: 'Dashboard', 
            ogURL: 'http://localhost:3000/dashboard'
        };

        return(
            <div className="row justify-content-md-center">
                <div className="col-md-12 text-center">
                    <Head {...headInfo} />
                    <h1>Here is a list of all the surveys!</h1>
                    <ul className="list-group" style={{ width: "50%", margin: "auto" }}>
                        {this.renderSurveys()}
                    </ul>
                </div>
                
                <div className="action-btns-fixed-bottom">
                    <Link to="/survey/new">
                        <button className="btn btn-danger action-btn">
                            <i className="fas fa-plus fa-lg"></i>
                        </button>
                    </Link>
                </div>
            </div>
        );
    };
};

// THESE ARE THE REDUCERS THAT ARE SETUP IN THE 'COMBINEDREDUCERS.JS'. MAP THESE TO THE THIS.PROPS OBJECT
const mapStateToProps = ({ surveys, authUser }) => {
    return {
        surveys,
        authUser
    }
}

export default {
    // CONNECT AND MAP THE CURRENT STATE OF THE STORE TO THE THIS.PROPS OBJECT
    // HOC, THIS WILL RUN THE REQUIRED AUTH FUNCTION AND PASS BACK ALL THE PROPS
    component: connect(mapStateToProps, { fetchSurveys })(requireAuth(Dashboard)),
    loadData: ({ dispatch }) => dispatch(fetchSurveys())
}