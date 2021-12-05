import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function SoftwareSelected(props) {
  function checkSelected(item) {
    return item.selected;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 1000, bgcolor: "#fff" }}>
      {props.data.filter(checkSelected).map((value) => {
        return (
          <ListItem key={value} disablePadding>
            <ListItemText id={1} primary={`${value.name}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
