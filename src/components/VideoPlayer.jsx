import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { View, useWindowDimensions } from "react-native";
import { VideoPlayerStyles } from "../styles/VideoPlayerStyles";

// const videoSource =
//   "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function VideoPlayer({ videoSource }) {
  const { width } = useWindowDimensions(); // Dynamically get device width
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View style={VideoPlayerStyles.contentContainer}>
      <VideoView
        style={[VideoPlayerStyles.video, { width, height: width * (9 / 16) }]} // 16:9 ratio
        player={player}
        // allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}
