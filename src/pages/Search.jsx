import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Loading, VideoList } from "../components";
import { fetchApiData } from "../utils/fetchApiData";

const Search = () => {
  const [videos, setVideos] = useState([]);

  const { keyword } = useParams();

  useEffect(() => {
    fetchApiData(`search?&part=snippet&q=${keyword}`).then((data) => {
      setVideos(data.items);
    });
  }, [keyword]);

  if (!videos.length) return <Loading />;

  return (
    <Container disableGutters sx={{ px: "10px" }}>
      <Typography
        variant="h5"
        color="primary.main"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "#de264e",
          mb: "20px",
        }}
      >
        Search results for "{keyword}" videos
      </Typography>

      <VideoList videos={videos} />
    </Container>
  );
};

export default Search;
