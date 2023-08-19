import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, Video, Channel, Search, NotFound } from "./pages";
import { NavBar } from "./components";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
