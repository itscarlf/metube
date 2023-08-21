import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const VideoList = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}

          {video.id.channelId && <ChannelCard channel={video} marginT="0" />}
        </Box>
      ))}
    </Stack>
  );
};

export default VideoList;
