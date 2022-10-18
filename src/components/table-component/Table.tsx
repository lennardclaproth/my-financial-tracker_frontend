/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  useExpanded,
  useGroupBy,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
  useFilters,
  usePagination,
} from "react-table";
import {
  Table,
  TableContainer,
  TablePagination,
  Typography,
} from "@mui/material";
import Fab from '@mui/material/Fab';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { CustomTableProps, DataElement } from "./types";

// TODO: implement custom component for table

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef: React.Ref<unknown> = ref || defaultRef;

    React.useEffect(() => {
      // @ts-ignore
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" className="" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

IndeterminateCheckbox.displayName = "IndeterminateCheckbox";

function setupTable(data: Array<DataElement>, columnProps): any {
  const columns: any[] = [];
  const initialState: Record<string, any> = {
    hiddenColumns: [],
  };
  if (columnProps) {
    columnProps.forEach((column) => {
      if (column.isVisible == false)
        initialState.hiddenColumns.push(column.accessor);
      columns.push(column);
    });
  } else {
    if (data && data.length) {
      Object.keys(data[0]).forEach((element) => {
        const headerItem = {
          Header: element,
          // accessor: element.replace(/[^A-Z0-9]+/gi, "_"),
          accessor: element,
          dataType: typeof data[0][element],
        };
        columns.push(headerItem);
      });
    }
  }

  return { columns, initialState };
}

function TableComponent({ data, columnProps, sx }: CustomTableProps) {
  const tableSetup = setupTable(data, columnProps);
  const columns = React.useMemo(() => [...tableSetup.columns], [data]);
  const {
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageCount,
    gotoPage,
    setPageSize,
    page,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds, expanded },
  } = useTable(
    {
      columns,
      data,
      initialState: tableSetup.initialState,
    },
    useResizeColumns,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => {
            return (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            );
          },
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    gotoPage(newPage);
  };

  console.log(selectedFlatRows)

  //   buildColumns(data);
  //   addColumnExceptions(columns, columnExceptions)

  return (
    <TableContainer sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Table aria-label="simple table" size="small">
        <TableHeader columns={columns} headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
          rows={page}
        />
      </Table>
      <TablePagination
        component="div"
        count={rows.length}
        page={pageIndex}
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      />
    </TableContainer>
  );
}

export default TableComponent;
