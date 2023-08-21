import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel, marginT }) => {
  return (
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
        marginTop: marginT,
      }}
    >
      <Link to={`/channel/${channel.id.channelId}`}>
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
            image={channel.snippet.thumbnails.high.url || demoProfilePicture}
            alt={channel.snippet.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">
            {channel.snippet.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>

          {channel.statistics?.subscriberCount && (
            <Typography>
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
