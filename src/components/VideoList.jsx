import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const VideoList = ({ videos, from }) => {
  return (
    <Stack
      spacing={2}
      sx={{ mb: "30px", px: from === "video" && { mm: "30px", lm: "50px" } }}
    >
      {videos.map((video) => (
        <Box key={video.snippet.publishedAt}>
          {video.id.videoId && <VideoCard video={video} />}

          {video.id.channelId && <ChannelCard channel={video} marginT="0" />}
        </Box>
      ))}
    </Stack>
  );
};

export default VideoList;
