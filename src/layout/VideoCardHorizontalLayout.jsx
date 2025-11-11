import { Text, View } from "react-native";
import { Thumbnail } from "../components/Thumbnail";
import { CustomizedTitle, DateViews } from "@begenone/pkgm-shared";

export function VideoCardHorizontalLayout({
  eyeIcon,
  timeAgo,
  viewsText,
  titleText,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 8,
      }}
    >
      <Thumbnail thumbHeight={90} />
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
    </View>
  );
}
