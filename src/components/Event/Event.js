import React from "react";

const Event = ({ event }) => {
  const deleteEvent = (id) => {
    console.log("delete");
  };
  return (
    <div className="cold-md-3">
      <img style={{ height: "300px" }} src={event.imageURL} alt="" />
      <h3>
        {event.name} <button onClick={deleteEvent}>Delete</button>
      </h3>
    </div>
  );
};

export default Event;
