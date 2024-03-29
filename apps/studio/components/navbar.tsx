import Logo from "../assets/images/twInitials.png";
import Image from "next/image";
import { Button, Container, Divider, Link, Popover } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Fragment, useState } from "react";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const id = open ? "simple-popover" : undefined;

    return (
        <AppBar component='nav' position='fixed' sx={{ display: "flex", background: "#ffffff50" }}>
            <Toolbar>
                <Container className='navbar' sx={{ display: "flex", pt: "1rem", pb: "1rem" }} maxWidth='xl'>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        <Link href={"/"}>
                            <Image src={Logo} className='logo' alt='Logo' />
                        </Link>
                    </Box>
                    <Box component='div' className='navLink' sx={{ display: "flex", justifyContent: "center" }}>
                        <Fragment>
                            <Button aria-describedby={id} variant='text' onClick={handleClick}>
                                Services
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={() => setAnchorEl(null)}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                            >
                                <Box sx={{ m: 3 }} component={"div"} className='serviceDropdown'>
                                    <Link href='/services/render' underline='hover'>
                                        3D Visualisation & Render
                                    </Link>
                                    <Divider sx={{ mt: 2, mb: 2 }} />
                                    <Link href='/services/web' underline='hover'>
                                        Web Design & Development
                                    </Link>
                                </Box>
                            </Popover>
                        </Fragment>
                        <Button
                            variant='text'
                            onClick={() => {
                                location.href = "/recentWorks";
                            }}
                        >
                            Recent Works
                        </Button>
                        <Button
                            variant='text'
                            onClick={() => {
                                location.href = "/aboutUs";
                            }}
                        >
                            About Us
                        </Button>
                        <Button
                            variant='text'
                            onClick={() => {
                                location.href = "/joinUs";
                            }}
                        >
                            Join Us
                        </Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
