import { DefaultEffects, FontWeights, mergeStyleSets } from "@fluentui/react";

const CardStyles = mergeStyleSets({
  maxWidth: {
    maxWidth: 300,
    padding: 15,
    marginBottom: 15,
    boxShadow: DefaultEffects.elevation4,
  },
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

const CardTokens = {
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

export default CardStyles;

export { CardTokens };
