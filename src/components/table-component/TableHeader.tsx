/* eslint-disable react/jsx-key */
import * as React from "react";
import { ColumnInstance } from "react-table";
import {
  Badge,
  IconButton,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FilterListRounded } from "@mui/icons-material";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import TableFunctions from "./table-functions/TableFunctions";
import HorizontalFlexBox from "../containers/HorizontalFlexBox";
import { TableHeaderProps } from "./types";

const countActiveFilters = (column: ColumnInstance) => {
  let count = 0;
  const columnFunctions = [
    column.filterValue,
    column.isGrouped,
    column.isSorted,
  ];
  for (const columnFunction of columnFunctions) {
    if (columnFunction) {
      count = count + 1;
    }
  }
  return count;
};

function TableHeader({ headerGroups, columns }: TableHeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedColumn, setSelectedColumn] = React.useState(columns[0]);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableHead>
      {headerGroups.map((headerGroup, index: number) => (
        <TableRow
          key={`headerGroup-${index}`}
          {...headerGroup.getHeaderGroupProps}
        >
          {headerGroup.headers.map((column: ColumnInstance) => (
            <TableCell {...column.getHeaderProps()} height={57} width={100}>
              <HorizontalFlexBox
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle2">
                  {column.render("Header")}
                </Typography>
                <HorizontalFlexBox sx={{ justifyContent: "space-between" }}>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <KeyboardDoubleArrowDownRoundedIcon fontSize="small" />
                    ) : (
                      <KeyboardDoubleArrowUpRoundedIcon fontSize="small" />
                    )
                  ) : (
                    false
                  )}
                  {column.id !== "selection" ? (
                    <HorizontalFlexBox sx={{ justifyContent: "space-between" }}>
                      <Badge
                        badgeContent={countActiveFilters(column)}
                        color="secondary"
                      >
                        <IconButton
                          color="primary"
                          onClick={(e) => {
                            handleClick(e);
                            setSelectedColumn(column);
                          }}
                          sx={{
                            boxShadow: "none",
                            "& :hover": { boxShadow: "none" },
                          }}
                        >
                          <FilterListRounded fontSize="small" />
                        </IconButton>
                      </Badge>
                      <TableFunctions
                        selectedColumn={selectedColumn}
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleClose}
                      />
                    </HorizontalFlexBox>
                  ) : (
                    false
                  )}
                </HorizontalFlexBox>
              </HorizontalFlexBox>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}

export default TableHeader;
