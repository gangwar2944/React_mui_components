import { PaletteColor, PaletteColorOptions, ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module '@mui/material/styles' {
    interface Theme{
        status:{
            danger:string
        }
    }
    interface ThemeOptions{
        status:{
            danger:React.CSSProperties['color']
        }
    }
    interface Palette{
       neutral?:PaletteColor
    }
    interface Palette{
      graphColor?:PaletteColor
    }
    interface PaletteOptions{
        graphColor?:PalelletColorOptions;
    }
    interface PaletteOptions{
       neutral?:PaletteColorOptions
    }

    interface SimplePaletteColorOptions{
        darker?:string;
    }

    interface PaletteColor{
        darker?:string;
        red?:string;
        peela?:string;
        gulabi?:string;
    }
}