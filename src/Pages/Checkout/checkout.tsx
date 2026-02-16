import { Box, Button, Typography } from "@mui/material";
import CardComponent from "../CourierCard/Components/cardComponent";
import { useNavigate } from "react-router-dom";
import { StyledBox, StyledH1 } from "./checkout.styles";
import { resetCourierData } from "../../Store/Reducers/courierSlice";
import { resetPackageData } from "../../Store/Reducers/packageSlice";
import { resetDestinationData } from "../../Store/Reducers/destinationSlice";
import { resetOriginData } from "../../Store/Reducers/originSlice";
import { useOrigin } from "../../Hooks/useOrigin";
import { useDestination } from "../../Hooks/useDestination";
import { usePackage } from "../../Hooks/usePackage";
import { useCourier } from "../../Hooks/useCourier";

const Checkout = () => {
  const navigate = useNavigate();

  const { originState, dispatchOrigin } = useOrigin();
  const { destinationState, dispatchDestination } = useDestination();
  const { packageState, dispatchPackage } = usePackage();
  const { courierState, dispatchCourier } = useCourier();

  const handleOkayBtn = () => {
    dispatchCourier(resetCourierData);
    dispatchPackage(resetPackageData);
    dispatchDestination(resetDestinationData);
    dispatchOrigin(resetOriginData);
    navigate(`/lastpage`);
  };

  return (
    <Box sx={{ padding: "30px" }}>
      <StyledH1>Review Your Data</StyledH1>
      <Box
        sx={{
          padding: {
            xs: "10px",
            sm: "0px 50px",
          },
        }}
      >
        <StyledBox>
          <h2>Origin Details</h2>
          <hr />
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Country Code:{" "}
              {originState.origin.countryCode
                ? originState.origin.countryCode
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Country:{" "}
              {originState.origin.country
                ? originState.origin.country
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              City:{" "}
              {originState.origin.city ? originState.origin.city : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Street:{" "}
              {originState.origin.street
                ? originState.origin.street
                : "Undefined"}
            </Typography>
          </Box>
        </StyledBox>
        <StyledBox>
          <h2>Destination Details</h2>
          <hr />

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Country Code:{" "}
              {destinationState.destination.countryCode
                ? destinationState.destination.countryCode
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Country:{" "}
              {destinationState.destination.country
                ? destinationState.destination.country
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              City:{" "}
              {destinationState.destination.city
                ? destinationState.destination.city
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Street:{" "}
              {destinationState.destination.street
                ? destinationState.destination.street
                : "Undefined"}
            </Typography>
          </Box>
        </StyledBox>
        <StyledBox>
          <h2>Package Details</h2>
          <hr />

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Weight:{" "}
              {packageState.packageDetails.weight
                ? packageState.packageDetails.weight
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Volume:{" "}
              {packageState.packageDetails.volume
                ? packageState.packageDetails.volume
                : "Undefined"}
            </Typography>
          </Box>
        </StyledBox>
        <StyledBox>
          <h2>Courier</h2>

          {courierState.selectedCourier ? (
            <CardComponent item={courierState.selectedCourier} data={[]} />
          ) : (
            "Undefined"
          )}
        </StyledBox>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            onClick={() => navigate(`/steps/4`)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleOkayBtn}
          >
            Okay
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
