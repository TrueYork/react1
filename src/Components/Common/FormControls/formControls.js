import React from "react";
import classes from "./formControls.module.css"

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

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ classes.formControl + " " + (hasError ? classes.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};