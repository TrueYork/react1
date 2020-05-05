import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
{/*            <div>
                <img
                    src='https://c1.staticflickr.com/9/8534/29490724665_072b0acf7a_b.jpg'
                    alt='profile background'></img>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;