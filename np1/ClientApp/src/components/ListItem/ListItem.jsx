import { Separator, Stack, Text } from "@fluentui/react";
import React from "react";
import { ListItemTokens } from "./styles/ListItem.Styles";

const ListItem = (props) => {
  return (
    <Stack tokens={ListItemTokens.listItemStack}>
      <Text variant="large">{props.text}</Text>
      <Text>{props.secondaryText}</Text>
      <Separator />
    </Stack>
  );
};

export default ListItem;
