import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import type { Theme } from "@mui/material";
import {
  Box,
  styled,
} from "@mui/material";
import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
export const AppBox = styled(Box)(() => ({
  background: "#f4f4f4",
  border: "#f2f2f2 solid 10px",
  borderRadius: "100%",
  height: "70px",
  width: "70px",
}));

const CustomIconButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  fontWeight: 400,
}));

const IconContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

interface HeaderProps {
  open: boolean;
  drawerWidth: number;
  setClose: () => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "rgb(0, 0, 0) 0px 0px 3px;",
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header(props: HeaderProps): JSX.Element {
  const {
    open,
    drawerWidth,
    setClose,
  } = props;
  const [showLauncher, setShowLauncher] = useState(false);

  return (
    <AppBar
      color="transparent"
      drawerWidth={drawerWidth}
      open={open}
      position="fixed"
    >
      <Toolbar sx={{paddingRight:"5px !important"}}>
        <CustomIconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
          onClick={setClose}
          size="large"
          // sx={{ mr: 2 }}
        >
          <MenuIcon />
        </CustomIconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconContainer>
          <HomeIcon
            style={{ fontSize: "1.8rem", cursor: "pointer" }}
          />
          <DashboardIcon
            onClick={() => setShowLauncher(!showLauncher)}
            style={{ fontSize: "1.8rem", cursor: "pointer" }}
          />
        </IconContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header