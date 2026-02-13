import React from "react";
import {
  StyledForm,
  StyledFormDiv,
  StyledP,
} from "../OriginDetails/origin.styles";
import { TextField } from "@mui/material";

const PackageDim = () => {
  return (
    <div>
      <StyledP>Please Enter Your Package Dimensions</StyledP>
      <StyledFormDiv>
        <StyledForm>
          <TextField id="outlined-basic" label="Weight" variant="outlined" />
          <TextField id="outlined-basic" label="Volume" variant="outlined" />
        </StyledForm>
      </StyledFormDiv>
    </div>
  );
};

export default PackageDim;
