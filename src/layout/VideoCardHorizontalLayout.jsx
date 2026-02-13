import { Animated, Image, Pressable, Text, View } from "react-native";
import { memo, useCallback, useRef } from "react";
import { VideoCardHorizontalLayoutStyles as S } from "../styles/VideoCardHorizontalLayoutStyles";

const PRESS_SCALE = 0.98;

const DEFAULT_THUMB =
  "https://begenone-images.s3.us-east-1.amazonaws.com/let+Me+Love+you.jpg";

function VideoCardHorizontalLayoutComponent({
  titleText,
  contentThumbUrl,
  timeAgo,
  viewsText,
  onPress,
  navigateToVideo,
  containerStyles,
  titleTextStyles,
  thumbnailImageStyles,
  metaStyles,
  userNameText: _userNameText,
  channelLogo: _channelLogo,
}) {
  const handlePress = onPress ?? navigateToVideo;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: PRESS_SCALE,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.92,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, opacityAnim]);

  const handlePressOut = useCallback(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, opacityAnim]);

  const views = viewsText != null ? String(viewsText) : null;
  const metaParts = views ? [`${views} views`] : [];
  if (timeAgo) metaParts.push(timeAgo);
  const metaText = metaParts.join(" • ") || "—";

  const cardContent = (
    <Animated.View
      style={[
        S.row,
        {
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <View style={S.thumbnailWrapper}>
        <Image
          source={{ uri: contentThumbUrl || DEFAULT_THUMB }}
          style={[S.thumbnail, thumbnailImageStyles]}
        />
      </View>

      <View style={S.container}>
        <View style={S.content}>
          <Text style={[S.title, titleTextStyles]} numberOfLines={1}>
            {titleText || "Untitled"}
          </Text>
          <Text style={[S.meta, metaStyles]} numberOfLines={1}>
            {metaText}
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

export const VideoCardHorizontalLayout = memo(
  VideoCardHorizontalLayoutComponent,
);
