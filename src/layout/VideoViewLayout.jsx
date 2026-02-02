import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { VideoPlayer } from "../components/VideoPlayer";
import {
  CustomizedTitle,
  MenuChannelMeta,
  MenuInteraction,
} from "@wereform/pkgm-shared";
import { Ionicons } from "@expo/vector-icons";
import { VideoCardLayout } from "./VideoCardLayout";

/**
 * VideoViewLayout
 *
 * Full video viewing screen layout.
 * Renders video player, title, interactions, channel metadata,
 * and a list of suggested videos.
 *
 * Props:
 * - videoSource: video stream/source
 * - CustomizedTitleText: main video title
 * - MenuChannelMetaTimeAgo: publish time
 * - MenuChannelMetaViews: view count
 * - MenuChannelMetaUserName: channel name
 * - MenuChannelMetaSubCount: subscriber count
 * - MenuChannelMetaChannelLogo: channel avatar
 * - suggestedVideos: array of related video objects
 *
 * Notes:
 * - Suggested videos are rendered using VideoCardLayout
 * - Layout is scrollable and mobile-optimized
 * - Interaction icons are visual; behavior is wired elsewhere
 */

export function VideoViewLayout({
  videoSource,
  CustomizedTitleText,
  MenuChannelMetaTimeAgo,
  MenuChannelMetaViews,
  MenuChannelMetaUserName,
  MenuChannelMetaSubCount,
  MenuChannelMetaChannelLogo,
  suggestedVideos,
  CLOUDFRONTURL,

  canDelete,
  onDelete,

  navigateToVideo,
}) {
  return (
    <ScrollView style={{ position: "relative" }}>
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
        }}
        textStyle={{
          lineHeight: 28,
        }}
      />

      <MenuInteraction
        // likeIcon={<Ionicons name="thumbs-up-outline" size={24} color="white" />}
        // dislikeIcon={
        //   <Ionicons name="thumbs-down-outline" size={24} color="white" />
        // }
        // shareIcon={
        //   <Ionicons name="arrow-redo-outline" size={24} color="white" />
        // }
        // commentIcon={
        //   <Ionicons
        //     name="chatbubble-ellipses-outline"
        //     size={24}
        //     color="white"
        //   />
        // }

        pressed={() => {}}
        canDelete={canDelete}
        onDelete={onDelete}
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

      {Array.isArray(suggestedVideos?.[0]?.videos) ? (
        suggestedVideos[0].videos.map(video => (
          <TouchableOpacity
            key={video._id}
            onPress={() => navigateToVideo(video._id)}
            style={{ marginTop: 24 }}
          >
            <VideoCardLayout
              key={video._id}
              titleText={video.title}
              contentThumbUrl={`${CLOUDFRONTURL}/${video.thumbnail}`}
              userNameText={video.channel?.name || "Unknown"}
              channelLogo={video.channelLogo}
              timeAgo={video.videoTimeAgo}
              viewsText={String(video.views)}
              calendarIcon={
                <Ionicons
                  name="calendar-clear-outline"
                  size={18}
                  color="white"
                />
              }
              eyeIcon={<Ionicons name="eye-outline" size={18} color="white" />}
            />
          </TouchableOpacity>
        ))
      ) : (
        <Text style={{ color: "#999", marginTop: 24 }}>
          No suggested videos yet
        </Text>
      )}
    </ScrollView>
  );
}
