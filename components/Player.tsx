import React from "react";
import { useAsset, Player } from "@livepeer/react";

interface PlayerProps {
  id: any;
}

const VideoPlayer: React.FC<PlayerProps> = ({ id }) => {
  console.log(id);

  return (
    <Player
      title="Waterfalls"
      src={"ipfs://" + id}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      controls={{
        autohide: 3000,
      }}
    />
  );
};

export default VideoPlayer;
