import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {obtainProfileDataThunkCreator} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
       let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.obtainProfileDataThunkCreator(userId);
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {obtainProfileDataThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);