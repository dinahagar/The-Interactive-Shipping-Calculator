import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../Theme/Theme";
import { useNavigate } from "react-router-dom";

const Lastpage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: "center",
        height: "60vh",
        marginTop: "20vh",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textShadow: `4px 3px ${theme.colors.darkgrey}` }}
      >
        Your process is successfully done!
      </Typography>

      <Button
        variant="contained"
        sx={{ marginTop: "30px" }}
        onClick={() => navigate("/")}
      >
        Back Home
      </Button>
    </Box>
  );
};

export default Lastpage;
