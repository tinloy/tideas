import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: [
            "Taviraj",
            "serif",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    palette: {
        primary: {
            main: "#ffd000",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: "inherit",
                    boxShadow: "none",
                    backgroundColor: "#FFFFFF25",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                text: {
                    color: "black",
                    marginLeft: 30,
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: "#00000099",
                },
            },
        },
    },
});
