import React, { useContext, useState } from "react";
import { useGetAllCouriersQuery } from "../../Store/Services/courier";
import { Badge, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Courier } from "../../Types/courier";
import { StyledCardHeader, StyledH1, StyledImg } from "./couriercard.styles";
import CourierSkeleton from "../../Skeleton/courierSkeleton";
import { theme } from "../../Theme/Theme";
import { CourierContext } from "../../Context/courierContext";
import { setSelectedCourier } from "../../Store/Reducers/courierSlice";

const Couriercard = () => {
  const { data, isLoading } = useGetAllCouriersQuery<{
    data: Courier[];
    isLoading: boolean;
  }>([]);

  const context = useContext(CourierContext);
  if (!context) throw new Error("Must be used inside Provider");

  const { dispatch } = context;

  const [selectedId, setSelectedId] = useState<number>();

  const lowestPrice = Math.min(...(data?.map((p) => p?.totalPrice) ?? []));
  const lowestEst = Math.min(
    ...(data?.map((p) => p?.estimatedDeliveryTimeline) ?? []),
  );

  const handleSelectCourier = (id: number) => {
    setSelectedId(id);

    const selectedCourier = data.find((c) => c.id === id);

    if (selectedCourier) {
      dispatch(setSelectedCourier(selectedCourier));
    }
  };

  return (
    <div>
      <StyledH1>Select Courier</StyledH1>

      {isLoading ? (
        <CourierSkeleton />
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {data?.map((item: Courier) => (
                <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                  <Badge
                    badgeContent={[
                      item.totalPrice === lowestPrice && "Cheapest",
                      item.estimatedDeliveryTimeline === lowestEst && "Fastest",
                    ]
                      .filter(Boolean)
                      .join(" & ")}
                    invisible={
                      item.totalPrice !== lowestPrice &&
                      item.estimatedDeliveryTimeline !== lowestEst
                    }
                    color="primary"
                  >
                    <Card
                      sx={{
                        maxWidth: 345,
                        cursor: "pointer",
                        backgroundColor: `${theme.colors.linen}`,
                        border:
                          selectedId === item.id
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
                          Est.Shipping: {item.estimatedDeliveryTimeline}{" "}
                          business days
                        </Typography>
                      </CardContent>
                    </Card>
                  </Badge>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </div>
  );
};

export default Couriercard;
