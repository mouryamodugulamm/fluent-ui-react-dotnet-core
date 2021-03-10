import { PrimaryButton, Stack } from "office-ui-fabric-react";
import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./../../components/Card";
import SearchPosts from "./../../components/SearchPosts";

import fakeData from "./__mocks__/MOCK_DATA.json";

export default function Dashboard() {
  const history = useHistory();
  return (
    <div>
      <h3>Dashboard Page</h3>

      <Stack
        style={{ marginBottom: 15 }}
        horizontal
        tokens={{ childrenGap: 25 }}
      >
        <SearchPosts />

        <PrimaryButton
          aria-label="Add new post"
          iconProps={{ iconName: "Mail" }}
          title="Add Job Post"
          onClick={() => {
            history.push("/post/new/job");
          }}
        />
      </Stack>

      {fakeData.map((row) => {
        return <Card data={row} key={row.userid} />;
      })}
    </div>
  );
}
