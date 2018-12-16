import React            from 'react';
import { connect }      from 'react-redux';
import SurveyForm       from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import Head             from '../../helpers/helmet';
import requireAuth      from '../hoc/requireAuth';

import './styles.scss';

class SurveyNew extends React.Component {

    state = {
        showFormReview: false
    };

    renderContent = () => {
        const { showFormReview } = this.state;

        if (showFormReview)
        {
            return (
                <SurveyFormReview 
                    onCancel={() => this.setState({ showFormReview: false })}
                />
            );
        }

        return (
            <SurveyForm 
                onSurveySubmit={() => this.setState({ showFormReview: true })} 
            />
        );
    };

    render() {
        const headInfo = { 
            title: 'Mi Accounting | New Survey', 
            ogTitle: 'New Survey', 
            ogURL: 'http://localhost:3000/survey/new'
        };

        return(
            <div className="row">
                <Head {...headInfo} />
                {this.renderContent()}
            </div>
        );
    };
};

const mapStateToProps = ({ authUser, form }) => {
    return {
        authUser,
        form
    }
};

export default {
    component: connect(mapStateToProps)(requireAuth(SurveyNew))
}