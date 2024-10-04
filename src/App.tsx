import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import MuiAccordian from "./components/MuiAccordian";
import { routes } from "./Utils/constants";
import MuiAlert from "./components/MuiAlert";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiButton from "./components/MuiButton";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiChip from "./components/MuiChip";
import MuiDialog from "./components/MuiDialog";
import MuiLayout from "./components/MuiLayout";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiProgress from "./components/MuiProgress";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiResponsive from "./components/MuiResponsive";
import MuiSelect from "./components/MuiSelect";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiSpeedDail from "./components/MuiSpeedDail";
import MuiSwitch from "./components/MuiSwitch";
import MuiTab from "./components/MuiTab";
import MuiTextField from "./components/MuiTextField";
import MuiToolTip from "./components/MuiToolTip";
import MuiTypography from "./components/MuiTypography";
import DashboardContainer from "./pages/DashboardContainer";
import MuiDataGridPage from "./components/dataDridPage/index";
import { theme } from "./services/theme";
import DatePickerComponent from "./components/DatePicker";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DashboardContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={routes.accordian} element={<MuiAccordian />} />
            <Route path={routes.alert} element={<MuiAlert />} />
            <Route path={routes.autocomplete} element={<MuiAutocomplete />} />
            <Route path={routes.avatar} element={<MuiAvatar />} />
            <Route path={routes.badge} element={<MuiBadge />} />
            <Route path={routes.buttonNavigation} element={<MuiBottomNavigation />} />
            <Route path={routes.breadCrumbs} element={<MuiBreadcrumbs />} />
            <Route path={routes.buttons} element={<MuiButton />} />
            <Route path={routes.cards} element={<MuiCard />} />
            <Route path={routes.checkbox} element={<MuiCheckbox />} />
            <Route path={routes.chip} element={<MuiChip />} />
            <Route path={routes.dailog} element={<MuiDialog />} />
            <Route path={routes.layout} element={<MuiLayout />} />
            <Route path={routes.link} element={<MuiLink />} />
            <Route path={routes.list} element={<MuiList />} />
            <Route path={routes.progress} element={<MuiProgress />} />
            <Route path={routes.radioButton} element={<MuiRadioButton />} />
            <Route path={routes.rating} element={<MuiRating />} />
            <Route path={routes.responsive} element={<MuiResponsive />} />
            <Route path={routes.select} element={<MuiSelect />} />
            <Route path={routes.skeleton} element={<MuiSkeleton />} />
            <Route path={routes.speedDetail} element={<MuiSpeedDail />} />
            <Route path={routes.switch} element={<MuiSwitch />} />
            <Route path={routes.tabs} element={<MuiTab />} />
            <Route path={routes.textFields} element={<MuiTextField />} />
            <Route path={routes.tooltip} element={<MuiToolTip />} />
            <Route path={routes.typography} element={<MuiTypography />} />
            <Route path={routes.dataGrid} element={<MuiDataGridPage />} />
            <Route path={routes.datePickerComponent} element={<DatePickerComponent />} />
          </Routes>
        </DashboardContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
