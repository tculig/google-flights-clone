import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { ReactComponent as CheckmarkIcon } from "../../assets/checkmark.svg";
import { ReactComponent as ArrowRight } from "../../assets/right_arrow.svg";
import { ReactComponent as BothWays } from "../../assets/both_ways.svg";
import * as Styled from "./config.styles";

const optionsButton1 = [
    {
      key: "roundTrip",
      selected: (
        <Styled.SelectedContainer>
          <Styled.SelectedIconContainer>
             <BothWays />
          </Styled.SelectedIconContainer>
          <Styled.SelectedText>
          Round trip
          </Styled.SelectedText>
          </Styled.SelectedContainer>
      ),
      option: (isSelected, index, additionalProps) => (
        <MenuItem value="roundTrip" key={index} {...additionalProps}>
          <Styled.DropdownIconContainer>
            {isSelected ? <CheckmarkIcon /> : ""}
          </Styled.DropdownIconContainer>
          <Styled.OptionText>
          Round trip
          </Styled.OptionText>
        </MenuItem>
      ),
    },
    {
      key: "oneWay",
      selected: (
        <Styled.SelectedContainer>
          <Styled.SelectedIconContainer>
             <ArrowRight />
          </Styled.SelectedIconContainer>
          <Styled.SelectedText>
          One-way
          </Styled.SelectedText>
          </Styled.SelectedContainer>
      ),
      option: (isSelected, index, additionalProps) => (
        <MenuItem value="oneWay" key={index} {...additionalProps}>
          <Styled.DropdownIconContainer>
            {isSelected ? <CheckmarkIcon /> : ""}
          </Styled.DropdownIconContainer>
          <Styled.OptionText>
          One-way
          </Styled.OptionText>
        </MenuItem>
      ),
    },
  ];

  const optionsButton3 = [
    {
      key: "economy",
      selected: (
        <Styled.SelectedContainer>
          <Styled.SelectedText>
             Economy
          </Styled.SelectedText>
          </Styled.SelectedContainer>
      ),
      option: (isSelected, index, additionalProps) => (
        <MenuItem value="economy" key={index} {...additionalProps}>
          <Styled.DropdownIconContainer>
            {isSelected ? <CheckmarkIcon /> : ""}
          </Styled.DropdownIconContainer>
          <Styled.OptionText>
            Economy
          </Styled.OptionText>
        </MenuItem>
      ),
    },
    {
      key: "premiumEconomy",
      selected: (
        <Styled.SelectedContainer>
          <Styled.SelectedText>
          Premium Economy
          </Styled.SelectedText>
          </Styled.SelectedContainer>
      ),
      option: (isSelected, index, additionalProps) => (
        <MenuItem value="premiumEconomy" key={index} {...additionalProps}>
          <Styled.DropdownIconContainer>
            {isSelected ? <CheckmarkIcon /> : ""}
          </Styled.DropdownIconContainer>
          <Styled.OptionText>
          Premium Economy
          </Styled.OptionText>
        </MenuItem>
      ),
    },
    {
      key: "business",
      selected: (
        <Styled.SelectedContainer>
          <Styled.SelectedText>
          Business
          </Styled.SelectedText>
          </Styled.SelectedContainer>
      ),
      option: (isSelected, index, additionalProps) => (
        <MenuItem value="business" key={index} {...additionalProps}>
          <Styled.DropdownIconContainer>
            {isSelected ? <CheckmarkIcon /> : ""}
          </Styled.DropdownIconContainer>
          <Styled.OptionText>
          Business
          </Styled.OptionText>
        </MenuItem>
      ),
    },
    {
      key: "first",
      selected: (
        <Styled.SelectedContainer>
          <Styled.SelectedText>
          First
          </Styled.SelectedText>
          </Styled.SelectedContainer>
      ),
      option: (isSelected, index, additionalProps) => (
        <MenuItem value="first" key={index} {...additionalProps}>
          <Styled.DropdownIconContainer>
            {isSelected ? <CheckmarkIcon /> : ""}
          </Styled.DropdownIconContainer>
          <Styled.OptionText>
          First
          </Styled.OptionText>
        </MenuItem>
      ),
    },
  ];

  export { optionsButton1, optionsButton3}
 