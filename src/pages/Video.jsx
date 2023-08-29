import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Container } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { fetchApiData } from "../utils/fetchApiData";
import { Loading, VideoList } from "../components";

const Video = () => {
  const [videoPlay, setVideoPlay] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchApiData(`videos?&part=snippet,statistics&id=${id}`).then((data) => {
      setVideoPlay(data.items[0]);
    });

    //const sasma = JSON.parse(localStorage.getItem("videoPlays"));

    //setVideoPlay(sasma[0]);
  }, [id]);

  useEffect(() => {
    if (videoPlay) {
      fetchApiData(`search?&part=snippet&q=${videoPlay.snippet.title}`).then(
        (data) => {
          setVideos(data.items.slice(1));
        }
      );

      // setVideos(JSON.parse(localStorage.getItem("videosss")));
    }
  }, [id, videoPlay]);

  // console.log(videoPlay);
  // console.log(videos);

  if (!videoPlay) return <Loading />;

  return (
    <Container disableGutters sx={{ px: "10px" }}>
      <Box
        sx={{
          backgroundColor: "primary.video",
          mx: "-10px",
          mb: { sm: "10px", mm: "30px" },
        }}
      >
        <Box sx={{ height: "52vw" }}>
          <Box
            sx={{
              backgroundColor: "primary.video",
              width: "100%",
              position: "fixed",
              top: "55px",
              left: 0,
            }}
          >
            <Box sx={{ position: "relative", pt: "56.25%" }}>
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${id}`}
                width="100%"
                height="100%"
                controls
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: "15px" }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="17px"
            color="primary.main"
            sx={{ mb: "5px" }}
          >
            {videoPlay.snippet.title}
          </Typography>
          <Link to={`/channel/${videoPlay.snippet.channelId}`}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "primary.videoChannel",
                display: "flex",
                alignItems: "center ",
              }}
            >
              {videoPlay.snippet.channelTitle}
              <CheckCircle
                sx={{ width: "17px", height: "17px", ml: "4px", color: "gray" }}
              />
            </Typography>
          </Link>

          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="body2" color="gray">
              {parseInt(videoPlay.statistics.viewCount).toLocaleString()} views
            </Typography>
            <Typography variant="body2" color="gray">
              {parseInt(videoPlay.statistics.likeCount).toLocaleString()} likes
            </Typography>
          </Stack>
        </Box>
      </Box>

      <VideoList videos={videos} from="video" direction="column" />
    </Container>
  );
};

export default Video;
