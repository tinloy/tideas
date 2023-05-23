import Logo from "../assets/images/twInitials.png";
import Image from "next/image";
import { Container } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const drawerWidth = 240;

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ my: 2 }}>
                <Image src={Logo} className='logo' alt='Logo' />
            </Box>
            <Divider />
            {/* <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component='nav'>
                <Toolbar>
                    <Container className='navbar'>
                        {/* <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton> */}
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
            {/* <Box component='nav'>
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box> */}
        </Box>
    );
}
