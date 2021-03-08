import React from "react";
import Activity from "../Activity";
const EditActivity = (props) => {
  return (
    <div>
      <Activity
        by={props.by}
        timeStamp={props.timeStamp}
        edit={props.edit}
        actionName="edited"
        iconName="edit"
      />
    </div>
  );
};

export default EditActivity;
