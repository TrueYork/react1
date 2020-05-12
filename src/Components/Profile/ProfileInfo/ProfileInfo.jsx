import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '../../../Assets/Images/userPicDefault.png';
import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onProfilePhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then( () => {
            setEditMode(false);
        })
    };

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} className={classes.profilePhotoSmall}/>
                {isOwner && <input type={"file"} onChange={onProfilePhotoSelected}/>}

                {editMode ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                    <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {
                        setEditMode(true)
                    }}/>}

                <div>
                    <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={toEditMode}>Edit</button>
            </div>
            }
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactName={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

const Contact = ({contactName, contactValue}) => {
    return (
        <div>
            {contactValue && <div className={classes.contact}><b>{contactName}</b>: {contactValue}</div>}
        </div>
    )
};

export default ProfileInfo;