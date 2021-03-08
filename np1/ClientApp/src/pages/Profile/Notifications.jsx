import React from "react";
import LikeActivity from "./../../components/LikeActivity";
import EditActivity from "./../../components/EditActivity";
import CommentActivity from "./../../components/CommentActivity";

const Notifications = () => {
  return (
    <div>
      <LikeActivity
        by="@mourya"
        timeStamp="2021-03-08"
        comment1="ksjdflksjf"
        comment2="sdfsdfsdf"
        actionName="commented"
        iconName="message"
      />

      <EditActivity
        by="@mourya"
        timeStamp="2021-03-07"
        comment1="ksjdflksjf"
        comment2="sdfsdfsdf"
        actionName="intrested"
        iconName="like"
      />

      <CommentActivity
        by="@mourya"
        timeStamp="2021-03-06"
        comment1="ksjdflksjf"
        actionName="edited"
        iconName="edit"
      />
    </div>
  );
};

export default Notifications;
