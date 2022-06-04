import { Badge } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Messages = ({ count, open, handleClick, children }) => {
  return (
    <div className={`messages ${open}`} onClick={handleClick}>
      <div>
      <Badge badgeContent={count} color="error">
        <NotificationsIcon fontSize="large" />
      </Badge>
      </div>
      
      {children}
    </div>
  );
};

export default Messages;
