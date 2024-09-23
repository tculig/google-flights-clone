// src/components/FlightCard.jsx
import React from 'react';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div>
        <strong>{flight.airline}</strong>
      </div>
      <div>
        {flight.origin} → {flight.destination}
      </div>
      <div>
        Departure: {new Date(flight.departureTime).toLocaleString()}
      </div>
      <div>
        Arrival: {new Date(flight.arrivalTime).toLocaleString()}
      </div>
      <div>Price: ${flight.price}</div>
    </div>
  );
};

export default FlightCard;
