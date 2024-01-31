import { Button, Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Contact() {
    return (
        <Box component={"div"} sx={{ bgcolor: "" }}>
            <Divider sx={{ mt: 8, mb: 8 }} />
            <Container maxWidth={"xl"} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h1'>Let&apos;s talk</Typography>
                <Button variant='contained' sx={{ mt: 4 }}>
                    Drop us a message
                </Button>
            </Container>
        </Box>
    );
}
