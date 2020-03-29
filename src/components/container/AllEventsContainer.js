import React from "react";
import {startFetchingEvents} from "../../actions/eventActions";
import AllEvents from "../presentational/AllEvents";
import {connect} from "react-redux";
import {startFetchingUserDetails} from "../../actions/userActions";

export const mapStateToProps = (state) => ({
    events: state.eventDetails.events,
    user: state.userDetails.user,
});


export const mapDispatchToProps = (dispatch) => ({
    fetchAllEvents: () => dispatch(startFetchingEvents()),
    fetchUserDetails: () => dispatch(startFetchingUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);
