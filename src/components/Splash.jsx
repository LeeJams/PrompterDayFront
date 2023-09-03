import logo from "../assets/images/logo.svg";
import { Box } from "@mui/material";

function Splash() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#181816",
      }}
    >
      <img src={logo} alt="logo" />
    </Box>
  );
}

export default Splash;
