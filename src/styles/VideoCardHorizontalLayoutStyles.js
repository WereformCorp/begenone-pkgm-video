import { StyleSheet } from "react-native";
import { COLORS } from "./VideoCardLayoutStyles";

export const VideoCardHorizontalLayoutStyles = StyleSheet.create({
  pressable: {
    marginVertical: 8,
  },

  row: {
    flexDirection: "row",
  },

  thumbnailWrapper: {
    width: "38%",
    aspectRatio: 16 / 9,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    backgroundColor: COLORS.bgElevated,
  },

  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.bgRaised,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "rgba(255,255,255,0.04)",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    justifyContent: "center",
    minWidth: 0,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: 4,
  },

  meta: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
});
