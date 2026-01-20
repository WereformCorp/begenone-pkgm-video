import { globalStyles } from "./globalStyles";

/* Video card layout styles for feed and listings */
export const VideoCardLayoutStyles = {
  container: {
    // Video card outer container
    width: "auto",
    flexDirection: "column",
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 40,
  },

  imageWrapper: {
    // Video thumbnail wrapper
    width: "100%",
  },

  image: {
    // Video thumbnail image
    width: "100%",
    resizeMode: "contain",
    aspectRatio: 16 / 9,
    borderRadius: globalStyles.borders.borderPrimary100,
  },

  metaData: {
    // Metadata row below thumbnail
    flexDirection: "row",
    marginTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },

  userImage: {
    // Channel avatar image
    width: 40,
    height: 40,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  titleNameContainer: {
    // Video title and author container
    width: "100%",
    flexDirection: "column",
    paddingLeft: 16,
    flexShrink: 1,
  },

  titleText: {
    // Video title text
    fontSize: 22,
    paddingBottom: 12,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  userNameText: {
    // Channel name text
    color: globalStyles.colors.colorPrimary400,
    fontWeight: "bold",
  },
};
