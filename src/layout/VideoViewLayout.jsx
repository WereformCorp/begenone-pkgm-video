import { ScrollView, View } from "react-native";
import { VideoPlayer } from "../components/VideoPlayer";
import {
  CustomizedTitle,
  MenuChannelMeta,
  MenuInteraction,
} from "@begenone/pkgm-shared";
import { Ionicons } from "@expo/vector-icons";
import { VideoCardLayout } from "./VideoCardLayout";

export function VideoViewLayout({
  videoSource,
  CustomizedTitleText,
  MenuChannelMetaTimeAgo,
  MenuChannelMetaViews,
  MenuChannelMetaUserName,
  MenuChannelMetaSubCount,
  MenuChannelMetaChannelLogo,
  VideoCardTimeAgo,
  VideoCardViewsText,
  VideoCardTitleText,
  VideoCardUserNameText,
  VideoCardContentThumbUrl,
  VideoCardChannelLogo,
}) {
  return (
    <ScrollView>
      <View>
        <VideoPlayer videoSource={videoSource} />
      </View>
      <CustomizedTitle
        title={CustomizedTitleText}
        fontSize={22}
        fontFamily="Inter"
        textColor="white"
        style={{
          paddingTop: 18,
          paddingLeft: 22,
          paddingRight: 22,
          paddingBottom: 18,
          alignSelf: "start",
          // borderWidth: 1,
          // borderColor: "#FFF",
        }}
        textStyle={{
          lineHeight: 28,
        }}
      />

      <MenuInteraction
        likeIcon={<Ionicons name="thumbs-up-outline" size={24} color="white" />}
        dislikeIcon={
          <Ionicons name="thumbs-down-outline" size={24} color="white" />
        }
        shareIcon={
          <Ionicons name="arrow-redo-outline" size={24} color="white" />
        }
        commentIcon={
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="white"
          />
        }
        containerStyles={{
          marginLeft: 12,
        }}
      />

      <MenuChannelMeta
        calendarIcon={
          <Ionicons name="calendar-clear-outline" size={18} color="white" />
        }
        timeAgo={MenuChannelMetaTimeAgo}
        eyeIcon={<Ionicons name="eye-outline" size={18} color="white" />}
        viewsText={MenuChannelMetaViews}
        userName={MenuChannelMetaUserName}
        subscribersCount={MenuChannelMetaSubCount}
        channelLogo={MenuChannelMetaChannelLogo}
        containerStyles={{
          marginTop: 12,
        }}
      />

      <View style={{ marginTop: 24 }}>
        <VideoCardLayout
          calendarIcon={
            <Ionicons name="calendar-clear-outline" size={18} color="white" />
          }
          timeAgo={VideoCardTimeAgo}
          eyeIcon={<Ionicons name="eye-outline" size={18} color="white" />}
          viewsText={VideoCardViewsText}
          titleText={VideoCardTitleText}
          userNameText={VideoCardUserNameText}
          contentThumbUrl={VideoCardContentThumbUrl}
          channelLogo={VideoCardChannelLogo}
        />
      </View>
    </ScrollView>
  );
}
