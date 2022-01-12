import React, { useEffect, useState } from "react";
import Event from "./../Event/Event";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5055/events`)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="row">
      {events.map((event) => (
        <Event event={event} key={event._id}></Event>
      ))}
    </div>
  );
};

export default Home;
