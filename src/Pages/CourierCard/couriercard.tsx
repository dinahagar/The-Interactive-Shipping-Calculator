import React, { useState } from "react";
import { useGetAllCouriersQuery } from "../../Store/Services/courier";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Courier } from "../../Types/courier";
import { StyledCardHeader, StyledH1, StyledImg } from "./couriercard.styles";

const Couriercard = () => {
  const { data, isLoading } = useGetAllCouriersQuery({});
  const [selectedId, setSelectedId] = useState<number>();

  console.log(data);

  return (
    <div>
      <StyledH1>Select Courier</StyledH1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((item: Courier) => (
            <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
              <Card
                sx={{
                  maxWidth: 345,
                  cursor: "pointer",
                  backgroundColor: "linen",
                  border: selectedId === item.id ? "solid 3px #1976d2" : "none",
                }}
                onClick={() => setSelectedId(item.id)}
              >
                <StyledCardHeader
                  avatar={<StyledImg src={item.image} alt="" />}
                  title={item.name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "darkslategrey",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Base Price: {item.basePrice}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "darkslategrey",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Tax Fees: {item.taxFees}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "darkslategrey",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Est.Shipping: {item.estimatedDeliveryTimeline} business days
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Couriercard;
