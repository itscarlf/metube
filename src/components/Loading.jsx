import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", backdropFilter: "blur(5px)", zIndex: 10 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
