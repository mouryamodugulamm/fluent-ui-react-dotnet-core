import React from "react";
import Card from "./../../components/Card";
import SearchPosts from "./../../components/SearchPosts";

import fakeData from "./__mocks__/MOCK_DATA.json";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard Page</h3>

      <SearchPosts />

      {fakeData.map((row) => {
        return <Card data={row} key={row.userid} />;
      })}
    </div>
  );
}
