import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AirportAutocomplete from "../AirportAutocomplete";
import * as Styled from './styles';
import TopElement from "components/TopElement";
import { optionsButton1, optionsButton3 } from "./config";
import PlusMinusSelect from "components/PlusMinusSelect";

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    origin: null,
    destination: null,
    departureDate: '',
    returnDate: '',
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
      alert('Please select both origin and destination airports.');
      return;
    }

    const searchParams = {
      origin: formData.origin.codeIataAirport,
      destination: formData.destination.codeIataAirport,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      passengers: formData.passengers,
    };

    onSearch(searchParams);
  };
  const [value1, setValue1] = React.useState(optionsButton1[0].key);
  const [value2, setValue2] = React.useState(1);
  const [value3, setValue3] = React.useState(optionsButton3[0].key);

  return (
    <div>
      <Styled.TopContainer>
        <TopElement options={optionsButton1} value={value1} setValue={setValue1}/>
        <PlusMinusSelect value={value2} setValue={setValue2}/>
        <TopElement options={optionsButton3} value={value3} setValue={setValue3}/>
      </Styled.TopContainer>
    <form onSubmit={handleSubmit} className="search-form">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <AirportAutocomplete setFormData={setFormData} label="Origin" dataKey="origin"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <AirportAutocomplete setFormData={setFormData} label="Destination" dataKey="destination"/>
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

    </form>
    </div>
  );
};

export default SearchForm;
