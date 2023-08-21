import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { VideoList } from "../components";
import { fetchApiData } from "../utils/fetchApiData";

const Search = () => {
  const [videos, setVideos] = useState([]);

  const { keyword } = useParams();

  useEffect(() => {
    fetchApiData(`search?&part=snippet&q=${keyword}`).then((data) => {
      setVideos(data.items);
    });
  }, [keyword]);

  console.log(keyword);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for "{keyword}" videos
      </Typography>

      <VideoList videos={videos} />
    </Box>
  );
};

export default Search;
