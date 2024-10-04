import * as React from "react";
import {DataGridPro, GridCallbackDetails, GridColDef, GridInputRowSelectionModel, GridRowSelectionModel, GridRowsProp } from "@mui/x-data-grid-pro";
import { Box, styled } from "@mui/material";
// import { NoRowsOverlay } from "./components/CustomNoRowsOverlay";

const StyledDataTable = styled(DataGridPro)(({ theme }) => ({
  borderColor: theme.palette.grey[100],
  fontFamily: "Roboto, sans-serif",
  fontSize: "14px !important",
  scrollbarWidth: "thin",
  borderRadius: "0 0 10px 10px",
  "&.MuiDataGrid-root": {
    borderColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
  },
  "& .MuiDataGrid-footerContainer.MuiDataGrid-withBorderColor": {
    minHeight: "34px",
    maxHeight: "34px",
  },
  "&.MuiDataGrid-root .MuiDataGrid-withBorderColor": {
    borderColor: theme.palette.grey[100],
  },
  "&.MuiDataGrid-root .MuiDataGrid-columnHeaders,.MuiDataGrid-root .MuiDataGrid-pinnedColumnHeaders ":
    {
      background: theme.palette.secondary.light,
      color: theme.palette.text.primary,
      borderBottom: "none",
      fontSize: "1rem",
      lineHeight: "40px !important", // without important it is not working
      maxHeight: "40px !important",
      minHeight: "40px !important",
    },
  "&.MuiDataGrid-root .MuiDataGrid-virtualScroller": {
    scrollbarWidth: "thin",
  },
}));

interface DataTableProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  width: string;
  isLoading?: boolean;
  columns: GridColDef[];
  rows: GridRowsProp;
  selectCheckbox?: boolean;
  onRowSelectionModelChange?:
    | ((
        rowSelectionModel: GridRowSelectionModel,
        details: GridCallbackDetails
      ) => void)
    | undefined;
  rowSelectionModel?: GridInputRowSelectionModel | undefined;
  isRowSelectable?: any;
  height?: number | string;
}

export function MuiDataGrid({
  isLoading,
  width,
  columns,
  rows,
  selectCheckbox,
  onRowSelectionModelChange,
  rowSelectionModel,
  height,
}: DataTableProps): JSX.Element {
  let paramHeight = "428px";
  if (typeof height === "string") {
    paramHeight = height;
  } else if (typeof height === "number") {
    paramHeight = `${height.toString()}px`;
  }
  // const maxWidthOfTable = window.innerWidth - 280; //@Todo need to inventigate
  return (
    <Box
      sx={{
        // width,
        height: paramHeight,
        maxWidth: "100%",
      }}>
      <StyledDataTable
        checkboxSelection={selectCheckbox}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
          sorting: {
            sortModel: [
              {
                sort: "asc",
                field: "id",
              },
            ],
          },
        }}
        loading={isLoading}
        onRowSelectionModelChange={onRowSelectionModelChange}
        pageSizeOptions={[10, 25, 50, 100]}
        pagination
        rowHeight={34}
        rowSelectionModel={rowSelectionModel}
        rows={rows}
        // slots={{ noRowsOverlay: NoRowsOverlay }}
        sx={{
          "--DataGrid-overlayHeight": "300px",
          height: paramHeight,
        }}
      />
    </Box>
  );
}
