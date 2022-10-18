import * as React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import { FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";

const SelectList = () => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={""}
        onChange={()=>{}}
        label="Age"
      >
      </Select>
    </FormControl>
  );
};
export default SelectList;
