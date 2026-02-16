import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { useContext } from "react";
import Origin from "./Components/OriginDetails/origin";
import Destination from "./Components/DestinationDetails/destination";
import PackageDim from "./Components/PackageDimensions/package-dim";
import Couriercard from "../CourierCard/couriercard";
import { theme } from "../../Theme/Theme";
import { useNavigate, useParams } from "react-router-dom";
import { OriginContext } from "../../Context/originContext";
import { DestinationContext } from "../../Context/destinationContext";
import { PackageContext } from "../../Context/packageDimContext";
import { CourierContext } from "../../Context/courierContext";
import { resetCourierData } from "../../Store/Reducers/courierSlice";
import { resetPackageData } from "../../Store/Reducers/packageSlice";
import { resetDestinationData } from "../../Store/Reducers/destinationSlice";
import { resetOriginData } from "../../Store/Reducers/originSlice";

const steps = [
  {
    label: "Origin Details",
    component: <Origin />,
  },
  {
    label: "Destination Details",
    component: <Destination />,
  },
  {
    label: "Package Dimensions",
    component: <PackageDim />,
  },
];

const Steps = () => {
  const { stepId } = useParams();
  const stepsLength = steps.length;
  const activeStep = Number(stepId) - 1;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const originContext = useContext(OriginContext);
  if (!originContext) throw new Error("Must be used inside OriginProvider");
  const { originState, dispatchOrigin } = originContext;

  const destinationContext = useContext(DestinationContext);
  if (!destinationContext)
    throw new Error("Must be used inside DestinationProvider");
  const { destinationState, dispatchDestination } = destinationContext;

  const packageContext = useContext(PackageContext);
  if (!packageContext) throw new Error("Must be used inside PackageProvider");
  const { packageState, dispatchPackage } = packageContext;

  const courierContext = useContext(CourierContext);
  if (!courierContext) throw new Error("Must be used inside CourierProvider");
  const { courierState, dispatchCourier } = courierContext;

  const handleNext = () => {
    if (Number(stepId) === stepsLength) {
      navigate(`/steps/${Number(stepId) + 1}`);
    } else {
      navigate(`/steps/${Number(stepId) + 1}`);
    }
  };

  const handleBack = () => {
    navigate(`/steps/${Number(stepId) - 1}`);
  };

  const handleReset = () => {
    dispatchCourier(resetCourierData);
    dispatchPackage(resetPackageData);
    dispatchDestination(resetDestinationData);
    dispatchOrigin(resetOriginData);

    navigate(`/steps/1`);
    setOpen(false);
  };

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          padding: {
            xs: "10px",
            md: "30px",
          },
        }}
      >
        {activeStep === steps.length ? (
          <>
            <Couriercard />

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOpenPopup}
                  sx={{ textTransform: "none" }}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  onClick={() => navigate(`/checkout`)}
                  disabled={
                    Number(stepId) === 4 &&
                    !(Number(stepId) === 4 && courierState.selectedCourier)
                  }
                >
                  Review
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                return (
                  <Step key={label.label} {...stepProps}>
                    <StepLabel>{label.label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            <div>{steps[activeStep].component}</div>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: 1,
                  backgroundColor: `${theme.colors.darkgrey}`,
                  color: `${theme.colors.primary}`,
                  textTransform: "none",
                }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{
                  backgroundColor: `${theme.colors.primary}`,
                  color: `${theme.colors.white}`,
                  textTransform: "none",
                }}
                disabled={
                  (Number(stepId) === 1 &&
                    (!originState.origin.countryCode ||
                      isNaN(Number(originState.origin.countryCode)))) ||
                  (Number(stepId) === 2 &&
                    (!destinationState.destination.countryCode ||
                      isNaN(
                        Number(destinationState.destination.countryCode),
                      ))) ||
                  (Number(stepId) === 3 &&
                    (!packageState.packageDetails.weight ||
                      Number(packageState.packageDetails.weight) <= 0))
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All you data will be removed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ textTransform: "none" }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleReset}
            sx={{ textTransform: "none" }}
            variant="contained"
            autoFocus
          >
            Sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Steps;
