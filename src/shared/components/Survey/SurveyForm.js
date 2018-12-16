import React                from 'react';
import { Field, reduxForm } from 'redux-form';
import { SurveyInput, SurveyTextarea } from './SurveyField';
import { Link }             from 'react-router-dom';
import isEmail              from 'validator/lib/isEmail';
import isLength             from 'validator/lib/isLength';

const FIELDS = [
    // TITLE
    { 
        type: 'text', 
        name: 'survey_title', 
        id: 'survey-title', 
        label: 'Survey Title',
        component: SurveyInput,
        max: 20
    },
    // SUBJECT
    { 
        type: 'text', 
        name: 'survey_subject', 
        id: 'survey-subject', 
        label: 'Survey Subject',
        component: SurveyInput,
        max: 20
    },
    // BODY
    { 
        name: 'survey_body',
        id: 'survey-body', 
        label: 'Survey Body',
        component: SurveyTextarea,
        max: 300
    },
    // RECIPIENTS
    { 
        type: 'text', 
        name: 'survey_recipients', 
        id: 'survey-recipients', 
        label: 'Recipient(s)',
        component: SurveyInput
    }
];

class SurveyForm extends React.Component {

    state = {
        survey_title_counter   : FIELDS[0].max,
        survey_subject_counter : FIELDS[1].max,
        survey_body_counter    : FIELDS[2].max
    };

    handleOnChange = e => {
        const max = Number(e.target.dataset.max);
        if (max)
        {
            let value  = e.target.value;
            const name = e.target.name

            const value_length = Number(value.length);
            let chars_left     = max - value_length;

            if (chars_left <= 0)
            {
                chars_left = 0;
                value = value.substr(0, max);
            }

            this.setState({
                [name + '_counter']: chars_left,
                [name + '_value']: value
            });
        }
    }

    renderFields() {
        // PLACE ALL INPUT FIELDS IN THIS CLASS INSTEAD OF FOR EACH
        return FIELDS.map(({ type, name, id, label, component, max }, index) => {
            return <Field 
                        key         = {index + 1}
                        type        = {type} 
                        name        = {name} 
                        id          = {id} 
                        label       = {label}
                        max         = {max}
                        component   = {component}
                        onChange    = {this.handleOnChange}
                        count       = {this.state[name + '_counter']}
                    />
        }); 
    }

    render() {
        return(
            <React.Fragment>
                <div className="col-md-4">
                    <h1>QuickLinks</h1>
                </div>
                <div className="col-md-8">
                    <h1>New Survey</h1>
                    {/* DONT USE PARENTHESIS ON THE ONSUBMIT FUNCTION, BECAUSE WE NEED TO WAIT UNTILL ITS CALLED. IF WE USE PARENTHESIS, IT WILL BE CALLED THE MOMENT IT RENDERS */}
                    <form id="survey-form" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                        {this.renderFields()}
                        <div className="float-right">
                            <div className="form-group row">
                                <Link to='/dashboard' className="btn btn-danger rounded-0 btn-back">Cancel</Link>&nbsp;
                                <button type="submit" className="btn btn-success rounded-0 btn-next">
                                    Next
                                </button>
                                {/* <input type="text" name="test" onChange={this.handleOnChange} value={this.state.value} /> */}
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    };
};

const validate = values => {
    const errors = {};

    FIELDS.forEach(({ name, label, max }) => {
        // GET THE KEY IN EACH FIELD OBJECT (WITH SQUARE BRACKETS). THE KEY NAME IS ALSO THE INPUT'S NAME (<input name='A'>). IT IS IMPORTANT THAT THOSE 2 MUST MATCH!
        if (!values[name])
            errors[name] = `${label} is required!`;
        else if (typeof max !== 'undefined')
        {
            if (!isLength(values[name], { min: 1, max: max })) 
                errors[name] = `${label} cannot be longer than ${max} characters!`;
        }
        else if (name === 'survey_recipients')
        {
            const invalidEmails = values[name].split(',')
            .map(email => email.trim())
            .filter(email => !isEmail(email));

            if (invalidEmails.length > 0)
                errors[name] = `The following emails are invalid: ${invalidEmails}`;
        }
    });

    return errors;
};

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);