import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { MaterialReactTable } from "material-react-table";

const data = [
  { name: "John", age: 30 },
  { name: "Sara", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 40 },
  { name: "Eve", age: 33 },
  { name: "Frank", age: 29 },
  { name: "Grace", age: 26 },
  { name: "Hank", age: 31 },
  { name: "Ivy", age: 24 },
  { name: "Jack", age: 27 },
  { name: "Kara", age: 32 },
  { name: "Leo", age: 36 },
  { name: "Mona", age: 38 },
  { name: "Nina", age: 23 },
  { name: "Oscar", age: 34 },
  { name: "Paul", age: 21 },
  { name: "Quinn", age: 39 },
  { name: "John", age: 30 },
  { name: "Sara", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 40 },
  { name: "Eve", age: 33 },
  { name: "Frank", age: 29 },
  { name: "Grace", age: 26 },
  { name: "Hank", age: 31 },
  { name: "Ivy", age: 24 },
  { name: "Jack", age: 27 },
  { name: "Kara", age: 32 },
  { name: "Leo", age: 36 },
  { name: "Mona", age: 38 },
  { name: "Nina", age: 23 },
  { name: "Oscar", age: 34 },
  { name: "Paul", age: 21 },
  { name: "Quinn", age: 39 },
  { name: "John", age: 30 },
  { name: "Sara", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 40 },
  { name: "Eve", age: 33 },
  { name: "Frank", age: 29 },
  { name: "Grace", age: 26 },
  { name: "Hank", age: 31 },
  { name: "Ivy", age: 24 },
  { name: "Jack", age: 27 },
  { name: "Kara", age: 32 },
  { name: "Leo", age: 36 },
  { name: "Mona", age: 38 },
  { name: "Nina", age: 23 },
  { name: "Oscar", age: 34 },
  { name: "Paul", age: 21 },
  { name: "Quinn", age: 39 },
];

function Table() {
  const columns = useMemo(() => [
    {
      accessorKey: "name",
      header: "Name",
      muiTableHeadCellProps: { sx: { backgroundColor: "lightgreen", color: "darkgreen", fontWeight: 'bold' } },
      muiTableBodyCellProps: { sx: { color: "green", fontSize: "16px" } },
      Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>,
    },
    {
      accessorKey: "age",
      header: "Age",
      muiTableHeadCellProps: { sx: { backgroundColor: "lightcoral", color: "darkred", fontWeight: 'bold' } },
      muiTableBodyCellProps: { sx: { color: "red", fontSize: "16px" } },
      Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>,
    },
  ], []);

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>Welcome Data Table</Typography>
      <Box sx={{maxWidth :"90%", mx: "auto",  width: "100%" }}>
        <MaterialReactTable 
          columns={columns}
          data={data}
          enableStickyFooter={true}
          enableStickyHeader={true}
          positionPagination="top"
          enableSorting={false}
          enableColumnActions={false}
          enableFilters={false}
          enableHiding={false}
          enableToolbarInternalActions={false}
          muiTableProps={{
            sx: {
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            },
          }}
          muiPaginationProps={{
            rowsPerPageOptions: [5, 10, 15, 20, 25],
            showFirstButton: false,
            showLastButton: false
          }}
          enableColumnOrdering
          enableColumnDragging={true}  
          enableRowSelection={true}
          positionToolbarAlertBanner="bottom"
          
        />
      </Box>
    </>
  );
}

export default Table;
