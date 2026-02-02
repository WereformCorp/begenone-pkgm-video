import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { View, useWindowDimensions } from "react-native";
import { VideoPlayerStyles } from "../styles/VideoPlayerStyles";
import { useCallback, useEffect, useRef } from "react";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

/**
 * VideoPlayer
 *
 * Mobile-optimized video playback component using expo-video.
 *
 * Props:
 * - videoSource: video URI or source object compatible with useVideoPlayer
 *
 * Behavior:
 * - Auto-plays and loops video on mount
 * - Resumes playback when screen gains focus
 * - Pauses playback when screen loses focus
 * - Maintains responsive 16:9 aspect ratio based on device width
 *
 * Notes:
 * - Player instance is stored via ref for lifecycle control
 * - Picture-in-picture is enabled
 * - Designed for full video view screens
 */

export function VideoPlayer({ videoSource }) {
  if (!videoSource || typeof videoSource !== "string") {
    return null;
  }

  const { width } = useWindowDimensions(); // Dynamically get device width
  const isFocused = useIsFocused();

  const playerRef = useRef(null);

  const player = useVideoPlayer(videoSource, p => {
    p.loop = true;
    p.play();
    playerRef.current = p; // store instance
  });

  useEffect(() => {
    if (!player) return;

    if (isFocused) player.play();
    else player.pause();
  }, [isFocused, player]);

  useEvent(player, "playingChange");

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
