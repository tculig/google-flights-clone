// src/App.js
import React, { useCallback, useState } from "react";
import FlightResults from "./components/FlightResults";
import { searchFlights } from "./api";
import Filters from "./components/Filters";
import "./App.css";
import { ReactComponent as HeroImage } from "./assets/flights_nc_4.svg"; // Adjust the path to your SVG
import * as Styled from "./App.styles";
import SearchForm from "sections/SearchForm";

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalSearches, setTotalSearches] = useState(0);

  const handleSearch = useCallback(async (searchParams) => {
    setTotalSearches((oldTotal) => oldTotal + 1);
    setLoading(true);
    setError(null);
    try {
      const data = await searchFlights(searchParams);
      console.log(data)
      console.log(data.data)
      console.log(data.data.itineraries)
      setFlights(data?.data?.itineraries ?? []);
    } catch (err) {
      setError("Error fetching flights. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const [filters, setFilters] = useState({ maxPrice: 9999999999999999 });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = useCallback((flights) => {
    let filteredFlights = [...flights];
    if (filters.maxPrice) {
      filteredFlights = filteredFlights.filter(
        (flight) => flight.price.raw <= filters.maxPrice
      );
    }
    return filteredFlights;
  },[filters.maxPrice]);

  const filteredFlights = applyFilters(flights);

  return (
    <div className="App">
      <HeroImage style={{ maxWidth: "1248px" }} />
      <Styled.Title>Flights</Styled.Title>
      <Styled.Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <SearchForm onSearch={handleSearch} />
          {loading && <div>Loading flights...</div>}
          {error && <div className="error">{error}</div>}
          {(!loading && totalSearches > 0)? (
            <>
            {/*<Filters onFilterChange={handleFilterChange} filters={filters} />*/}
            <FlightResults flights={filteredFlights} />
            </>
          ) : null}
        </div>
      </Styled.Content>
    </div>
  );
}

export default App;
