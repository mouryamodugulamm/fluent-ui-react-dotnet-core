import React from "react";
import { Text } from "@fluentui/react";
import ListItem from "../../components/ListItem";
import ProfileStyles from "./styles/Profile.Styles";

const Personal = () => {
  return (
    <div className={ProfileStyles.header}>
      <ListItem text="Education" secondaryText="B.Tech at KL University" />
      <ListItem text="Location" secondaryText="Guntur Dist , Narasarao pet" />
      <ListItem text="Skills" secondaryText={<div>Test</div>} />
      <ListItem text="Notes" secondaryText={<Text>sample</Text>} />
    </div>
  );
};

export default Personal;
