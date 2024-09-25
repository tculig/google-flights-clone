import React, { useEffect, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress, debounce } from "@mui/material";
import axios from "axios";

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const AirportAutocomplete = ({ setFormData, label, dataKey }) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOriginOptions = useMemo(
    () =>
      debounce(async (input) => {
        if (input.length < 3) {
          setDropdownOptions([]);
          return;
        }
        setLoading(true);
        try {
          const response = await axios.get('https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport', {
            params: {
              query: input,
              locale: "en-US"
          },
          headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
          },
          });
          const newOptions = response.data?.data?.map(el=>({
            id:el.entityId,
            label: el.presentation.suggestionTitle,
          }))
          console.log(newOptions)
          setDropdownOptions(newOptions??[]);
        } catch (error) {
          console.error('Error fetching airport suggestions:', error);
        } finally {
          setLoading(false);
        }
      }, 500),
    []
  );

  useEffect(() => {
    return () => {
      fetchOriginOptions.clear();
    };
  }, [fetchOriginOptions]);

  return (
    <Autocomplete
    inputValue={inputValue}
    options={dropdownOptions}

    loading={loading}
    onInputChange={(event, value, reason) => {
      if (reason === "input") {
        setInputValue(value);
        fetchOriginOptions(value);
      }
    }}
    onChange={(event, newValue) => {
      console.log(newValue)
      setInputValue(newValue?.label??"");
      if(newValue==null) setDropdownOptions([]);
      setFormData((formData)=>({
        ...formData,
        [dataKey]: newValue,
      }));
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        variant="outlined"
        required
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <>
              {loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : null}
              {params.InputProps.endAdornment}
            </>
          ),
        }}
      />
    )}
  />
  );
};

export default AirportAutocomplete;
