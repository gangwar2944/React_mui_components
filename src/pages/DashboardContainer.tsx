import { useState } from "react";
import { styled } from "@mui/material/styles";
import LeftDrawer from "./LeftDrawer";
import Mainlayout from "./Mainlayout";
import SideBar from "./SideBar";
import Header  from "../commonComponets/Header";

interface DashboardContainerProps {
  children: JSX.Element;
}
const drawerWidth = 200;
const DataProcessingHeading = styled("span")`
  color: #ced9e2;
  font-size: 1rem;
  font-weight: 100;
  padding: 5px 15px;
`;
function DashboardContainer({
  children,
}: DashboardContainerProps): JSX.Element {
  const [open, setOpen] = useState(true);

  const handleDrawer = (): void => {
    setOpen((state) => !state);
  };

  return (
    <>
      <Header
        drawerWidth={drawerWidth}
        open={open}
        setClose={handleDrawer}
      />
      <LeftDrawer drawerWidth={drawerWidth} open={open}>
        <DataProcessingHeading>Mui Components</DataProcessingHeading>
        <SideBar />
      </LeftDrawer>
      <Mainlayout drawerWidth={drawerWidth} open={open}>
        {children}
      </Mainlayout>
    </>
  );
}

export default DashboardContainer;
