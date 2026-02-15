import { useContext } from "react";
import { PackageContext } from "../../Context/packageDimContext";
import { CourierContext } from "../../Context/courierContext";
import { Box, Button, Typography } from "@mui/material";
import { OriginContext } from "../../Context/originContext";
import { DestinationContext } from "../../Context/destinationContext";
import CardComponent from "../CourierCard/Components/cardComponent";
import { useNavigate } from "react-router-dom";
import { StyledBox, StyledH1 } from "./checkout.styles";

const Checkout = () => {
  const navigate = useNavigate();

  const originContext = useContext(OriginContext);
  if (!originContext) throw new Error("Must be used inside OriginProvider");
  const { originState } = originContext;

  const destinationContext = useContext(DestinationContext);
  if (!destinationContext)
    throw new Error("Must be used inside DestinationProvider");
  const { destinationState } = destinationContext;

  const packageContext = useContext(PackageContext);
  if (!packageContext) throw new Error("Must be used inside PackageProvider");
  const { packageState } = packageContext;

  const courierContext = useContext(CourierContext);
  if (!courierContext) throw new Error("Must be used inside CourierProvider");
  const { courierState } = courierContext;

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
              {destinationState.destination.countryCode
                ? destinationState.destination.countryCode
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              City:{" "}
              {destinationState.destination.countryCode
                ? destinationState.destination.countryCode
                : "Undefined"}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Street:{" "}
              {destinationState.destination.countryCode
                ? destinationState.destination.countryCode
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
            onClick={() => navigate(`/steps`)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={() => navigate(`/`)}
          >
            Okay
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
