// RENDERS EACH INPUT FIELD
import React from 'react';

export const SurveyInput = ({ input, type, id, label, max, count, meta: { touched, error } }) => {
    return (
        <div className="form-group row">
            {/* <label htmlFor={id} className="font-weight-bold">{label}</label> */}
            <input
                {...input} 
                type={type}
                id={id}
                placeholder={label}
                className={'form-control rounded-0' + ((touched && error) ? ' border border-danger' : '')}
                data-max={max}
            />
            {max && <div className="live-counter"><small id={id} className="form-text"><span className={(count === 0) ? 'text-danger' : ''}>{count}</span> / {max}</small></div>}
            {touched &&
                error && <small id={id} className="form-text text-danger">{error}</small>
            }
        </div>
    );
};

export const SurveyTextarea = ({ input, id, label, max, count, meta: { touched, error } }) => {
    return (
        <div className="form-group row">
            {/* <label htmlFor={id} className="font-weight-bold">{label}</label> */}
            <textarea
                {...input} 
                id={id}
                placeholder={label}
                className={'form-control rounded-0' + ((touched && error) ? ' border border-danger' : '')}
                data-max={max}
                rows="5"
            ></textarea>
            <div className="live-counter"><small id={id} className="form-text"><span className={(count === 0) ? 'text-danger' : ''}>{count}</span> / {max}</small></div>
            {touched &&
                error && <small id={id} className="form-text text-danger">{error}</small>
            }
        </div>
    );
};