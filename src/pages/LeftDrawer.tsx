import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


const CustomizeLogoDiv = styled(DrawerHeader)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  drawerWidth: number;
  open: boolean;
  children: React.ReactNode;
}

function LeftDrawer(props: DrawerProps): JSX.Element {
  const { open, drawerWidth, children, ...rest } = props;

  return (
    <Drawer
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          boxShadow: "rgb(0, 0, 0) 0px 0px 3px",
          borderRight: 0,
        },
      }}
      variant="persistent"
      {...rest}
    >
      <CustomizeLogoDiv
        sx={{ boxShadow: "rgb(0, 0, 0) 0px 0px 3px", paddingRight: 0 }}
      >
          LOGO
      </CustomizeLogoDiv>
      {children}
    </Drawer>
  );
}

export default LeftDrawer;
