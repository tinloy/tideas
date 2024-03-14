import Layout from "../../components/layout";
import Narbar from "../../components/navbar";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import RealestateWebsite from "../../assets/images/webServices/webDesign1.png";
import RealestateWebsite2 from "../../assets/images/webServices/realestateWebsite.jpg";
import RealestateWebsite3 from "../../assets/images/webServices/ShowreelDesktop.jpg";
import axios from "axios";
import ImageHolder from "../../components/imageHolder";

export default function WebDesignAndDevelopment() {
    const testEndpoint = async () => {
        //
        const res = await axios.get("/api/sendMessage");
        console.log(res.data);
    };

    return (
        <Layout>
            <Narbar />
            {/* <div className='serviceHero'>
                <Box component={"div"} className='rawImage'></Box>
                <Box component={"div"} className='backdrop' />
                <Typography variant='h1' className='serviceTitle'>
                    Web Design<span style={{ fontWeight: 500 }}>&nbsp;& Development</span>
                </Typography>
            </div> */}
            <Container maxWidth={"xl"}>
                <Box component={"div"} sx={{ height: 50 }} />
                <Box component={"div"} sx={{ display: "flex" }}>
                    <Box>
                        <Typography variant='h1' sx={{ color: "#ffd000" }}>
                            <b>Designed</b>
                        </Typography>
                        <Typography variant='h1'>
                            with Precision<b style={{ color: "#ffd000" }}>,</b>
                        </Typography>
                        <Typography variant='h1' sx={{ color: "#ffd000" }}>
                            <b>Developed</b>
                        </Typography>
                        <Typography variant='h1'>
                            to Perform<b style={{ color: "#ffd000" }}>.</b>
                        </Typography>
                    </Box>
                    <ImageHolder />
                </Box>
                <Box component={"div"} sx={{ height: 50 }} />

                {/* <Box component={"div"} className='serviceImage'>
                    <Image src={RealestateWebsite3} alt='Interior Render' width={900} height={600} />
                </Box> */}
            </Container>
            <Box component={"div"} sx={{ backgroundColor: "black", paddingTop: 20, paddingBottom: 20 }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box sx={{ display: "flex" }}>
                            <ImageHolder />
                        </Box>
                        <Typography variant='h4' color={"white"} fontWeight={100}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Contact />
            <Footer />
        </Layout>
    );
}
