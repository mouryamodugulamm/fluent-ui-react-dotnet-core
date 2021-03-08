import React from "react";
import { Link, Persona, Pivot, PivotItem, Stack, Text } from "@fluentui/react";
import ProfileStyles, { ProfileTokens } from "./styles/Profile.Styles";
import Personal from "./Personal";
import { TestImages } from "@uifabric/example-data";

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>

      <Stack>
        <Stack.Item className={ProfileStyles.header}>
          <Stack horizontal tokens={ProfileTokens.header}>
            <Stack.Item className={ProfileStyles.headerImage}>
              <Persona coinSize={72} imageUrl={TestImages.personaMale} />
            </Stack.Item>
            <Stack.Item className={ProfileStyles.headerDetails}>
              <Stack tokens={ProfileTokens.detailsStack}>
                <Text variant="xLarge">Mourya Vamsi Modugula</Text>
                <Text variant="mediumPlus">Software Sr. Engineer</Text>
                <Text variant="small">
                  <Link href="mailto:mvmodugula@predifast.com">
                    mvmodugula@predifast.com
                  </Link>
                </Text>

                <Text variant="small">Predifast Technologies Pvt. Ltd</Text>
              </Stack>
            </Stack.Item>
            <Stack.Item></Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item className={ProfileStyles.body}>
          <Pivot>
            <PivotItem headerText="Personal">
              <Personal />
            </PivotItem>
            <PivotItem headerText="Interests">Interests</PivotItem>
            <PivotItem headerText="Notifications">Notifications</PivotItem>
          </Pivot>
        </Stack.Item>
      </Stack>
    </div>
  );
};

export default Profile;
