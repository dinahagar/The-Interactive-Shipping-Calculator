import { TextField } from "@mui/material";
import React from "react";
import {
  StyledCodeDiv,
  StyledForm,
  StyledFormDiv,
  StyledP,
} from "../OriginDetails/origin.styles";

const Destination = () => {
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
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              sx={{ width: "80%" }}
            />
          </StyledCodeDiv>
          <TextField id="outlined-basic" label="City" variant="outlined" />
          <TextField id="outlined-basic" label="Street" variant="outlined" />
        </StyledForm>
      </StyledFormDiv>
    </div>
  );
};

export default Destination;
