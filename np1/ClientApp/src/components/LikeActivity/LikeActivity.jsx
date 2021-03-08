import React from "react";
import Activity from "../Activity";
const LikeActivity = (props) => {
  return (
    <div>
      <Activity
        by={props.by}
        timeStamp={props.timeStamp}
        like={props.like}
        actionName="liked"
        iconName="like"
      />
    </div>
  );
};

export default LikeActivity;
