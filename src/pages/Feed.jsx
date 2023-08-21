import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, VideoList } from "../components";
//import { fetchApiData } from "../utils/fetchApiData";

const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fetchApiData(`search?&part=snippet&q=${selectedCat}`).then((data) => {
    //   localStorage.setItem("popularRecipes", JSON.stringify(data.items));

    //   setVideos(data.items);
    // });

    setVideos(JSON.parse(localStorage.getItem("popularRecipes")));
  }, [selectedCat]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 MeTube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCat} Videos
        </Typography>

        <VideoList videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
