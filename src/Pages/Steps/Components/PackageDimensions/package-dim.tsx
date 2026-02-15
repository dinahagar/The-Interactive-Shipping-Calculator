import {
  StyledForm,
  StyledFormDiv,
  StyledP,
} from "../OriginDetails/origin.styles";
import { TextField } from "@mui/material";
import {
  updateData,
} from "../../../../Store/Reducers/packageSlice";
import { ChangeEvent, useContext } from "react";
import { PackageContext } from "../../../../Context/packageDimContext";

const PackageDim = () => {
  const context = useContext(PackageContext);

  if (!context) throw new Error("Must be used inside PackageProvider");

  const { packageState, dispatch } = context;

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({
        packageDetails: { ...packageState.packageDetails, weight: e.target.value },
      }),
    );
  };
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateData({
        packageDetails: { ...packageState.packageDetails, volume: e.target.value },
      }),
    );
  };

  return (
    <div>
      <StyledP>Please Enter Your Package Dimensions</StyledP>
      <StyledFormDiv>
        <StyledForm>
          <TextField
            id="outlined-basic"
            label="Weight"
            variant="outlined"
            value={packageState.packageDetails.weight}
            onChange={handleWeightChange}
          />
          <TextField
            id="outlined-basic"
            label="Volume"
            variant="outlined"
            value={packageState.packageDetails.volume}
            onChange={handleVolumeChange}
          />
        </StyledForm>
      </StyledFormDiv>
    </div>
  );
};

export default PackageDim;
