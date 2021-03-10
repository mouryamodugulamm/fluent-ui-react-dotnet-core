import { mergeStyleSets } from "@fluentui/react";

const NewJobPostStyles = mergeStyleSets({
  header: {
    marginTop: 15,
  },
  footer: {
    marginBottom: 15,
  },
  intrests: {
    maxWidth: 300,
  },

  callout: {
    padding: 15,
  },
});

const NewJobPostTokens = {
  horizontalChildren: {
    childrenGap: 15,
  },

  verticalChildren: {
    childrenGap: 15,
  },
};

export default NewJobPostStyles;

export { NewJobPostTokens };
