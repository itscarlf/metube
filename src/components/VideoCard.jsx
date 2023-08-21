import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video.snippet.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>

        <Link
          to={
            video.snippet.channelId
              ? `/channel/${video.snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.snippet.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
