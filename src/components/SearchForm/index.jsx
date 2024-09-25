import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AirportAutocomplete from "../AirportAutocomplete";
import * as Styled from "./styles";
import TopElement from "components/TopElement";
import { optionsButton1, optionsButton3 } from "./config";
import PlusMinusSelect from "components/PlusMinusSelect";
import { Button } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";

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
      origin: formData.origin.codeIataAirport,
      destination: formData.destination.codeIataAirport,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      passengers: formData.passengers,
    };

    onSearch(searchParams);
  };
  const [value1, setValue1] = useState(optionsButton1[1].key);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(optionsButton3[0].key);

  return (
    <>
      <Styled.SearchContainer>
        <Styled.TopContainer>
          <TopElement
            options={optionsButton1}
            value={value1}
            setValue={setValue1}
          />
          <PlusMinusSelect value={value2} setValue={setValue2} />
          <TopElement
            options={optionsButton3}
            value={value3}
            setValue={setValue3}
          />
        </Styled.TopContainer>
        <form onSubmit={handleSubmit} className="search-form" style={{padding:"0", margin:"0"}}>
         <AirportAutocomplete
                setFormData={setFormData}
                label="Origin"
                dataKey="origin"
              />
          <AirportAutocomplete
                setFormData={setFormData}
                label="Destination"
                dataKey="destination"
              />
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
        </form>
      </Styled.SearchContainer>
      <Button
        startIcon={<SearchIcon style={{ fill: "white" }} />}
        style={{
          textTransform: "none",
          borderRadius: "24px",
          padding: "0.5rem 1rem",
          fontWeight: "600",         
          margin: "auto",
          bottom: "24px",
          boxShadow: '0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)'
        }}
        type="submit"
        variant="contained"
      >
        Search
      </Button>
    </>
  );
};

export default SearchForm;
