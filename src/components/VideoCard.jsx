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
    <Card>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          sx={{ height: "165px" }}
        />
      </Link>

      <CardContent>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ color: "primary.main" }}
          >
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
          <Typography
            variant="subtitle2"
            sx={{
              color: "primary.channelName",
              display: "flex",
              alignItems: "center ",
            }}
          >
            {video.snippet.channelTitle || demoChannelTitle}

            <CheckCircle
              sx={{ width: "15px", height: "15px", ml: "4px", color: "gray" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
