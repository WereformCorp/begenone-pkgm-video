import { View, Text } from "react-native";
import { SampleButton } from "@begenone/pkgm-shared";

export const VideoTestScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Video Test Screen</Text>
      <SampleButton
        title="Press From Shared!"
        onPress={() => alert("Works!")}
      />
    </View>
  );
};
