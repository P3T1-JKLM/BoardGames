import React from "react";

// card for displaying upcoming events for the user / group

const EventCard = (props) => {

    const { eventName, date, location } = props.myEvent;

    return (
        <div className="card mb-3">

            <div className="row g-0">
                <div className="col-md-2">{/* does something go here? */}</div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{eventName}</h5>
                        <p className="card-text">Event Location: {location}</p>
                        <p className="card-text">
                            <small className="text-muted">Event Date: {date}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
