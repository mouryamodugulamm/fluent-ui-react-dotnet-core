import React from "react";
import {
  Stack,
  Dropdown,
  Icon,
  TextField,
  Callout,
  SearchBox,
  Checkbox,
  PrimaryButton,
  ChoiceGroup,
  DefaultButton,
} from "@fluentui/react";
import NewJobPostStyles, { NewJobPostTokens } from "./styles/NewJobPost.Styles";
import { NewJobPostData } from "./__mocks__/NewJobPostData";

const NewJobPost = () => {
  const allIndustries = NewJobPostData;
  const [selectedIndustry, setSelectedIndustry] = React.useState("");

  const [isCalloutVisible, setIsCalloutVisible] = React.useState(false);

  const handleChange = (e, { key }) => {
    setSelectedIndustry(key);
  };

  const handleRenderOption = (option) => {
    return (
      <Stack horizontal tokens={NewJobPostTokens.horizontalChildren}>
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
      className={[NewJobPostStyles.header, NewJobPostStyles.intrests]}
      tokens={NewJobPostTokens.verticalChildren}
    >
      <h3>Add New Job</h3>
      <Dropdown
        placeholder="Select Industry"
        label="Industry"
        options={allIndustries}
        onChange={handleChange}
        onRenderOption={handleRenderOption}
      />

      {selectedIndustry === "RYB_IT" && (
        <Stack tokens={NewJobPostTokens.verticalChildren}>
          <TextField
            label="Position Name"
            required
            placeholder="enter job title"
          />

          <TextField label="Job Description" required multiline />
          <SearchBox
            placeholder="Skills"
            id="searchSkills"
            onSearch={() => {
              setIsCalloutVisible(true);
            }}
            onEscape={() => {
              setIsCalloutVisible(false);
            }}
            onClear={() => {
              setIsCalloutVisible(false);
            }}
          />

          <DefaultButton text="Add File" iconProps={{ iconName: "upload" }} />

          <ChoiceGroup
            label="Share to"
            options={[
              {
                key: "public",
                text: "Public",
                iconProps: { iconName: "Globe" },
              },
              {
                key: "contacts",
                text: "Contacts",
                iconProps: { iconName: "Group" },
              },
            ]}
          />

          <PrimaryButton text="Share" iconProps={{ iconName: "send" }} />

          {isCalloutVisible && (
            <Callout
              target="#searchSkills"
              className={NewJobPostStyles.callout}
            >
              <Checkbox label="React" />
              <Checkbox label="React1" />
              <Checkbox label="React2" />
              <Checkbox label="React3" />
            </Callout>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default NewJobPost;
