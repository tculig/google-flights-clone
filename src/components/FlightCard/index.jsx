// @ts-nocheck
import * as Styled from "./styles";
import React from "react";

const getTimeOnly = (timedate) => {
  const fullTime = timedate.split("T")[1];
  return fullTime.substring(0, 5);
}

const getDuration = (starttime,endtime) => {
  const diff = (new Date(endtime)) - (new Date(starttime));
  return msToTime(diff);
}

function msToTime(duration) {
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours} hrs ${minutes} min`;
}


const FlightCard = ({ flight }) => {
  const firstLeg = flight.legs[0];
  const stops = firstLeg.segments.length;

  return (
    <div className="flight-card">
           <Styled.SectionBox>
        <img
          src={firstLeg.carriers.marketing[0].logoUrl}
          style={{ width: "35px", height: "35px" }}
          alt="airline logo"
        />
      </Styled.SectionBox>
      <Styled.SectionBoxFlex>
          <div><strong>{`${getTimeOnly(firstLeg.departure)} - ${getTimeOnly(firstLeg.arrival)}`}</strong></div>
          <div>{firstLeg.carriers.marketing[0].name}</div>
      </Styled.SectionBoxFlex>
      <Styled.SectionBoxFlex>
        <div>{msToTime(firstLeg.durationInMinutes*60*1000)}</div>
        <div>{firstLeg.origin.id}-{firstLeg.destination.id}</div>
        </Styled.SectionBoxFlex>
      <Styled.SectionBox>{stops===1?"Non-stop":`${stops-1} stop${stops>2?'s':''}`} </Styled.SectionBox>
      <Styled.SectionBoxFlexCenter>
        <div>ECO score:</div>
        <div>{flight.eco?.ecoContenderDelta}</div>
        </Styled.SectionBoxFlexCenter>
      <Styled.SectionBox>{flight.price.formatted} </Styled.SectionBox>
    </div>
  );
};

export default FlightCard;
