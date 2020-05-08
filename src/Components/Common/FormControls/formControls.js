import React from "react";
import classes from "./formControls.module.css"
import {required} from "../../../Utils/Validators/validators";
import {Field} from "redux-form";

/*export const TextArea = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (isError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    );
};

export const Input = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (isError ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    );
};*/

export const Element = Element => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span> {error} </span>}
        </div>
    );
};

export const createField = (placeholder, name, component, validate, props={}, text="") => (
    <div>
    <Field placeholder={placeholder} name={name}
           component={component}
           validate={validate}
           {...props}/> {text}
    </div>
);