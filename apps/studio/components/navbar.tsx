import Logo from "../assets/images/twInitials.png";
import Image from "next/image";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export default function Navbar() {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component='nav'>
                <Toolbar>
                    <Container className='navbar'>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                            <Image src={Logo} className='logo' alt='Logo' />
                        </Box>
                        <Box component='div'>
                            <Link href='#Services'>Services</Link>
                            <Link href='#RecentWork'>Recent Work</Link>
                            <Link href='#AboutUs'>About Us</Link>
                            <Link href='#Career'>Career</Link>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
