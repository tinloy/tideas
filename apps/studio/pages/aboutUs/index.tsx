import Layout from "../../components/layout";
import Narbar from "../../components/navbar";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/footer";
import Contact from "../../components/contact";

export default function AboutUs() {
    return (
        <Layout>
            <Narbar />
            <div className='serviceHero'>
                <Box component={"div"} className='rawImage'></Box>
                <Box component={"div"} className='backdrop' />
                <Typography variant='h1' className='serviceTitle'>
                    About<span style={{ fontWeight: 500 }}>&nbsp;Us</span>
                </Typography>
            </div>
            <Container>
                <Typography variant='h1' fontWeight={700} color={"orange"} sx={{ mt: 6 }}>
                    Something about us here
                </Typography>
            </Container>
            <Contact />
            <Footer />
        </Layout>
    );
}
