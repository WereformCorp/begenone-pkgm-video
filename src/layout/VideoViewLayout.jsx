import { ScrollView, Text, View } from "react-native";
// import { VideoPlayer } from "../components/VideoPlayer";
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
  CustomizedTitleText,
  CustomizedTitleDescription,
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

  initialLiked,
  initialDisliked,
  likesCount = 0,
  dislikesCount = 0,
  onLike,
  onDislike,
  onShare,
  onComment,
  onRepost,
  navigateToChannel,
  channelId,

  commentSheetVisible,
  onCloseCommentSheet,
  comments = [],
  commentsLoading = false,
  onSubmitComment,
  renderCommentItem,
}) {
  // FIX: Flatten the logic. We expect 'suggestedVideos' to be an array of objects.
  // If your API returns { data: { videos: [...] } }, adjust accordingly.
  // Based on your code, it looked like it was just an array inside data.
  const videoList = Array.isArray(suggestedVideos?.videos)
    ? suggestedVideos.videos
    : [];

  return (
    <ScrollView style={{ position: "relative", marginBottom: 96 }}>
      <CustomizedTitle
        title={CustomizedTitleText}
        description={CustomizedTitleDescription}
        fontSize={20}
        fontFamily="Inter"
        textColor="white"
        style={{
          paddingTop: 18,
          paddingLeft: 22,
          paddingRight: 22,
          paddingBottom: 12,
          alignSelf: "stretch",
        }}
        textStyle={{
          lineHeight: 26,
        }}
      />

      <MenuInteraction
        pressed={() => {}}
        canDelete={canDelete}
        onDelete={onDelete}
        containerStyles={{
          marginLeft: 12,
        }}
        initialLiked={initialLiked}
        initialDisliked={initialDisliked}
        likesCount={likesCount}
        dislikesCount={dislikesCount}
        onLike={onLike}
        onDislike={onDislike}
        onShare={onShare}
        onComment={onComment}
        onRepost={onRepost}
        commentSheetVisible={commentSheetVisible}
        onCloseCommentSheet={onCloseCommentSheet}
        comments={comments}
        commentsLoading={commentsLoading}
        onSubmitComment={onSubmitComment}
        renderCommentItem={renderCommentItem}
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
        onChannelPress={navigateToChannel && channelId ? () => navigateToChannel(channelId) : undefined}
        containerStyles={{
          marginTop: 12,
        }}
      />

      {videoList.length > 0 ? (
        videoList.map(video => (
          <VideoCardLayout
            key={video._id}
            onPress={() => navigateToVideo(video._id)}
            titleText={video.title}
            contentThumbUrl={
              CLOUDFRONTURL ? `${CLOUDFRONTURL}/${video.thumbnail}` : null
            }
            userNameText={video.channel?.name || "Unknown"}
            timeAgo={video.videoTimeAgo}
            viewsText={String(video.views || 0)}
          />
        ))
      ) : (
        <Text style={{ color: "#999", marginTop: 24, textAlign: "center" }}>
          No suggested videos yet
        </Text>
      )}
    </ScrollView>
  );
}
