import React, {useEffect} from "react";
import "./AllEvents.scss";

const AllEvents = (props) => {

    useEffect(() => {
        props.fetchAllEvents()
    }, []);

    useEffect(() => {
        props.fetchUserDetails()
    }, []);

    const renderHeader = () => {
        return <div className="header">
            <div className="title">Technical Events</div>
            <div className="user-greeting">Hello, {props.user && props.user.username}</div>
        </div>
    };

    const renderEvents = () => {
        return props.events && props.events.map(event =>
            <div className="event-details" key={event.id}>

                <div className="event-name">
                    {event.name}
                </div>

                <div className="event-description">
                    {event.description}
                </div>

                <button className="event-info">
                    View Details
                </button>

                <button className="event-join">
                    Join
                </button>
            </div>);
    };

    const renderFutureEvents = () => {
        return props.user && props.user.futureEvents && props.user.futureEvents.map(event => {
            return <div className="next-event"> {event.name} - {event.date}</div>
        });
    };

    return <div className="main-events">
        <div>{renderHeader()}</div>
        <div className="events-container">{renderEvents()}</div>
        <div className="future-events">
            <div className="title"> My confirmed events this week</div>
            <div> {renderFutureEvents()} </div>
        </div>
    </div>;


};

export default AllEvents;
