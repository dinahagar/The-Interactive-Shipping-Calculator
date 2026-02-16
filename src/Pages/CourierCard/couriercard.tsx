import { useGetAllCouriersQuery } from "../../Store/Services/courier";
import { Badge, Box, Grid } from "@mui/material";
import { Courier } from "../../Types/courierTypes";
import { StyledH1 } from "./couriercard.styles";
import CourierSkeleton from "../../Skeleton/courierSkeleton";
import CardComponent from "./Components/cardComponent";

const Couriercard = () => {
  const { data, isLoading } = useGetAllCouriersQuery<{
    data: Courier[];
    isLoading: boolean;
  }>([]);

  const lowestPrice = Math.min(...(data?.map((p) => p?.totalPrice) ?? []));
  const lowestEst = Math.min(
    ...(data?.map((p) => p?.estimatedDeliveryTimeline) ?? []),
  );

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
                    <CardComponent item={item} data={data} />
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
