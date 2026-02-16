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
import { ChangeEvent, useState } from "react";
import { originSchema } from "../../../../Components/Validation/originValidation";
import { useOrigin } from "../../../../Hooks/useOrigin";

const Origin = () => {
  const { originState, dispatchOrigin } = useOrigin();

  const [errors, setErrors] = useState<{
    countryCode?: string[];
  }>({});

  const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchOrigin(
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
    dispatchOrigin(
      updateData({
        origin: { ...originState.origin, country: e.target.value },
      }),
    );
  };
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchOrigin(
      updateData({ origin: { ...originState.origin, city: e.target.value } }),
    );
  };
  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchOrigin(
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
