import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Footer() {
    return (
        <Box component={"footer"}>
            <Container maxWidth={"xl"}>
                <Typography>© 2023 T-Studio. All rights reserved</Typography>
            </Container>
        </Box>
    );
}
