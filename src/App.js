import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

import { Feed, Video, Channel, Search, NotFound } from "./pages";
import { FooterText, NavBar } from "./components";
import { dark, light } from "./utils/themes";

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Container disableGutters sx={{ backgroundColor: "primary.background" }}>
        <NavBar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <FooterText />
      </Container>
    </ThemeProvider>
  );
};

export default App;
