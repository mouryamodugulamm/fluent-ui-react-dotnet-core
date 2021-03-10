import React from "react";
import { Separator, Stack, Text } from "@fluentui/react";

const ListItem = (props) => {
  return (
    <Stack>
      <Text variant="large">{props.text}</Text>
      <Text>{props.secondaryText}</Text>
      <Separator />
    </Stack>
  );
};

export default ListItem;
