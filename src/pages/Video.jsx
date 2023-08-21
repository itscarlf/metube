import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { fetchApiData } from "../utils/fetchApiData";
import { VideoList } from "../components";

const Video = () => {
  const [videoPlay, setVideoPlay] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchApiData(`videos?&part=snippet,statistics&id=${id}`).then((data) => {
      setVideoPlay(data.items[0]);
    });
  }, [id]);

  useEffect(() => {
    if (videoPlay) {
      fetchApiData(`search?&part=snippet&q=${videoPlay.snippet.title}`).then(
        (data) => {
          setVideos(data.items.slice(1));
        }
      );
    }
  }, [id, videoPlay]);

  // console.log(videoPlay);
  // console.log(videos);

  if (!videoPlay && !videos.length) return <div>Loading...</div>;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />

            <Typography variant="h5" color="#fff" fontWeight="bold" p={2}>
              {videoPlay.snippet.title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoPlay.snippet.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoPlay.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoPlay.statistics.viewCount).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoPlay.statistics.likeCount).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <VideoList videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Video;
