import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { View, useWindowDimensions } from "react-native";
import { VideoPlayerStyles } from "../styles/VideoPlayerStyles";
import { useCallback, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";

export function VideoPlayer({ videoSource }) {
  const { width } = useWindowDimensions(); // Dynamically get device width

  const player = useVideoPlayer(videoSource, playerInstance => {
    playerInstance.loop = false;
    playerInstance.play(); // Auto-play on mount
  });

  useFocusEffect(
    useCallback(() => {
      // 1. ON FOCUS: Resume playback if valid
      if (player && !player.playing) {
        player.play();
      }

      // 2. ON BLUR (Navigating away) OR UNMOUNT
      return () => {
        if (player) {
          try {
            player.pause();
          } catch (error) {
            // 🚨 CRITICAL FIX 🚨
            // If the error is "Call to function 'VideoPlayer.pause' has been rejected",
            // it means the native player is already dead.
            // This is GOOD (it means audio is already stopped). We swallow this specific error.
            const msg = error instanceof Error ? error.message : String(error);
            if (
              !msg.includes("released") &&
              !msg.includes("Call to function")
            ) {
              console.error("Real video error:", error);
            }
          }
        }
      };
    }, [player]), // Vital: Re-run this effect if the player instance changes
  );

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
