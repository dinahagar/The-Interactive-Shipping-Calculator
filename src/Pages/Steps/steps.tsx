import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import Origin from "./Components/OriginDetails/origin";
import Destination from "./Components/DestinationDetails/destination";
import PackageDim from "./Components/PackageDimensions/package-dim";

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
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
                }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default Steps;
