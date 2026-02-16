import { TextField } from "@mui/material";
import {
  StyledCodeDiv,
  StyledForm,
  StyledFormDiv,
  StyledNote,
  StyledP,
  StyledSpan,
} from "../OriginDetails/origin.styles";
import { ChangeEvent, useContext, useState } from "react";
import { updateData } from "../../../../Store/Reducers/destinationSlice";
import { DestinationContext } from "../../../../Context/destinationContext";
import { destinationSchema } from "../../../../Components/Validation/destinationValidation";

const Destination = () => {
  const context = useContext(DestinationContext);
  if (!context) throw new Error("Must be used inside DestinationProvider");
  const { destinationState, dispatchDestination } = context;

  const [errors, setErrors] = useState<{
    countryCode?: string[];
  }>({});

  const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchDestination(
      updateData({
        destination: {
          ...destinationState.destination,
          countryCode: e.target.value,
        },
      }),
    );

    if (destinationState.destination.countryCode) {
      const result = destinationSchema.safeParse(destinationState.destination);

      if (!result.success) {
        setErrors(result.error.flatten().fieldErrors);
      } else {
        setErrors({});
      }
    }
  };
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchDestination(
      updateData({
        destination: {
          ...destinationState.destination,
          country: e.target.value,
        },
      }),
    );
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchDestination(
      updateData({
        destination: { ...destinationState.destination, city: e.target.value },
      }),
    );
  };
  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchDestination(
      updateData({
        destination: {
          ...destinationState.destination,
          street: e.target.value,
        },
      }),
    );
  };

  return (
    <div>
      <StyledP>Please Enter Destination Data</StyledP>
      <StyledNote>**Please enter your country code</StyledNote>
      <StyledFormDiv>
        <StyledForm>
          <StyledCodeDiv>
            <TextField
              required
              id="outlined-required"
              label="+20"
              variant="outlined"
              sx={{ width: "20%", minWidth: "60px" }}
              value={destinationState.destination.countryCode}
              onChange={handleCountryCodeChange}
              error={!!errors.countryCode}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{ width: "75%" }}
              value={destinationState.destination.country}
              onChange={handleCountryChange}
            />
          </StyledCodeDiv>
          {errors.countryCode && (
            <StyledSpan> {errors.countryCode?.[0]} </StyledSpan>
          )}
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
