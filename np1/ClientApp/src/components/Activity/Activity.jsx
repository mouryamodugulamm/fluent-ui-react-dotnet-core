import moment from "moment";
import { ActivityItem, Icon, Link } from "office-ui-fabric-react";
import React from "react";
import ActivityStyles from "./styles/LikeActivity.Styles";

const Activity = (props) => {
  return (
    <div>
      <ActivityItem
        className={ActivityStyles.activity}
        comments={[
          <span key={1}>{props.comment1}</span>,
          props.comment1 && (
            <Link
              key={2}
              onClick={() => {
                alert("An @mentioned name was clicked.");
              }}
            >
              {props.by}
            </Link>
          ),
          <span key={3}> {props.comment2}</span>,
        ]}
        activityDescription={[
          <Link
            onClick={() => {
              alert("ok");
            }}
          >
            {props.by}
          </Link>,
          <span>
            {"  "}
            {props.actionName}
          </span>,
        ]}
        activityIcon={<Icon iconName={props.iconName} />}
        timeStamp={moment(props.timeStamp).fromNow()}
      />
    </div>
  );
};

export default Activity;
