import {
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";

const VideoList = ({ videos }) => {
  console.log(videos[0]);
  console.log(videos[1]);

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && (
            <Card
              sx={{
                width: { md: "320px", xs: "100%" },
                boxShadow: "none",
                borderRadius: 0,
              }}
            >
              <Link
                to={
                  video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl
                }
              >
                <CardMedia
                  image={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  sx={{ width: 358, height: 180 }}
                />
              </Link>

              <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
                <Link
                  to={
                    video.id.videoId
                      ? `/video/${video.id.videoId}`
                      : demoVideoUrl
                  }
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="#FFF"
                  >
                    {video.snippet.title.slice(0, 50) ||
                      demoVideoTitle.slice(0, 50)}
                  </Typography>
                </Link>

                <Link
                  to={
                    video.snippet.channelId
                      ? `/channel/${video.snippet.channelId}`
                      : demoChannelUrl
                  }
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="gray"
                  >
                    {video.snippet.channelTitle || demoChannelTitle}
                    <CheckCircle
                      sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          )}

          {video.id.channelId && (
            <Box
              sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "326px",
                width: { md: "320px", xs: "356px" },
                margin: "auto",
              }}
            >
              <Link to={`/channel/${video.id.channelId}`}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <CardMedia
                    image={
                      video.snippet.thumbnails.high.url || demoProfilePicture
                    }
                    alt={video.snippet.title}
                    sx={{
                      borderRadius: "50%",
                      height: "180px",
                      width: "180px",
                      mb: 2,
                      border: "1px solid #e3e3e3",
                    }}
                  />

                  <Typography variant="h6">
                    {video.snippet.title}
                    <CheckCircle
                      sx={{ fontSize: 14, color: "gray", ml: "5px" }}
                    />
                  </Typography>

                  {video.statistics?.subscriberCount && (
                    <Typography>
                      {parseInt(
                        video.statistics?.subscriberCount
                      ).toLocaleString()}{" "}
                      Subscribers
                    </Typography>
                  )}
                </CardContent>
              </Link>
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default VideoList;
