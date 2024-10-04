import * as React from "react";
import type { AnchorHTMLAttributes } from "react";
import { Box, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DateProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  value?: moment.Moment | null;
  onChange?: (newValue: any) => void;
  label?: string;
  disabled?: boolean;
  minDate?: moment.Moment;
  ref?: React.Ref<HTMLInputElement>;
}

export function DatePickerComponent({
  value,
  onChange,
  label,
  disabled,
  minDate,
  ref,
}: DateProps): JSX.Element {
  const theme = useTheme();
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          disabled={disabled}
          inputRef={ref}
          label={label}
          minDate={minDate}
          onChange={onChange}
          slotProps={{
            textField: {
              variant: "standard",
              size: "medium",
            },
          }}
          sx={{
            width: "100%",
            "& .MuiInputLabel-root": {
              fontSize: "13px !important", // Change label size
              color:
                theme.palette.mode === "dark"
                  ? "rgba(206, 217, 226, 0.42) !important"
                  : `${theme.palette.text.primary} !important`,
            },
            "& .MuiInputBase-input": {
              fontSize: "13px", // Change input text size
            },
            "& .MuiInput-underline:before": {
              borderBottom: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(206, 217, 226, 0.42)"
                  : theme.palette.text.primary
              }`,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: `${theme.palette.action.focus} !important`,
            },
            "& .MuiInputLabel-formControl.Mui-focused": {
              color: `${theme.palette.action.focus} !important`,
            },
            "& .MuiInputLabel-formControl.MuiInputLabel-shrink": {
              color: "hsla(207, 25.64102564102562%, 84.70588235294117%, 0.54)",
              transform: "translate(0, -1.5px) scale(0.95)",
            },
            "& .MuiIconButton-root .MuiSvgIcon-root": {
              color:
                theme.palette.mode === "dark"
                  ? "rgba(206, 217, 226, 0.42)"
                  : theme.palette.text.primary,
              minWidth: "24px",
              fontSize: "1.2rem",
            },
          }}
          value={value}
        />
      </LocalizationProvider>
    </Box>
  );
}
