import React from "react";
import {createField, Element} from "../../Common/FormControls/formControls";
import {required} from "../../../Utils/Validators/validators";
import {reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css';
import classesForm from "../../Common/FormControls/formControls.module.css"

const Input = Element("input");
const TextArea = Element("textarea");

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            { error && <div className={classesForm.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", Input, [required])}
            </div>
            <div>
                <b>Looking for a job</b>: {createField(null, "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills</b>: {createField("Tell about your hard skills", "lookingForAJobDescription", TextArea, [])}
            </div>
            <div>
                <b>About me</b>: {createField("Tell about your soft skills", "aboutMe", TextArea, [])}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key} className={classes.contact}>
                        <b>{key}</b>: {createField(null, "contacts." + key, Input, [])}
                    </div>
                )
            })}
            </div>
        </form>
    )
};

const ProfileDataFormRedux = reduxForm({form: 'editProfileForm'})(ProfileDataForm);

export default ProfileDataFormRedux;