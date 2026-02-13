import { StyleSheet } from "react-native";

/* Align with MenuChannelMeta – dark orange + white, layered elegance */
export const COLORS = {
  bgBase: "#0E0E0E",
  bgRaised: "#171413",
  bgElevated: "#2A2420",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.6)",
  accent: "#ff5e00",
  avatarRing: "rgba(255,255,255,0.12)",
};

export const VideoCardLayoutStyles = StyleSheet.create({
  pressable: {
    marginHorizontal: 12,
    marginVertical: 8,
  },

  container: {
    flexDirection: "column",
    backgroundColor: COLORS.bgRaised,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },

  thumbnailWrapper: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.bgElevated,
  },

  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  cardContent: {
    padding: 16,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  metaIcon: {
    marginRight: 6,
  },

  metaIconSpaced: {
    marginRight: 6,
    marginLeft: 16,
  },

  metaText: {
    color: COLORS.textMuted,
    fontSize: 13,
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 12,
  },

  channelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 2,
    backgroundColor: COLORS.avatarRing,
    marginRight: 12,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
  },

  channelName: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },
});
