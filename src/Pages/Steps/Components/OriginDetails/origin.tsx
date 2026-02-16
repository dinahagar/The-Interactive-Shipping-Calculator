import { TextField } from "@mui/material";
import {
  StyledCodeDiv,
  StyledForm,
  StyledFormDiv,
  StyledNote,
  StyledP,
  StyledSpan,
} from "./origin.styles";
import { updateData } from "../../../../Store/Reducers/originSlice";
import { ChangeEvent, useContext, useState } from "react";
import { OriginContext } from "../../../../Context/originContext";
import { originSchema } from "../../../../Components/Validation/originValidation";

const Origin = () => {
  const context = useContext(OriginContext);
  if (!context) throw new Error("Must be used inside OriginProvider");
  const { originState, dispatch } = context;

  const [errors, setErrors] = useState<{
    countryCode?: string[];
  }>({});

  const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({
        origin: { ...originState.origin, countryCode: e.target.value },
      }),
    );

    if (originState.origin.countryCode) {
      const result = originSchema.safeParse(originState.origin);

      if (!result.success) {
        setErrors(result.error.flatten().fieldErrors);
      } else {
        setErrors({});
      }
    }
  };
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({
        origin: { ...originState.origin, country: e.target.value },
      }),
    );
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({ origin: { ...originState.origin, city: e.target.value } }),
    );
  };
  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({ origin: { ...originState.origin, street: e.target.value } }),
    );
  };

  return (
    <div>
      <StyledP>Please Enter Your Data</StyledP>
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
              value={originState.origin.countryCode}
              onChange={handleCountryCodeChange}
              error={!!errors.countryCode}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{ width: "75%" }}
              value={originState.origin.country}
              onChange={handleCountryChange}
            />
          </StyledCodeDiv>
          {errors.countryCode && <StyledSpan> {errors.countryCode?.[0]} </StyledSpan>}
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
