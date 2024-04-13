import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";

import { Plus_Jakarta_Sans } from "next/font/google";
export const plus = Plus_Jakarta_Sans({             // Font 1
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

import { Lobster } from "next/font/google";      // Font 2
export const plusTwo = Lobster({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Lobster", "Arial", "sans-serif"],
});


const baselightTheme = createTheme({
    direction: "ltr",
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#FBB83B", // Màu cam cho toàn app #FBB83B:  | màu xanh default: 5D87FF
            light: "#ffc251",// Màu cam cho toàn app #ffc251:  | màu xanh default: ECF2FF
            dark: "#ffac14", // ffac14 // Màu cam cho toàn app #ffac14:  | màu xanh default: 4570EA
        },
        secondary: {
            main: "#49BEFF",
            light: "#E8F7FF",
            dark: "#23afdb",
        },
        success: {
            main: "#CAEEC0",
            light: "#E6FFFA",
            dark: "#02b3a9",
            contrastText: "#ffffff",
        },
        info: {
            main: "#539BFF",
            light: "#EBF3FE",
            dark: "#1682d4",
            contrastText: "#ffffff",
        },
        error: {
            main: "#FA896B",
            light: "#FFD1C1",
            dark: "#f3704d",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#FFFF66",
            light: "#FBB83B",
            dark: "#ae8e59",
            contrastText: "#ffffff",
        },
        logo: {
            onTop: "#fff",
            nonTop: "#FBB83B",
        },
        background: {
            default: '#F1F2F4'
        },
        background2: {
            default: 'linear-gradient(to bottom left, #FED9B7, #F07167)'
        },
        header: {
            onTop: "#fff",
        },
        footer: {
            background: "#2D333F",
            color: '#FFFFFF',
        },

        grey: {
            100: "#F2F6FA",
            200: "#EAEFF4",
            300: "#DFE5EF",
            400: "#7C8FAC",
            500: "#5A6A85",
            600: "#2A3547",
        },
        text: {
            primary: "#2A3547",
            secondary: "#5A6A85",
        },
        action: {
            disabledBackground: "rgba(73,82,88,0.12)",
            hoverOpacity: 0.02,
            hover: "#f6f9fc",  // Vang fcb32a  | Xanh: f6f9fc
        },
        divider: "#e5eaef",
    },
    typography: {
        fontFamily: plus.style.fontFamily,
        h1: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontFamily: plus.style.fontFamily,
            fontFamilySecondary: plusTwo.style.fontFamily,
        },
        h1Secondary: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontFamily: plus.style.fontFamily,
        },
        h2Secondary: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        h3: {
            fontWeight: 900,
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontFamily: plus.style.fontFamily,
        },
        h3Secondary: {
            fontWeight: 900,
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.3125rem",
            lineHeight: "1.6rem",
        },
        h4Secondary: {
            fontWeight: 600,
            fontSize: "1.3125rem",
            lineHeight: "1.6rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.6rem",
        },
        h5Secondary: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.6rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        h6: {
            fontWeight: 500,
            fontSize: "0.9rem",
            lineHeight: "1.2rem",
        },
        h6Secondary: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.2rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        button: {
            textTransform: "capitalize",
            fontWeight: 400,
        },
        buttonSecondary: {
            fontFamily: plusTwo.style.fontFamily,
            textTransform: "capitalize",
            fontWeight: 400,
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334rem",
        },
        body1Secondary: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        body2: {
            fontSize: "0.75rem",
            letterSpacing: "0rem",
            fontWeight: 400,
            lineHeight: "1rem",
        },
        body2Secondary: {
            fontSize: "0.75rem",
            letterSpacing: "0rem",
            fontWeight: 400,
            lineHeight: "1rem",
            fontFamily: plusTwo.style.fontFamily,
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
        subtitle1Secondary: {
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: plusTwo.style.fontFamily,
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
        subtitle2Secondary: {
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: plusTwo.style.fontFamily,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 10,
                        height: 10,
                        backgroundColor: "rgba(0, 0, 0, 0.01)",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 2,
                        backgroundColor: "#CCCCCC",
                        border: "3px solid #CCCCCC",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#CCCCCC",
                        border: "3px solid #CCCCCC",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#CCCCCC",

                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#CCCCCC",
                        border: "3px solid #CCCCCC",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#CCCCCC",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "7px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.MuiButton-contained': {
                        color: '#fff',
                    },
                    '&:hover': {
                        // color: '#fff',
                        // backgroundColor: '#fcb635',
                    },
                    '&.MuiButton-contained:active': {
                        color: '#fff',
                        backgroundColor: '#fcb635',
                    },
                    '&.MuiButton-contained:hover, &.MuiButton-contained:active': {
                        color: '#fff',
                        backgroundColor: '#fcb635',
                    },
                },
            },
        },
    },
});

export { baselightTheme };