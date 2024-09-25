import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import AirportAutocomplete from "../../components/AirportAutocomplete";
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
    tripType: optionsButton1[1].key,
    class: optionsButton3[0].key,
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = useCallback(
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(formData);
    },
    [formData, onSearch]
  );

  return (
    <>
      <Styled.SearchContainer>
        <Styled.TopContainer>
          <TopElement
            options={optionsButton1}
            setFormData={setFormData}
            formData={formData}
            dataKey="tripType"
          />
          <PlusMinusSelect setFormData={setFormData} dataKey="passengers" formData={formData}/>
          <TopElement
            options={optionsButton3}
            setFormData={setFormData}
            formData={formData}
            dataKey="class"
          />
        </Styled.TopContainer>
        <form
          onSubmit={handleSubmit}
          className="search-form"
          style={{ padding: "0", margin: "0" }}
          id="search-form"
        >
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
            inputProps={{
              min: today,
            }}
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
          boxShadow:
            "0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)",
        }}
        type="submit"
        variant="contained"
        form="search-form"
      >
        Search
      </Button>
    </>
  );
};

export default SearchForm;
