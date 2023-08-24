import { Box, IconButton, Stack } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const NavBar = ({ theme, setTheme }) => {
  const linkStyle = {};

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: "5px",
        px: "10px",
        mb: "10px",
        backgroundColor: "primary.background",
        //backgroundColor: { sm: "lightgreen", mm: "blue" },
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      <Link to="/" style={linkStyle}>
        <img src="./logo192.png" alt="logo" width={50} height={50} />
      </Link>

      <Stack direction="row" alignItems="center">
        <IconButton
          onClick={() => setTheme(!theme)}
          sx={{ color: "primary.main", mr: "7px", mb: "3px" }}
        >
          {theme ? (
            <DarkModeIcon sx={{ width: "35px", height: "35px" }} />
          ) : (
            <LightModeIcon sx={{ width: "35px", height: "35px" }} />
          )}
        </IconButton>

        <SearchBar />
      </Stack>
    </Box>
  );
};

export default NavBar;
