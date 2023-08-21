import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCard, VideoList } from "../components";

//import { fetchApiData } from "../utils/fetchApiData";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail);
  console.log(id);
  console.log(channelVideos);

  useEffect(() => {
    // fetchApiData(`channels?&part=snippet&id=${id}`).then((data) => {
    //   localStorage.setItem("saple", JSON.stringify(data.items));
    //   //setChannelDetail(data.items[0]);
    // });

    // fetchApiData(`search?&channelId=${id}&part=snippet&order=date`).then(
    //   (data) => {
    //     localStorage.setItem("origami", JSON.stringify(data.items));
    //     setChannelVideos(data.items);
    //   }
    // );

    setChannelVideos(JSON.parse(localStorage.getItem("origami")));

    const sample = JSON.parse(localStorage.getItem("saple"));

    console.log(sample);

    setChannelDetail(sample[0]);
  }, [id]);

  if (!channelDetail) return <div>Loading...</div>;

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ backgroundColor: "pink", zIndex: 10, height: "300px" }}>
          insert banner here
        </div>

        <ChannelCard channel={channelDetail} marginT="-93px" />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />

        <VideoList videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default Channel;
