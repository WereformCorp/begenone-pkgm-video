import { globalStyles } from "./globalStyles";

export const VideoCardLayoutStyles = {
  container: {
    width: "auto",
    flexDirection: "column",
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 40,
  },
  imageWrapper: {
    width: "100%",
  },

  image: {
    width: "100%",
    resizeMode: "contain",
    aspectRatio: 16 / 9,
    borderRadius: globalStyles.borders.borderPrimary100,
  },

  metaData: {
    flexDirection: "row",
    marginTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  titleNameContainer: {
    width: "100%",
    flexDirection: "column",
    paddingLeft: 16,
    flexShrink: 1,
  },

  titleText: {
    fontSize: 22,
    paddingBottom: 12,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  userNameText: {
    color: globalStyles.colors.colorPrimary400,
    fontWeight: "bold",
  },
};
