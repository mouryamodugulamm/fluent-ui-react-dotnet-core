import { DefaultEffects, FontWeights, mergeStyleSets } from "@fluentui/react";

const ListItemStyles = mergeStyleSets({
  listItem: { paddingTop: 15 },
  text: {},
  secondaryText: {},
});

const ListItemTokens = {
  listItemStack: {
    childrenGap: 15,
  },
  sectionStack: {
    childrenGap: 30,
  },
  footerStack: {
    childrenGap: 16,
  },
};

export default ListItemStyles;

export { ListItemTokens };
