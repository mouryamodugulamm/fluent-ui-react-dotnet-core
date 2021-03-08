import { FontWeights, mergeStyleSets } from "office-ui-fabric-react";

const SearchPostsStyles = mergeStyleSets({
  searchBox: { maxWidth: 300, padding: 15, marginBottom: 15 },
  detailList: { maxWidth: 900, padding: 15, marginBottom: 15 },

  siteText: {
    color: "#025F52",
    fontSize: 12,
    fontWeight: FontWeights.semibold,
  },
  descriptionText: {
    color: "#333333",
    fontSize: 14,
    fontWeight: FontWeights.regular,
  },
  helpfulText: {
    color: "#333333",
    fontSize: 12,
    fontWeight: FontWeights.regular,
  },
  icon: {
    color: "#0078D4",
    fontSize: 16,
    fontWeight: FontWeights.regular,
  },
});

const SearchPostsTokens = {
  cardStak: {
    childrenGap: 15,
  },

  sectionStack: {
    childrenGap: 30,
  },
  cardFooterStack: {
    childrenGap: 16,
  },
};

export default SearchPostsStyles;

export { SearchPostsTokens };
