import { Box, Typography, useTheme } from "@mui/material";
import { SideBarData, sideBarData } from "../asset/sideBarJson";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const handleNavigate = (item: SideBarData) => {
    navigate(item.path);
  };
  return (
    <div>
      {sideBarData.map((item) => {
        return (
          <Box
            key={item.id}
            onClick={() => handleNavigate(item)}
            sx={{
              "& hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
            // sx={{
            //     '& hover': {
            //         backgroundColor: theme.palette.action.hover,
            //     },
            // }}
          >
            <Typography
              variant="body1"
              padding={"3px 10px"}
              sx={{
                cursor: "pointer",
                background:
                  location.pathname === item.path
                    ? theme.palette.primary.main
                    : "transparent",
                color:
                  location.pathname === item.path
                    ? theme.palette.primary.contrastText
                    : "inherit",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        );
      })}
    </div>
  );
};

export default SideBar;
