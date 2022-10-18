/* eslint-disable react/jsx-key */
import * as React from "react";
import { Row, TableBodyProps } from "react-table";
import { TableCell, Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import theme from "../../theme/Theme";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HorizontalFlexBox from "../containers/HorizontalFlexBox";
import INGimage from "bank-icons/ING.png";
import { CellTypes } from "./types";
import EuroRoundedIcon from "@mui/icons-material/EuroRounded";
import moment from "moment";
import ImageCard from "components/cards/ImageCard";

interface getTableBodyProps {
  getTableBodyProps: () => TableBodyProps;
  prepareRow: (row: Row<object>) => void;
  rows: Row[];
}

// TODO: check how to implement custom components the right way.

function getCustomComponentProps(cell) {
  if (cell.type === "image") {
  }
  return { image: INGimage, imageheight: "50px", imagewidth: "60px" };
}

enum CellTypes {
  number = "number",
  object = "object",
  string = "string",
  date = "date",
  eur = "eur",
  image = "image",
}

function buildTableCell(cell, row) {
  if (cell.isGrouped) {
    return (
      console.log(cell, row),
      (
        <TableCell {...row.getToggleRowExpandedProps()} sx={{}}>
          <HorizontalFlexBox
            sx={{
              paddingLeft: `${row.depth * 2}`,
              justifyContent: "space-between",
            }}
          >
            <HorizontalFlexBox>
              {row.isExpanded ? (
                <ExpandMoreRoundedIcon
                  fontSize="small"
                  sx={{ marginRight: theme.spacing(1) }}
                />
              ) : (
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ marginRight: theme.spacing(1) }}
                />
              )}
              {getTableCell(cell, row)}
            </HorizontalFlexBox>

            <Typography variant="caption">({row.subRows.length})</Typography>
          </HorizontalFlexBox>
        </TableCell>
      )
    );
  } else if (cell.isPlaceholder) {
    return (
      <TableCell
        {...row.getToggleRowExpandedProps()}
        sx={{ backgroundColor: "rgba(19, 42, 19, .1)" }}
      ></TableCell>
    );
  } else {
    return (
      <TableCell
        {...row.getToggleRowExpandedProps()}
        {...cell.getCellProps()}
        sx={{}}
      >
        {getTableCell(cell, row)}
      </TableCell>
    );
  }
}

function getTableCell(cell, row) {
  if (cell.value) {
    switch (cell.column.type) {
      case CellTypes.eur:
        return (
          <HorizontalFlexBox sx={{}}>
            <EuroRoundedIcon sx={{ mr: 1 }} fontSize={"inherit"} />
            {cell.value.toFixed(2)}
          </HorizontalFlexBox>
        );
      case CellTypes.date:
        return (
          <HorizontalFlexBox sx={{}}>
            {moment(cell.value).format("Do [of] MMM YYYY")}
          </HorizontalFlexBox>
        );
      case CellTypes.image:
        return (
          <ImageCard
            {...getCustomComponentProps(cell)}
            cardwidth={"35px"}
            cardheight={"35px"}
            sx={{ boxShadow: "none", padding: 0.2, borderRadius: "6px" }}
          ></ImageCard>
        );
      default:
        return cell.render("Cell");
    }
  } else if (cell.column.id == "selection") {
    return cell.render("Cell");
  }
}

function TableCellComponent({ cell, row }: getTableBodyProps) {
  return buildTableCell(cell, row);
}

export default TableCellComponent;
