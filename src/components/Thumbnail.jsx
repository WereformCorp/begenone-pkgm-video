import { Image, View } from "react-native";

/**
 * Thumbnail
 *
 * Lightweight thumbnail renderer for video and content previews.
 *
 * Props:
 * - thumbnailURL: string URL of the thumbnail image
 * - thumbHeight: numeric height for the thumbnail container
 *
 * Behavior:
 * - Falls back to a default image when no URL is provided
 * - Maintains a fixed 16:9 aspect ratio
 * - Intended for list cards and compact layouts
 */

export function Thumbnail({ thumbnailURL, thumbHeight }) {
  return (
    <View style={{ width: "auto" }}>
      <Image
        source={{
          uri:
            thumbnailURL ||
            "https://begenone-images.s3.us-east-1.amazonaws.com/let+Me+Love+you.jpg",
        }}
        style={{
          width: "100%",
          height: thumbHeight,
          aspectRatio: 16 / 9,
          borderRadius: 5,
        }}
      />
    </View>
  );
}
