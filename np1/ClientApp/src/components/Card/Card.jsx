import React from "react";
import {
  Persona,
  Text,
  Image,
  Stack,
  PersonaSize,
  IconButton,
} from "@fluentui/react";
import CardStyles, { CardTokens } from "./styles/Card.Styles";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Stack className={CardStyles.maxWidth} tokens={CardTokens.cardStak}>
      <Link to={`/user-profile/${props.data.userid}`}>
        <Persona
          text={props.data.fullName}
          secondaryText="Feb 2, 2019"
          size={PersonaSize.size24}
          imageUrl="https://placehold.it/24X24"
        />
      </Link>
      <Stack.Item>
        <Image src="https://placehold.it/286x144" width="100%" />
      </Stack.Item>
      <Text className={CardStyles.siteText}>{props.data.title}</Text>
      <Text className={CardStyles.descriptionText}>{props.data.comment}</Text>
      <Text className={CardStyles.helpfulText}>
        Is this recommendation helpful?
      </Text>

      <Stack.Item>
        <Stack
          horizontal
          tokens={CardTokens.cardFooterStack}
          padding="12px 0 0"
          styles={{ root: { borderTop: "1px solid #F3F2F1" } }}
        >
          <IconButton
            iconProps={{ iconName: "RedEye" }}
            className={CardStyles.icon}
          />
          <IconButton
            iconProps={{ iconName: "SingleBookmark" }}
            className={CardStyles.icon}
          />
          <Stack.Item grow={1}>
            <span />
          </Stack.Item>

          <IconButton
            iconProps={{ iconName: "MoreVertical" }}
            className={CardStyles.icon}
          />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Card;
