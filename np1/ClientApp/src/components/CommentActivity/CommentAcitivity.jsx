import React from "react";
import Activity from "../Activity";
const CommentActivity = (props) => {
  return (
    <div>
      <Activity
        by={props.by}
        timeStamp={props.timeStamp}
        comment1={props.comment1}
        actionName="commented"
        iconName="comment"
      />
    </div>
  );
};

export default CommentActivity;
