import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChange, totalUsersCount, pageSize, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                props.users.map(user => <User user={user} isOperationInProgress={props.isOperationInProgress}
                                              acceptFollowThunkCreator={props.acceptFollowThunkCreator}
                                              acceptUnfollowThunkCreator={props.acceptUnfollowThunkCreator}
                                              key={user.id}/>)
            }
        </div>
    </div>
};

export default Users;