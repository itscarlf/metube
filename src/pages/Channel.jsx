import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { ChannelCard, VideoList } from "../components";

//import { fetchApiData } from "../utils/fetchApiData";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail);
  // console.log(id);
  // console.log(channelVideos);

  useEffect(() => {
    // fetchApiData(`channels?&part=snippet&id=${id}`).then((data) =>
    //   setChannelDetail(data.items[0])
    // );

    // fetchApiData(`search?&channelId=${id}&part=snippet&order=date`).then(
    //   (data) => setChannelVideos(data.items)
    // );

    setChannelVideos(JSON.parse(localStorage.getItem("origami")));

    const sample = JSON.parse(localStorage.getItem("saple"));

    console.log(sample);

    setChannelDetail(sample[0]);
  }, [id]);

  if (!channelDetail) return <div>Loading...</div>;

  return (
    <Container disableGutters sx={{ px: "10px" }}>
      <Box
        sx={{
          backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "gray",
          height: "200px",
        }}
      />

      <ChannelCard channel={channelDetail} marginT="-90px" />

      <VideoList videos={channelVideos} />
    </Container>
  );
};

export default Channel;
