import React, { useEffect, useState } from "react";

function Events() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bp4sp4.github.io/LostArk-Open-API/Events.json"
        );
        const data = await response.json();
        setEventsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {eventsData.length > 0 ? (
        <div>
          {eventsData.map((event, index) => (
            <div key={index}>
              <h4>{event.Title}</h4>
              <img src={event.Thumbnail} alt={event.Title} />
              <p>Start Date: {event.StartDate}</p>
              <p>End Date: {event.EndDate}</p>
              {event.RewardDate && <p>Reward Date: {event.RewardDate}</p>}
              <a href={event.Link} target="_blank" rel="noopener noreferrer">
                More Info
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Events;
