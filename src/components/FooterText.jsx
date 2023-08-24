import { Box, Typography } from "@mui/material";

const FooterText = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        py: "15px",
        borderTop: "1px solid #ccc",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Copyright &copy; 2023 MeTube
      </Typography>
    </Box>
  );
};

export default FooterText;
