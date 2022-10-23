/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Row,
  TableBodyProps,
} from "react-table";
import {
  TableBody,
} from "@mui/material";
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
      {rows.map((row, index) => {
        // prepareRow(row);
        return (
            <TableRow key={`row-${index}`} row={row} prepareRow={prepareRow}/>
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
