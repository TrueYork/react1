import React from "react";
import {reduxForm} from "redux-form";
import {createField, Element} from "../Common/FormControls/formControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {doLoginThunkCreator} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormControls/formControls.module.css"
import {getCaptchaURL, getIsAuth} from "../../Redux/authSelector";

const Input = Element("input");

const Login = (props) => {

    const onSubmit = (formData) => {
       props.doLoginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("E-mail", "email", Input, [required])}
            {createField("Password", "password", Input, [required], {type: "password"})}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "Remember me")}

            { captchaURL && <img src={captchaURL}/>}
            { captchaURL && createField(null, "captcha", Input, [required])}

                { error && <div className={classes.formSummaryError}>
                    {error}
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
    isAuth: getIsAuth(state),
    captchaURL: getCaptchaURL(state)
});

export default connect(mapStateToProps, {doLoginThunkCreator})(Login);