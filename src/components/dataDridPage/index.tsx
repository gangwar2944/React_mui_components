import React from "react";
import { MuiDataGrid } from "../MuiDataGrid";

const index = () => {
  const columns = [
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "serialNo",
      headerName: "Id",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "modelNo",
      headerName: "Model No.",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "facility",
      headerName: "Facility Name",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "groupNames",
      headerName: "Group",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },

    {
      field: "onboardDate",
      headerName: "Onboarding Date",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "sourceType",
      headerName: "Onboarded Type",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "alarms",
      headerName: "Alarm",
      sortable: false,
      //   flex: 1,
      width: 250,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      //   flex: 1,
      width: 250,
    },
  ];
  const rows = [
    {
      id: 1,
      action: "Edit",
      serialNo: "SN12345",
      name: "Device A",
      modelNo: "MDL-001",
      facility: "Main Facility",
      groupNames: "Group 1",
      onboardDate: "2023-01-15",
      sourceType: "Automated",
      alarms: "3 Active",
      status: "Active",
    },
    {
      id: 2,
      action: "Edit",
      serialNo: "SN12346",
      name: "Device B",
      modelNo: "MDL-002",
      facility: "Branch Facility",
      groupNames: "Group 2",
      onboardDate: "2023-02-20",
      sourceType: "Manual",
      alarms: "No Alarms",
      status: "Inactive",
    },
    {
      id: 3,
      action: "Edit",
      serialNo: "SN12347",
      name: "Device C",
      modelNo: "MDL-003",
      facility: "Main Facility",
      groupNames: "Group 3",
      onboardDate: "2023-03-10",
      sourceType: "Automated",
      alarms: "1 Active",
      status: "Active",
    },
    {
      id: 4,
      action: "Edit",
      serialNo: "SN12348",
      name: "Device D",
      modelNo: "MDL-004",
      facility: "Branch Facility",
      groupNames: "Group 4",
      onboardDate: "2023-04-05",
      sourceType: "Manual",
      alarms: "2 Active",
      status: "Maintenance",
    },
    {
      id: 5,
      action: "Edit",
      serialNo: "SN12349",
      name: "Device E",
      modelNo: "MDL-005",
      facility: "Main Facility",
      groupNames: "Group 5",
      onboardDate: "2023-05-12",
      sourceType: "Automated",
      alarms: "No Alarms",
      status: "Active",
    },
  ];

  return (
    <div>
      <MuiDataGrid columns={columns} rows={rows} width="100%"/>
    </div>
  );
};

export default index;
