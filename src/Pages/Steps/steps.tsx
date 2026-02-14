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
import React from "react";
import Origin from "./Components/OriginDetails/origin";
import Destination from "./Components/DestinationDetails/destination";
import PackageDim from "./Components/PackageDimensions/package-dim";
import Couriercard from "../CourierCard/couriercard";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleReset = () => {
    setActiveStep(0);
    setOpen(false);
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
                <Button variant="contained" sx={{ textTransform: "none" }}>
                  Next
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOpenPopup}
                  sx={{ textTransform: "none" }}
                >
                  Reset
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
                  backgroundColor: "rgba(0, 0, 0, 0.26)",
                  color: "#1976d2",
                  textTransform: "none",
                }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  textTransform: "none",
                }}
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
          <Button onClick={handleClose} sx={{ textTransform: 'none' }} variant="outlined">Cancel</Button>
          <Button onClick={handleReset} sx={{ textTransform: 'none' }} variant="contained" autoFocus>
            Sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Steps;
