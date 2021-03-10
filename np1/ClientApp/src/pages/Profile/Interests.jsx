import { Stack, PrimaryButton, Text, Dropdown, Icon } from "@fluentui/react";
import React from "react";
import ProfileStyles, { ProfileTokens } from "./styles/Profile.Styles";
import { InterestsData } from "./__mocks__/InterestsData";

const Interests = () => {
  const allInterests = InterestsData;
  const [selectedInterests, setSelectedInterests] = React.useState([]);

  const handleOnChange = (e, item) => {
    let interests = [...selectedInterests];
    if (item.selected) interests.push(item.text);
    else {
      interests = interests.filter((e) => e !== item.text);
    }

    setSelectedInterests(interests);
  };

  const handleRenderOption = (option) => {
    return (
      <Stack horizontal tokens={ProfileTokens.horizontalChildren}>
        <div>
          {option.data && option.data.icon && (
            <Icon iconName={option.data.icon} />
          )}
        </div>
        <div>{option.text}</div>
      </Stack>
    );
  };

  return (
    <Stack
      className={[ProfileStyles.header, ProfileStyles.intrests]}
      tokens={ProfileTokens.verticalChildren}
    >
      {selectedInterests.length === 0 && (
        <Text>Currently, You had no interests. Click to add Interests</Text>
      )}
      {selectedInterests.length >= 1 && (
        <div>
          <ol>
            {selectedInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ol>
        </div>
      )}
      <Dropdown
        placeholder="Select interests"
        label="Interests"
        options={allInterests}
        onChange={handleOnChange}
        onRenderOption={handleRenderOption}
        multiSelect
      />
    </Stack>
  );
};

export default Interests;
