import React from "react";
import { IconButton, Persona, Stack, StackItem, Text } from "@fluentui/react";
import ProfileStyles, { ProfileTokens } from "./styles/Profile.Styles";
import { TestImages } from "@uifabric/example-data";
import { useParams } from "react-router-dom";
const EditProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h3>Edit Your Profile</h3>

      <Stack>
        <Stack.Item className={ProfileStyles.headerImage}>
          <Persona
            coinSize={72}
            imageUrl={TestImages.personaMale}
            title="Mourya Vamsi"
          />
        </Stack.Item>
        <Stack horizontal tokens={ProfileTokens.header}>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: "add" }}
              ariaLabel="Add another"
              title="Add another profile"
            />
          </Stack.Item>
          <StackItem>
            <Text>{userId}</Text>
          </StackItem>
        </Stack>
      </Stack>
    </div>
  );
};

export default EditProfile;
