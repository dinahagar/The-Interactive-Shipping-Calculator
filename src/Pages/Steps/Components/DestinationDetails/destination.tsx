import { TextField } from "@mui/material";
import {
  StyledCodeDiv,
  StyledForm,
  StyledFormDiv,
  StyledP,
} from "../OriginDetails/origin.styles";
import { ChangeEvent, useContext } from "react";
import {
  updateData,
} from "../../../../Store/Reducers/destinationSlice";
import { DestinationContext } from "../../../../Context/destinationContext";

const Destination = () => {

  const context = useContext(DestinationContext);
  if (!context) throw new Error("Must be used inside DestinationProvider")
  const { destinationState, dispatch } = context;

  const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ destination: {...destinationState.destination, countryCode: e.target.value }}));
  };
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ destination: {...destinationState.destination, country: e.target.value }}));
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ destination: {...destinationState.destination, city: e.target.value }}));
  };
  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ destination: {...destinationState.destination, street: e.target.value }}));
  };

  return (
    <div>
      <StyledP>Please Enter Destination Data</StyledP>
      <StyledFormDiv>
        <StyledForm>
          <StyledCodeDiv>
            <TextField
              id="outlined-basic"
              label="+20"
              variant="outlined"
              sx={{ width: "15%", minWidth: "60px" }}
              value={destinationState.destination.countryCode}
              onChange={handleCountryCodeChange}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{ width: "80%" }}
              value={destinationState.destination.country}
              onChange={handleCountryChange}
            />
          </StyledCodeDiv>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={destinationState.destination.city}
            onChange={handleCityChange}
          />
          <TextField
            id="outlined-basic"
            label="Street"
            variant="outlined"
            value={destinationState.destination.street}
            onChange={handleStreetChange}
          />
        </StyledForm>
      </StyledFormDiv>
    </div>
  );
};

export default Destination;
