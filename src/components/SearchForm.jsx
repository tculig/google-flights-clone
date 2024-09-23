// src/components/SearchForm.jsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import airports from "./airports.json";
import Grid from "@mui/material/Grid";

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    origin: null,
    destination: null,
    departureDate: "",
    returnDate: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.origin || !formData.destination) {
      alert("Please select both origin and destination airports.");
      return;
    }

    const searchParams = {
      origin: formData.origin.iata_code,
      destination: formData.destination.iata_code,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      passengers: formData.passengers,
    };

    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            options={airports}
            getOptionLabel={(option) => `${option.city} (${option.iata_code})`}
            onChange={(event, newValue) => {
              setFormData({
                ...formData,
                origin: newValue,
              });
            }}
            
            renderInput={(params) => (
              <TextField
                {...params}
                label="Origin"
                variant="outlined"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            options={airports}
            getOptionLabel={(option) => `${option.city} (${option.iata_code})`}
            onChange={(event, newValue) => {
              setFormData({
                ...formData,
                destination: newValue,
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Destination"
                variant="outlined"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            type="date"
            name="departureDate"
            label="Departure Date"
            value={formData.departureDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            type="number"
            name="passengers"
            label="Passengers"
            value={formData.passengers}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 1, max: 9 } }}
            variant="outlined"
            required
          />
        </Grid>

        {/* ... other fields */}
        <Grid item xs={12}>
          <button type="submit">Search Flights</button>
        </Grid>
      </Grid>

      <button type="submit">Search Flights</button>
    </form>
  );
};

export default SearchForm;
