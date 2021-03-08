import { mergeStyleSets } from "@fluentui/react";

const ProfileStyles = mergeStyleSets({
  header: {
    padding: 15,
  },
  headerImage: {},
  headerDetails: {},
  body: {
    padding: 15,
  },
});

const ProfileTokens = {
  header: {
    maxSize: 300,
    childrenGap: 15,
  },

  sectionStack: {
    childrenGap: 30,
  },
  detailsStack: {
    childrenGap: 5,
  },
  cardFooterStack: {
    childrenGap: 16,
  },
};

export default ProfileStyles;

export { ProfileTokens };
