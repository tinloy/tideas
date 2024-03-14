import { Box, Typography } from "@mui/material";

export default function ImageHolder() {
    return (
        <Box
            component={"div"}
            sx={{
                display: "flex",
                flexGrow: 1,
                backgroundColor: "grey",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant='h1' fontWeight={100} color={"white"}>
                Image Holder
            </Typography>
        </Box>
    );
}
