import { Image } from "react-native";

export function Thumbnail({ thumbnailURL }) {
  return (
    <View style={{ width: "auto" }}>
      <Image
        source={{
          uri: thumbnailURL,
        }}
        style={{ width: "100%" }}
      />
    </View>
  );
}
