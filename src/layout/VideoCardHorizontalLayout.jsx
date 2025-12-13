import { Text, TouchableOpacity, View } from "react-native";
import { Thumbnail } from "../components/Thumbnail";
import { CustomizedTitle, DateViews } from "@wereform/pkgm-shared";

export function VideoCardHorizontalLayout({
  eyeIcon,
  timeAgo,
  viewsText,
  titleText,
  contentThumbUrl,
  navigateToVideo,
}) {
  return (
    <TouchableOpacity
      onPress={navigateToVideo}
      style={{
        flexDirection: "row",
        padding: 8,
      }}
    >
      <Thumbnail thumbHeight={90} thumbnailURL={contentThumbUrl} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <CustomizedTitle
          title={titleText || "This is a dummy text title for the video"}
          fontSize={18}
          textColor="white"
          style={{ width: "100%" }}
        />

        <DateViews
          eyeIcon={eyeIcon}
          timeAgo={timeAgo}
          viewsText={viewsText}
          containerStyles={{
            flexDirection: "column",
            justifyContent: "start",
            height: 40,
          }}
          dateContainerStyles={{
            paddingBottom: 4,
          }}
          dateTextStyles={{
            fontSize: 12,
          }}
          viewsTextStyles={{
            fontSize: 12,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
