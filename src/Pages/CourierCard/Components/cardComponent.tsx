import { Card, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { StyledCardHeader, StyledImg } from "../couriercard.styles";
import { theme } from "../../../Theme/Theme";
import { CourierContext } from "../../../Context/courierContext";
import { setSelectedCourier } from "../../../Store/Reducers/courierSlice";
import { Courier } from "../../../Types/courierTypes";

const CardComponent = ({ item, data }: { item: Courier; data: Courier[] }) => {
  const courierContext = useContext(CourierContext);
  if (!courierContext) throw new Error("Must be used inside CourierProvider");
  const { courierState } = courierContext;

  const selectedCourierId = courierState.selectedCourier?.id;

  const { dispatch } = courierContext;

  const handleSelectCourier = (id: number) => {
    const selectedCourier = data.find((c: Courier) => c.id === id);

    if (selectedCourier) {
      dispatch(setSelectedCourier(selectedCourier));
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          cursor: "pointer",
          backgroundColor: `${theme.colors.linen}`,
          border:
            selectedCourierId === item.id
              ? `solid 3px ${theme.colors.primary}`
              : "none",
        }}
        onClick={() => handleSelectCourier(item.id)}
      >
        <StyledCardHeader
          avatar={<StyledImg src={item.image} alt="" />}
          title={item.name}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: `${theme.colors.darkslategrey}`,
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            Base Price: {item.basePrice}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: `${theme.colors.darkslategrey}`,
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            Tax Fees: {item.taxFees}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: `${theme.colors.darkslategrey}`,
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            Est.Shipping: {item.estimatedDeliveryTimeline} business days
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
