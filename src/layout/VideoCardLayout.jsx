import {
  Animated,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { memo, useCallback, useEffect, useRef } from "react";
import { VideoCardLayoutStyles as S } from "../styles/VideoCardLayoutStyles";

const PRESS_SCALE = 0.94;
const ENTRANCE_DURATION = 400;

const DEFAULT_THUMB =
  "https://begenone-images.s3.us-east-1.amazonaws.com/let+Me+Love+you.jpg";
const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

const CalendarIcon = (
  <Ionicons name="calendar-outline" size={16} color="rgba(255,255,255,0.6)" />
);
const EyeIcon = (
  <Ionicons name="eye-outline" size={16} color="rgba(255,255,255,0.6)" />
);

function VideoCardLayoutComponent({
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
  timeAgo,
  viewsText,
  onPress,
  navigateToVideo,
  containerStyles,
  titleTextStyles,
  userNameTextStyles,
  thumbnailImageStyles,
  dateViewsContainerStyle,
  userImageStyles,
  metaStyles,
}) {
  const handlePress = onPress ?? navigateToVideo;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const entranceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(entranceAnim, {
      toValue: 1,
      duration: ENTRANCE_DURATION,
      useNativeDriver: true,
    }).start();
  }, [entranceAnim]);

  const handlePressIn = useCallback(() => {
    Animated.timing(scaleAnim, {
      toValue: PRESS_SCALE,
      duration: 80,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const handlePressOut = useCallback(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 120,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const views = viewsText != null ? String(viewsText) : null;

  const cardContent = (
    <Animated.View
      style={[
        S.container,
        {
          transform: [
            { scale: scaleAnim },
            {
              translateY: entranceAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [8, 0],
              }),
            },
          ],
          opacity: entranceAnim,
        },
      ]}
    >
      <View style={S.thumbnailWrapper}>
        <Image
          source={{ uri: contentThumbUrl || DEFAULT_THUMB }}
          style={[S.thumbnail, thumbnailImageStyles]}
        />
      </View>

      <View style={S.cardContent}>
        <View style={[S.metaRow, dateViewsContainerStyle, metaStyles]}>
          <View style={S.metaIcon}>{CalendarIcon}</View>
          <Text style={S.metaText}>{timeAgo || "Recently"}</Text>
          {views != null && (
            <>
              <View style={S.metaIconSpaced}>{EyeIcon}</View>
              <Text style={S.metaText}>{views}</Text>
            </>
          )}
        </View>

        <Text
          style={[S.title, titleTextStyles]}
          numberOfLines={2}
        >
          {titleText || "Untitled"}
        </Text>

        <View style={S.channelRow}>
          <View style={[S.avatarWrapper, userImageStyles]}>
            <Image
              source={{ uri: channelLogo || DEFAULT_AVATAR }}
              style={S.avatar}
              resizeMode="cover"
            />
          </View>
          <Text
            style={[S.channelName, userNameTextStyles]}
            numberOfLines={1}
          >
            {userNameText || "Unknown"}
          </Text>
        </View>
      </View>
    </Animated.View>
  );

  return handlePress ? (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[S.pressable, containerStyles]}
    >
      {cardContent}
    </Pressable>
  ) : (
    <View style={[S.pressable, containerStyles]} pointerEvents="box-none">
      {cardContent}
    </View>
  );
}

export const VideoCardLayout = memo(VideoCardLayoutComponent);
