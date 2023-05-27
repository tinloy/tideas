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
                    <Container className='navbar' sx={{ display: "flex", pt: "1rem", pb: "1rem" }}>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                            <Image src={Logo} className='logo' alt='Logo' />
                        </Box>
                        <Box component='div' className='navLink' sx={{ display: "flex", justifyContent: "center" }}>
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
