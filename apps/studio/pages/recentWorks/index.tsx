import Layout from "../../components/layout";
import Narbar from "../../components/navbar";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/footer";
import Contact from "../../components/contact";

export default function RecentWorks() {
    return (
        <Layout>
            <Narbar />
            <div className='serviceHero'>
                <Box component={"div"} className='rawImage'></Box>
                <Box component={"div"} className='backdrop' />
                <Typography variant='h1' className='serviceTitle'>
                    Recent<span style={{ fontWeight: 500 }}>&nbsp;Works</span>
                </Typography>
            </div>
            <Container>
                <Typography variant='h1' fontWeight={700} color={"orange"} sx={{ mt: 6 }}>
                    Recent works on this page
                </Typography>
            </Container>
            <Contact />
            <Footer />
        </Layout>
    );
}
