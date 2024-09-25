import React from "react";
import * as Styled from "./styles";
import Select from "@mui/material/Select";

const TopElement = ({options, dataKey, formData, setFormData}) => {
  
  const handleChange = (event) => {
    setFormData((formData)=>({
      ...formData,
      [dataKey]: event.target.value,
    }));
  };

  return (
    <Styled.TopElement>
      <Select
        value={formData[dataKey]}
        renderValue={(value) => options.find((el) => el.key === value).selected}
        onChange={handleChange}
        inputProps={{ "aria-label": "Trip type" }}
        variant="standard"
        sx={{
          minWidth: "56px",
        }}
        disableUnderline
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
      >
        {options.map((el, index) =>
          el.option(formData[dataKey] === el.key, index, {
            sx: { paddingRight: "24px", height: "56px" },
          })
        )}
      </Select>
    </Styled.TopElement>
  );
};

export default TopElement;
