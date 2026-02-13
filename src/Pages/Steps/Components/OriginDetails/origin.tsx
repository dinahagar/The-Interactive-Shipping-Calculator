import { TextField } from "@mui/material";
import {
  StyledCodeDiv,
  StyledForm,
  StyledFormDiv,
  StyledP,
} from "./origin.styles";

const Origin = () => {
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

export default Origin;
