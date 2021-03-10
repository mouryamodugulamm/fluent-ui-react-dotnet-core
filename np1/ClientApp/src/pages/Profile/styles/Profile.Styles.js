import { mergeStyleSets } from "@fluentui/react";

const ProfileStyles = mergeStyleSets({
  header: {
    marginTop: 15,
  },
  footer: {
    marginBottom: 15,
  },
  intrests: {
    maxWidth: 300,
  },
});

const ProfileTokens = {
  horizontalChildren: {
    childrenGap: 15,
  },

  verticalChildren: {
    childrenGap: 30,
  },
};

export default ProfileStyles;

export { ProfileTokens };
