import { Image, Text, View } from "react-native";
import { VideoCardLayoutStyles } from "../styles/VideoCardLayoutStyles";

export const VideoCardLayout = ({
  calendarIcon,
  timeAgo,
  eyeIcon,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
}) => {
  return (
    <View style={VideoCardLayoutStyles.container}>
      <View style={VideoCardLayoutStyles.imageWrapper}>
        <Image
          source={{
            uri:
              contentThumbUrl ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/let+Me+Love+you.jpg",
          }}
          style={VideoCardLayoutStyles.image}
        />
      </View>
      <View style={VideoCardLayoutStyles.dateViewsContainer}>
        <View style={VideoCardLayoutStyles.dateContainer}>
          <View style={VideoCardLayoutStyles.dateIcon}>{calendarIcon}</View>
          <Text style={VideoCardLayoutStyles.dateText}>
            {timeAgo || "14 Hours Ago"}
          </Text>
        </View>
        <View style={VideoCardLayoutStyles.viewsContainer}>
          <View style={VideoCardLayoutStyles.eyeIcon}>{eyeIcon}</View>
          <Text style={VideoCardLayoutStyles.viewsText}>
            {viewsText || "123.400"}
          </Text>
        </View>
      </View>
      <View style={VideoCardLayoutStyles.metaData}>
        <Image
          source={{
            uri:
              channelLogo ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
          }}
          style={VideoCardLayoutStyles.userImage}
        />
        <View style={VideoCardLayoutStyles.titleNameContainer}>
          <Text
            style={[
              VideoCardLayoutStyles.titleText,
              VideoCardLayoutStyles.text,
            ]}
            numberOfLines={2}
          >
            {titleText ||
              "This is a Default Title Text in case of nothing being passed in."}
          </Text>
          <Text style={VideoCardLayoutStyles.userNameText}>
            {userNameText || "Default Username"}
          </Text>
        </View>
      </View>
    </View>
  );
};
