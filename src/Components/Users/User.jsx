import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../Assets/Images/userPicDefault.png'
import {NavLink} from "react-router-dom";

let User = ({user, isOperationInProgress, acceptFollowThunkCreator, acceptUnfollowThunkCreator}) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={isOperationInProgress.some(id => id === user.id)} onClick={() => {
                                acceptUnfollowThunkCreator(user.id)
                            }}>Unfollow</button>
                            : <button disabled={isOperationInProgress.some(id => id === user.id)} onClick={() => {
                                acceptFollowThunkCreator(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                 <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>
    )
};

export default User;