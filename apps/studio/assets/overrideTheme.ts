import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
