// src/components/FlightResults.jsx
import React from 'react';
import FlightCard from './FlightCard';

const FlightResults = ({ flights }) => {
  if (!flights.length) {
    return <div>No flights found.</div>;
  }

  return (
    <div className="flight-results">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;
