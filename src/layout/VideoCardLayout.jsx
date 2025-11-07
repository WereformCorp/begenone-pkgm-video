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
}) => {
  return (
    <View style={VideoCardLayoutStyles.container}>
      <View style={VideoCardLayoutStyles.imageWrapper}>
        <Image
          source={{
            uri: { contentThumbUrl },
          }}
          style={VideoCardLayoutStyles.image}
        />
      </View>
      <View style={VideoCardLayoutStyles.dateViewsContainer}>
        <View style={VideoCardLayoutStyles.dateContainer}>
          <View style={VideoCardLayoutStyles.dateIcon}>{calendarIcon}</View>
          <Text style={VideoCardLayoutStyles.dateText}>{timeAgo}</Text>
        </View>
        <View style={VideoCardLayoutStyles.viewsContainer}>
          <View style={VideoCardLayoutStyles.eyeIcon}>{eyeIcon}</View>
          <Text style={VideoCardLayoutStyles.viewsText}>{viewsText}</Text>
        </View>
      </View>
      <View style={VideoCardLayoutStyles.metaData}>
        <Image
          source={{
            uri: "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
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
            {titleText}
          </Text>
          <Text style={VideoCardLayoutStyles.userNameText}>{userNameText}</Text>
        </View>
      </View>
    </View>
  );
};
