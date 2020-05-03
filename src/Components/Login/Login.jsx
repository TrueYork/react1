import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../Common/FormControls/formControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {doLoginThunkCreator} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormControls/formControls.module.css"

const Input = Element("input");

const Login = (props) => {

    const onSubmit = (formData) => {
       props.doLoginThunkCreator(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"E-mail"} name={"email"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={required}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
                { props.error && <div className={classes.formSummaryError}>
                    {props.error}
                </div>
                }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login' //name of the form in store
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {doLoginThunkCreator})(Login);