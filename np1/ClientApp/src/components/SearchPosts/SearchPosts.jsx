import React from "react";
import { SearchBox, Stack, DetailsList } from "@fluentui/react";
import SearchPostsStyles from "./styles/SearchPosts.Styles";

const searchPostsListcolumns = [
  {
    key: "industry",
    name: "Industry",
    fieldName: "industry",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "summary",
    name: "Summary",
    fieldName: "summary",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "postedDate",
    name: "Posted Date",
    fieldName: "postedDate",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "postedBy",
    name: "Posted By",
    fieldName: "postedBy",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
];

const fakeData = [
  {
    key: "1",
    summary: "Sr Software Engineer",
    industry: "Job",
    postedDate: "2021-01-05",
    postedBy: "Ravi",
  },
  {
    key: "2",
    summary: "Sr Software Engineer",
    industry: "Job",
    postedDate: "2021-01-05",
    postedBy: "Ravi",
  },
  {
    key: "3",
    summary: "Sr Software Engineer",
    industry: "Job",
    postedDate: "2021-01-05",
    postedBy: "Ravi",
  },
];

const SearchPosts = () => {
  const [isSearched, SetIsSearached] = React.useState(false);

  return (
    <Stack>
      <Stack.Item className={SearchPostsStyles.searchBox}>
        <SearchBox
          placeholder="Search posts"
          onSearch={(newValue) => {
            SetIsSearached(true);
            console.log("Searched Data is : " + newValue);
          }}
          onClear={() => {
            SetIsSearached(false);
          }}
          onEscape={() => {
            SetIsSearached(false);
          }}
        />
      </Stack.Item>

      {isSearched && (
        <Stack.Item className={SearchPostsStyles.detailList}>
          <DetailsList columns={searchPostsListcolumns} items={fakeData} />
        </Stack.Item>
      )}
    </Stack>
  );
};

export default SearchPosts;
