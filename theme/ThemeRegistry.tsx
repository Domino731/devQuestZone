"use client";

import {createTheme, CssBaseline} from "@mui/material";
import {ThemeOptions} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {ReactNode} from "react";
import {EmotionCache} from "@emotion/cache";
import {NextAppDirEmotionCacheProvider} from "./EmotionCache";
import {Inter} from "next/font/google";

const inter = Inter({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal"],
    subsets: ["latin"]
})

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: inter.style.fontFamily
    },
    // BREAKPOINTS
    breakpoints: {
        values: {
            xs: 0,      // Extra small devices (portrait phones)
            sm: 600,    // Small devices (landscape phones)
            md: 960,    // Medium devices (tablets)
            lg: 1280,   // Large devices (desktops)
            xl: 1920,   // Extra large devices (large desktops)
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: 200,
                },
                maxWidthMd: {
                    maxWidth: 320,
                },
                maxWidthLg: {
                    maxWidth: 500,
                },
            },
        },
    },
}

const theme = createTheme(themeOptions);

export default function ThemeRegistry({children}: { children: ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{key: "mui"}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}