import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
export default function SoftwareListItem(props) {
  var [checked, setChecked] = React.useState(props.data[props.index].selected);
  function updateData(e) {
    props.data[e.target.id].selected = !props.data[e.target.id].selected;
    setChecked(props.data[e.target.id].selected);
    props.setData(props.data);
    props.updateListEvent(props.data);
  }
  return (
    <FormControlLabel
      sx={{
        "&:hover": {
          // backgroundColor: "#fff",
          color: "#1d3366",
          opacity: [0.7, 0.7, 0.7]
        }
      }}
      disablePadding
      control={
        <Checkbox
          checked={checked}
          onChange={updateData}
          edge="start"
          disableRipple
          icon={<AddCircleOutlineSharpIcon />}
          checkedIcon={<RemoveCircleSharpIcon />}
          id={props.data[props.index].id}
        />
      }
      label={
        <Box component="div" fontSize={15}>{`${
          props.data[props.index].name
        } (v${props.data[props.index].version}) ${
          props.data[props.index].description
        }`}</Box>
      }
    />
  );
}
