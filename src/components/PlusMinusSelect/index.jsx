// @ts-nocheck
import React, { useState } from "react";
import * as Styled from "./styles";
import Select from "@mui/material/Select";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { MenuItem } from "@mui/material";

const PlusMinusSelect = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const incrementMenu = (
    <MenuItem
      value="incrementMenu"
      disableTouchRipple
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      sx={{
        "&&": { backgroundColor: ["transparent !important"] },
        "&&:focus": { backgroundColor: ["transparent !important"] },
        "&&:hover": { backgroundColor: ["transparent !important"] },
        "&&:selected": { backgroundColor: ["transparent !important"] },
      }}
    >
      <Styled.CounterRowContainer>
        <Styled.PersonCountText>Adults</Styled.PersonCountText>
        <Styled.IncrementBoxContainer >
          <Styled.IncrementBox $disabled={false} onClick={() => setValue((oldValue)=>Math.max(1,oldValue-1))} >
            <Minus />
          </Styled.IncrementBox>
        </Styled.IncrementBoxContainer>
        <Styled.ValueContainer>{value}</Styled.ValueContainer>
        <Styled.IncrementBoxContainer>
          <Styled.IncrementBox $disabled={false} onClick={() => setValue((oldValue)=>Math.min(oldValue+1,9))}>
            <Plus  />
          </Styled.IncrementBox>
        </Styled.IncrementBoxContainer>
      </Styled.CounterRowContainer>
    </MenuItem>
  );

  const displayMenu = (
    <Styled.SelectedContainer>
      <Styled.SelectedIconContainer>
        <Person />
      </Styled.SelectedIconContainer>
      <Styled.SelectedText>{value}</Styled.SelectedText>
    </Styled.SelectedContainer>
  );

  const handleChange = (event) => {};

  return (
    <Styled.RootContainer>
      <Select
        open={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        value="incrementMenu"
        renderValue={() => displayMenu}
        onChange={handleChange}
        inputProps={{ "aria-label": "Increment passangers" }}
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
        {incrementMenu}
      </Select>
    </Styled.RootContainer>
  );
};

export default PlusMinusSelect;
