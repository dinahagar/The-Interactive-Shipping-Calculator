import { Box, Grid, Skeleton } from "@mui/material";

const CourierSkeleton = () => {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 4, md: 4 }} sx={{ minWidth: "300px" }}>
            <Box
              sx={{
                justifyContent: "center",
                display: "grid",
                border: "solid 1px rgba(0, 0, 0, 0.11)",
                padding: "20px",
                maxWidth: "300px",
                borderRadius: "4px",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                  width={180}
                  height={25}
                />
              </Box>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={180}
                height={25}
              />
              <Skeleton variant="text" width={155} height={25} />
              <Skeleton variant="text" width={220} height={25} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourierSkeleton;
