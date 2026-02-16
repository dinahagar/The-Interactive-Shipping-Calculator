import {
  StyledForm,
  StyledFormDiv,
  StyledNote,
  StyledP,
  StyledSpan,
} from "../OriginDetails/origin.styles";
import { TextField } from "@mui/material";
import { updateData } from "../../../../Store/Reducers/packageSlice";
import { ChangeEvent, useState } from "react";
import { packageSchema } from "../../../../Components/Validation/packageValidation";
import { usePackage } from "../../../../Hooks/usePackage";

const PackageDim = () => {
  const { packageState, dispatchPackage } = usePackage();

  const [errors, setErrors] = useState<{
    weight?: string[];
  }>({});

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchPackage(
      updateData({
        packageDetails: {
          ...packageState.packageDetails,
          weight: e.target.value,
        },
      }),
    );

    if (packageState.packageDetails.weight) {
      const result = packageSchema.safeParse(packageState.packageDetails);

      if (!result.success) {
        setErrors(result.error.flatten().fieldErrors);
      } else {
        setErrors({});
      }
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchPackage(
      updateData({
        packageDetails: {
          ...packageState.packageDetails,
          volume: e.target.value,
        },
      }),
    );
  };

  return (
    <div>
      <StyledP>Please Enter Your Package Dimensions</StyledP>
      <StyledNote>**Please enter your package's weight</StyledNote>
      <StyledFormDiv>
        <StyledForm>
          <TextField
            required
            id="outlined-required"
            label="Weight"
            variant="outlined"
            value={packageState.packageDetails.weight}
            onChange={handleWeightChange}
            error={!!errors.weight}
          />
          {errors.weight?.[0] && (
            <StyledSpan> {errors.weight?.[0]} </StyledSpan>
          )}

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
