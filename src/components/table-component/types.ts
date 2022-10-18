import { TableProps } from "@mui/material";
import { Component, ReactComponentElement } from "react";
import { HeaderGroup, ColumnInstance } from "react-table";

interface TableHeaderProps {
  headerGroups: HeaderGroup[];
  columns: ColumnInstance[];
}

interface TableFunctionsProps {
  selectedColumn: ColumnInstance;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

interface CustomTableProps extends TableProps {
  data: DataElement[];
  //   columnExceptions: ColumnException[];
  columnProps?: Record<string, any>[];
}

type DataElement = Record<string, any>;

interface CustomColumnInstance extends ColumnInstance {
  Header: string;
  accessor: string;
  dataType: string;
}

interface SortProps {
  selectedColumn: ColumnInstance;
}

interface ColumnException {
  id: string;
  isVisible: boolean;
  customComponent: (
    props: Record<string, any> | undefined
  ) => Component | boolean;
}

export type {
  TableHeaderProps,
  TableFunctionsProps,
  CustomTableProps,
  DataElement,
  CustomColumnInstance,
  SortProps,
  CellTypes,
};
