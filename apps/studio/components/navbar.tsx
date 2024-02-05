import Logo from "../assets/images/twInitials.png";
import Image from "next/image";
import { Container, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";

export default function Navbar() {
    const [bgColor, setBgColor] = useState("#ffffff50");
    const [textColor, setTextColor] = useState("#FFFFFF");

    return (
        <AppBar component='nav' sx={{ display: "flex", background: bgColor }}>
            <Toolbar>
                <Container className='navbar' sx={{ display: "flex", pt: "1rem", pb: "1rem" }} maxWidth='xl'>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        <Link href={"/"}>
                            <Image src={Logo} className='logo' alt='Logo' />
                        </Link>
                    </Box>
                    <Box component='div' className='navLink' sx={{ display: "flex", justifyContent: "center" }}>
                        <Link href='/services' underline='hover'>
                            Services
                        </Link>
                        <Link href='/recentWorks' underline='hover'>
                            Recent Works
                        </Link>
                        <Link href='/aboutUs' underline='hover'>
                            About Us
                        </Link>
                        <Link href='/joinUs' underline='hover'>
                            Join Us
                        </Link>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
