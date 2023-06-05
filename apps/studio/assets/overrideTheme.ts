import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffd000",
        },
    },
    components: {
        // MuiContainer: {

        // }
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: "inherit",
                    boxShadow: "none",
                    backgroundColor: "#FFFFFF25",
                },
            },
        },
    },
});
