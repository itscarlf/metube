import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Loading, SideBar, VideoList } from "../components";
import { fetchApiData } from "../utils/fetchApiData";

const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApiData(`search?&part=snippet&q=${selectedCat}`).then((data) =>
      setVideos(data.items)
    );

    //setVideos(JSON.parse(localStorage.getItem("popularRecipes")));
  }, [selectedCat]);

  console.log(videos.length);

  if (!videos.length) return <Loading />;

  return (
    <Container
      disableGutters
      sx={{
        px: { sm: "10px", mm: "40px", lm: "60px" },
      }}
    >
      <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />

      <Typography
        variant="h5"
        color="primary.main"
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
