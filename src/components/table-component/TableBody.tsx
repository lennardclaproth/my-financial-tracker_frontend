/* eslint-disable react/jsx-key */
import * as React from "react";
import Box from "@mui/material/Box";
import {
  defaultColumn,
  useExpanded,
  useGroupBy,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
  useFilters,
  useAsyncDebounce,
  HeaderGroup,
  ColumnInstance,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
} from "react-table";
import {
  Badge,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Popover,
  Radio,
  RadioGroup,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
//   TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import theme from "../../theme/Theme";
import {
  CheckBox,
  Filter1Rounded,
  FilterListOffRounded,
  FilterListRounded,
} from "@mui/icons-material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import MenuComponent from "../menu/Menu";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TableFunctions from "./table-functions/TableFunctions";
import HorizontalFlexBox from "../containers/HorizontalFlexBox";
import INGimage from "bank-icons/ING.png"
import TableRow from "./TableRow"
interface getTableBodyProps {
  getTableBodyProps: () => TableBodyProps;
  prepareRow: (row: Row<object>) => void;
  rows: Row[];
}

// TODO: check how to implement custom components the right way.

function getCustomComponentProps(cell){
    if(cell.type==="image"){
        
    }
    return {image:INGimage, imageheight:"50px", imagewidth:"60px"}
}

function TableBodyComponent({
  getTableBodyProps,
  prepareRow,
  rows,
}: getTableBodyProps) {
  return (
    <TableBody {...getTableBodyProps()}>
      {rows.map((row) => {
        // prepareRow(row);
        return (
            <TableRow row={row} prepareRow={prepareRow}/>
        //   <TableRow
        //     {...row.getRowProps()}
        //     onClick={() => {
        //       if (!row.isGrouped) {
        //         row.toggleRowSelected();
        //       }
        //     }}
        //     sx={{ "&:hover": { backgroundColor: "rgba(19, 42, 19, .1)" } }}
        //   >
        //     {row.cells.map((cell) => {
        //       if (cell.isGrouped) {
        //         return (
        //           <TableCell {...row.getToggleRowExpandedProps()} sx={{}}>
        //             <HorizontalFlexBox
        //               sx={{
        //                 paddingLeft: `${row.depth * 2}`,
        //               }}
        //             >
        //               {row.isExpanded ? (
        //                 <ExpandMoreRoundedIcon
        //                   fontSize="small"
        //                   sx={{ marginRight: theme.spacing(1) }}
        //                 />
        //               ) : (
        //                 <ChevronRightRoundedIcon
        //                   fontSize="small"
        //                   sx={{ marginRight: theme.spacing(1) }}
        //                 />
        //               )}
        //               {cell.render("Cell")} ({row.subRows.length})
        //             </HorizontalFlexBox>
        //           </TableCell>
        //         );
        //       } else if (cell.isPlaceholder) {
        //         return (
        //           <TableCell
        //             {...row.getToggleRowExpandedProps()}
        //             sx={{ backgroundColor: "rgba(19, 42, 19, .1)" }}
        //           ></TableCell>
        //         );
        //       } else if (cell.column.customComponent) {
        //         return (
        //           <TableCell
        //             {...row.getToggleRowExpandedProps()}
        //             {...cell.getCellProps()}
        //             sx={{}}
        //             onClick={(e) => {
        //               if (cell.value) {
        //                 e.stopPropagation();
        //               }
        //             }}
        //           >
        //             {cell.value
        //               ? cell.render(
        //                   cell.column.customComponent(
        //                     getCustomComponentProps(cell)
        //                   )
        //                 )
        //               : null}
        //           </TableCell>
        //         );
        //       } else {
        //         return (
        //           <TableCell
        //             {...row.getToggleRowExpandedProps()}
        //             {...cell.getCellProps()}
        //             sx={{}}
        //           >
        //             {cell.render("Cell")}
        //           </TableCell>
        //         );
        //       }
        //     })}
        //   </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TableBodyComponent;
