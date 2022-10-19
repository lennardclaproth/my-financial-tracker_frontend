/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Row,
  TableBodyProps,
} from "react-table";
import {
  TableRow,
} from "@mui/material";
import TableCell from "./TableCell"
interface getTableBodyProps {
  getTableBodyProps: () => TableBodyProps;
  prepareRow: (row: Row<object>) => void;
  rows: Row[];
}

function TableRowComponent({
  prepareRow,
  row,
}: getTableBodyProps) {
  prepareRow(row);
  return (
    <TableRow
      {...row.getRowProps()}
      onClick={() => {
        if (!row.isGrouped) {
          row.toggleRowSelected();
        }
      }}
      sx={{ "&:hover": { backgroundColor: "rgba(19, 42, 19, .1)" } }}
    >
      {row.cells.map((cell, index) => {
        return <TableCell key={index} row={row} cell={cell}/>
      })}
    </TableRow>
  );
}

export default TableRowComponent;
