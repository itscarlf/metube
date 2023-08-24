import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const VideoList = ({ videos }) => {
  return (
    <Stack spacing={2} sx={{ mb: "30px" }}>
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
