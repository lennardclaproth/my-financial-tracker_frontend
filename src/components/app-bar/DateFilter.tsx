import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import theme from "../../theme/Theme";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import MenuComponent from "../menu/Menu";
import { setFilter } from "../../store/slices/globalFilterSlice";
import { useSelector, useDispatch } from 'react-redux'


const filters = [
  {
    label: "Year To Date (YTD).",
    value: "YTD",
  },
  {
    label: "One week (1W)",
    value: "1W",
  },
  {
    label: "One month (1M).",
    value: "1M",
  },
  {
    label: "One year (1Y).",
    value: "1Y",
  },
  {
    label: "All time (MAX).",
    value: "MAX",
  },
];

const DateFilterComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch()
  const filter = useSelector((state:any)=> state.globalFilter.dateFilter)
  return (
    <Box sx={{height:"64px", borderRadius: "0px", width: "25%" }}>
      <Button
        sx={{ pl: 2, pr: 2, height: "100%", borderRadius: "0px", width: "100%" }}
        color="secondary"
        variant="text"
        startIcon={<FilterListRoundedIcon />}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {filter}
      </Button>
      <MenuComponent
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menuwidth={"350px"}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: 0,
          horizontal: 350,
        }}
      >
        <RadioGroup value={filter}>
          {filters.map((element, index) => (
            <FormControlLabel
              key={`filterMenu-${index}`}
              control={<Radio />}
              value={element.value}
              onClick={() => {dispatch(setFilter({dateFilter:element.value}))}}
              label={
                <Typography variant="subtitle2">{element.label}</Typography>
              }
              sx={{ marginLeft: theme.spacing(1) }}
            />
          ))}
        </RadioGroup>
      </MenuComponent>
    </Box>
  );
};
export default DateFilterComponent;
