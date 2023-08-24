import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
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
    <Container disableGutters sx={{ px: "10px" }}>
      <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />

      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textDecoration: "underline",
          textDecorationColor: "#de264e",
        }}
      >
        {selectedCat} Videos
      </Typography>

      <VideoList videos={videos} />
    </Container>
  );
};

export default Feed;
