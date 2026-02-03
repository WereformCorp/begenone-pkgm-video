// import { useEvent } from "expo";
// import { useVideoPlayer, VideoView } from "expo-video";
// import { Text, View, useWindowDimensions } from "react-native";
// import { VideoPlayerStyles } from "../styles/VideoPlayerStyles";
// import { useCallback, useEffect, useRef } from "react";
// import { useIsFocused, useFocusEffect } from "@react-navigation/native";

// /**
//  * VideoPlayer
//  *
//  * Mobile-optimized video playback component using expo-video.
//  *
//  * Props:
//  * - videoSource: video URI or source object compatible with useVideoPlayer
//  *
//  * Behavior:
//  * - Auto-plays and loops video on mount
//  * - Resumes playback when screen gains focus
//  * - Pauses playback when screen loses focus
//  * - Maintains responsive 16:9 aspect ratio based on device width
//  *
//  * Notes:
//  * - Player instance is stored via ref for lifecycle control
//  * - Picture-in-picture is enabled
//  * - Designed for full video view screens
//  */

// export function VideoPlayer({ videoSource }) {
//   console.log("Video Source in Video Player Component: ", videoSource);

//   const { width } = useWindowDimensions();

//   console.log(`Width of the window:`, width);

//   const isFocused = useIsFocused();
//   console.log(`IsFOCUSED FROM VIDEO PLAYER:`, isFocused);

//   const playerRef = useRef(null);

//   // SAFETY: If source is invalid, don't crash native hook
//   const safeSource =
//     typeof videoSource === "string" && videoSource.startsWith("http")
//       ? videoSource
//       : null;

//   console.log("Safe Source in Video Player Component: ", safeSource);

//   const player = useVideoPlayer(safeSource, p => {
//     p.loop = true;
//     p.play();
//     playerRef.current = p; // store instance
//   });

//   console.log("Player Instance in Video Player Component: ", player);

//   useEffect(() => {
//     if (!player) return;
//     if (isFocused) player.play();
//     else player.pause();
//   }, [isFocused, player]);

//   // SAFETY: Return empty view if no player (prevents native crash)
//   if (!safeSource || !player) {
//     return (
//       <View
//         style={[
//           VideoPlayerStyles.contentContainer,
//           { width, height: width * (9 / 16), backgroundColor: "#000" },
//         ]}
//       >
//         <Text style={{ color: "white", textAlign: "center", marginTop: 20 }}>
//           Loading Video...
//         </Text>
//       </View>
//     );
//   }

//   useEvent(player, "playingChange");

//   return (
//     <View style={VideoPlayerStyles.contentContainer}>
//       <VideoView
//         style={[VideoPlayerStyles.video, { width, height: width * (9 / 16) }]} // 16:9 ratio
//         player={player}
//         // allowsFullscreen
//         allowsPictureInPicture
//       />
//     </View>
//   );
// }

import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { View, useWindowDimensions } from "react-native";
import { VideoPlayerStyles } from "../styles/VideoPlayerStyles";
import { useCallback, useEffect, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";

export function VideoPlayer({ videoSource }) {
  const { width } = useWindowDimensions(); // Dynamically get device width

  const playerRef = useRef(null);

  // const player = useVideoPlayer(videoSource, p => {
  //   p.loop = true;
  //   p.play();
  //   playerRef.current = p; // store instance
  // });

  // useFocusEffect(
  //   useCallback(() => {
  //     if (playerRef.current) {
  //       console.log("Player Ref Current 0: ", playerRef.current);

  //       playerRef.current.play();
  //     } else
  //       return () => {
  //         if (playerRef.current) {
  //           console.log("Player Ref Current 1: ", playerRef.current);
  //           playerRef.current.pause();
  //           // Optional: fully unload the video
  //           // playerRef.current.unloadAsync?.();
  //         }
  //       };
  //   }, []),
  // );

  // 1) Stop/resume when screen focus changes
  // useFocusEffect(
  //   useCallback(() => {
  //     // on focus
  //     try {
  //       player?.play();
  //     } catch (e) {
  //       console.log("Error playing video on focus:", e);
  //     }

  //     // on blur/unfocus ALWAYS run
  //     return () => {
  //       try {
  //         player?.pause();
  //         player?.release(); // <-- THIS prevents “audio continues” AND prevents “next video won’t play”
  //       } catch (e) {
  //         console.log("Error playing video on focus 2:", e);
  //       }
  //     };
  //   }, [player]),
  // );

  // useEffect(() => {
  //   return () => {
  //     try {
  //       player?.pause();
  //     } catch (e) {
  //       console.log("Error playing video on focus 3:", e);
  //     }

  //     try {
  //       player?.release(); // <-- THIS prevents “audio continues” AND prevents “next video won’t play”
  //     } catch (e) {
  //       console.log("Error playing video on focus 4:", e);
  //     }
  //   };
  // }, [player]);

  // Inside your component
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

  // useEvent(player, "playingChange");

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
