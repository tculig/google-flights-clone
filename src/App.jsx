// src/App.js
import React, { useState } from 'react';
import FlightResults from './components/FlightResults';
import { searchFlights } from './api';
import Filters from './components/Filters';
import './App.css';
import { ReactComponent as HeroImage } from './assets/flights_nc_4.svg'; // Adjust the path to your SVG
import * as Styled from './App.styles';
import SearchForm from 'components/SearchForm';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchFlights(searchParams);
      setFlights(data.flights || []); // Adjust based on actual response
    } catch (err) {
      setError('Error fetching flights. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [filters, setFilters] = useState({maxPrice:0});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = (flights) => {
    let filteredFlights = [...flights];
    if (filters.maxPrice) {
      filteredFlights = filteredFlights.filter(
        (flight) => flight.price <= filters.maxPrice
      );
    }
    return filteredFlights;
  };

  const filteredFlights = applyFilters(flights);

  return (
    <div className="App">
      <HeroImage style={{maxWidth:"1248px"}}/>
      <Styled.Title>Flights</Styled.Title>
      <Styled.Content>
      
        <SearchForm onSearch={handleSearch} />
       
     
      {loading && <div>Loading flights...</div>}
      {error && <div className="error">{error}</div>}
      {flights.length > 0 && (
        <Filters onFilterChange={handleFilterChange} filters={filters} />
      )}
      <FlightResults flights={filteredFlights} />
      </Styled.Content>
    </div>
  );
}

export default App;
