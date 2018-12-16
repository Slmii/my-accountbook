import React    from 'react';
import { connect } from 'react-redux';

import './styles.scss';

const SurveyFormReview = ({ onCancel, formValues }) => {
    console.log(formValues);
    return (
        <React.Fragment>
            <div className="col-md-12 text-center">
                <h1>Confirm your Survey!</h1>
                <div className="float-right">
                    <div className="form-group row">
                        <button 
                            className="btn btn-danger rounded-0 btn-back" 
                            onClick={onCancel}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

// THESE ARE THE REDUCERS THAT ARE SETUP IN THE 'COMBINEDREDUCERS.JS'. MAP THESE TO THE THIS.PROPS OBJECT
const mapStateToProps = ({ form }) => {
    return {
        formValues: form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyFormReview);