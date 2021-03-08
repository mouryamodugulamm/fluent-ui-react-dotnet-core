import React from "react";
import { Stack, Text } from "@fluentui/react";
import ListItem from "../../components/ListItem";

const Personal = () => {
  return (
    <Stack>
      <ListItem text="Education" secondaryText="B.Tech at KL University" />
      <ListItem text="Location" secondaryText="Guntur Dist , Narasarao pet" />
      <ListItem text="Skills" secondaryText={<div>Test</div>} />
      <ListItem text="Notes" secondaryText={<Text>sample</Text>} />
    </Stack>
  );
};

export default Personal;
