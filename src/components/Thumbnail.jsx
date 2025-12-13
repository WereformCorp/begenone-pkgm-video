import { Image, View } from "react-native";

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
