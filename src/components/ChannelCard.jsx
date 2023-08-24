import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel, marginT }) => {
  console.log(channel);

  return (
    <Box>
      <Link to={`/channel/${channel.id.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: marginT,
          }}
        >
          <CardMedia
            image={channel.snippet.thumbnails.high.url || demoProfilePicture}
            alt={channel.snippet.title}
            sx={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />

          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center ",
              mt: "7px",
            }}
          >
            {channel.snippet.title}
            <CheckCircle
              sx={{ width: "17px", height: "17px", ml: "4px", color: "gray" }}
            />
          </Typography>

          {channel.statistics?.subscriberCount && (
            <Typography variant="body2" sx={{ color: "gray" }}>
              {parseInt(channel.statistics?.subscriberCount).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
