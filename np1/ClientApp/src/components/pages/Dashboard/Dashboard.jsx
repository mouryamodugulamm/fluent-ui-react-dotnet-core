import React from "react";
import Card from "../../Card";

import fakeData from "./__mocks__/MOCK_DATA.json";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard Page</h3>

      {fakeData.map((row) => {
        return <Card data={row} key={row.userid} />;
      })}
    </div>
  );
}
