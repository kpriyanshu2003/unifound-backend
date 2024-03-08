import React from "react";
import "../styles/Items.css";
import EmailIcon from "@mui/icons-material/Email";
import CategoryIcon from "@mui/icons-material/Category";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ListItem = (props) => {
  return (
    <div className="itemContainer">
      <div className="itemImageContainer">
        <img
          src={`${process.env.REACT_APP_API_URL}/images/${props.data.fileId}`}
          alt=""
          width="100%"
        />
      </div>
      <div className="innerContainer">
        <div>
          <span>{props.data.itemTitle}</span>
        </div>
        <div>
          <span>{props.data.studentName}</span>
        </div>
        <hr />
        <div>
          <DescriptionIcon style={{ fontSize: "medium" }} />
          <span>{props.data.itemDescription}</span>
        </div>
        <div>
          <CalendarMonthIcon style={{ fontSize: "medium" }} />
          <span>{new Date(props.data.createdAt).toDateString()}</span>
        </div>
        <div>
          <EmailIcon style={{ fontSize: "medium" }} />
          <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
          <ContentCopyIcon
            className="copyIcon"
            onClick={() => {
              navigator.clipboard.writeText(props.data.email);
            }}
          />
        </div>
        <div>
          <LocationOnIcon style={{ fontSize: "medium" }} />
          <span>{props.data.location}</span>
        </div>
        <div
          className="category"
          style={{
            backgroundColor:
              props.data.category === "LOST" ? "#e57373" : " #66bb6a",
            cursor: "default",
          }}
        >
          <CategoryIcon style={{ fontSize: "medium" }} />
          <span>{props.data.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
