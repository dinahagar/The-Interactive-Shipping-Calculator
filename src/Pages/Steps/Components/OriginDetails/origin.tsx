import { TextField } from "@mui/material";
import {
  StyledCodeDiv,
  StyledForm,
  StyledFormDiv,
  StyledP,
} from "./origin.styles";
import { updateData } from "../../../../Store/Reducers/originSlice";
import { ChangeEvent, useContext } from "react";
import { OriginContext } from "../../../../Context/originContext";

const Origin = () => {
  const context = useContext(OriginContext);
  if (!context) throw new Error("Must be used inside OriginProvider");
  const { originState, dispatch } = context;

  const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({ origin: { ...originState.origin, countryCode: e.target.value } }),
    );
  };
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({ origin: { ...originState.origin, country: e.target.value } }),
    );
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ origin: { ...originState.origin, city: e.target.value } }));
  };
  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({ origin: { ...originState.origin, street: e.target.value } }),
    );
  };

  // console.log(origin);

  return (
    <div>
      <StyledP>Please Enter Your Data</StyledP>
      <StyledFormDiv>
        <StyledForm>
          <StyledCodeDiv>
            <TextField
              id="outlined-basic"
              label="+20"
              variant="outlined"
              sx={{ width: "15%", minWidth: "60px" }}
              value={originState.origin.countryCode}
              onChange={handleCountryCodeChange}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{ width: "80%" }}
              value={originState.origin.country}
              onChange={handleCountryChange}
            />
          </StyledCodeDiv>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={originState.origin.city}
            onChange={handleCityChange}
          />
          <TextField
            id="outlined-basic"
            label="Street"
            variant="outlined"
            value={originState.origin.street}
            onChange={handleStreetChange}
          />
        </StyledForm>
      </StyledFormDiv>
    </div>
  );
};

export default Origin;
