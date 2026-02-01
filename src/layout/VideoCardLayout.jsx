import { Image, Text, TouchableOpacity, View } from "react-native";
import { VideoCardLayoutStyles } from "../styles/VideoCardLayoutStyles";
import { DateViews } from "@wereform/pkgm-shared";

/**
 * VideoCardHorizontalLayout
 *
 * Compact horizontal video card used in lists or history views.
 * Displays thumbnail, title, and basic metadata (date + views).
 *
 * Props:
 * - eyeIcon: ReactNode for views icon
 * - timeAgo: string representing publish time
 * - viewsText: string/number of views
 * - titleText: video title
 * - contentThumbUrl: thumbnail image URL
 * - navigateToVideo: navigation handler on press
 *
 * Notes:
 * - Entire card is pressable
 * - Uses shared UI components for consistency
 */

export const VideoCardLayout = ({
  timeAgo,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
  containerStyles,
  dateViewsContainerStyle,
  userImageStyles,
  titleNameContainerStyles,
  userNameTextStyles,
  titleTextStyles,
  thumbnailImageStyles,
  customMetaDataStyles,
  navigateToVideo,
}) => {
  console.log("Checking for Conent Thumbnail URL: ", contentThumbUrl);
  return (
    <View
      style={[VideoCardLayoutStyles.container, containerStyles]}
      onPress={navigateToVideo}
    >
      <View style={VideoCardLayoutStyles.imageWrapper}>
        <Image
          source={{
            uri:
              contentThumbUrl ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/let+Me+Love+you.jpg",
          }}
          style={[VideoCardLayoutStyles.image, thumbnailImageStyles]}
        />
      </View>

      <DateViews
        timeAgo={timeAgo}
        viewsText={viewsText}
        containerStyles={dateViewsContainerStyle}
      />

      <View style={[VideoCardLayoutStyles.metaData, customMetaDataStyles]}>
        <Image
          source={{
            uri:
              channelLogo ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
          }}
          style={[VideoCardLayoutStyles.userImage, userImageStyles]}
        />
        <View
          style={[
            VideoCardLayoutStyles.titleNameContainer,
            titleNameContainerStyles,
          ]}
        >
          <Text
            style={[VideoCardLayoutStyles.titleText, titleTextStyles]}
            numberOfLines={2}
          >
            {titleText ||
              "This is a Default Title Text in case of nothing being passed in."}
          </Text>
          <Text
            style={[VideoCardLayoutStyles.userNameText, userNameTextStyles]}
          >
            {userNameText || "Default Username"}
          </Text>
        </View>
      </View>
    </View>
  );
};
