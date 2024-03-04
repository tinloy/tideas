import Layout from "../../components/layout";
import Narbar from "../../components/navbar";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import RealestateWebsite from "../../assets/images/webServices/webDesign1.png";
import RealestateWebsite2 from "../../assets/images/webServices/realestateWebsite.jpg";
import RealestateWebsite3 from "../../assets/images/webServices/ShowreelDesktop.jpg";
import axios from "axios";

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
            <Box component={"div"} className='serviceItem'>
                <Box component={"div"} className='serviceDescription'>
                    <Box sx={{ mr: 8, ml: 8, paddingTop: 8 }}>
                        {/* <Typography variant='h1' gutterBottom>
                            Designed with Precision
                        </Typography>
                        <Typography variant='h1'>Developed to Perform</Typography> */}
                        <Button onClick={testEndpoint}>Test</Button>
                    </Box>
                </Box>
                <Box component={"div"} className='serviceImage'>
                    <Image src={RealestateWebsite3} alt='Interior Render' width={900} height={600} />
                </Box>
            </Box>
            <Contact />
            <Footer />
        </Layout>
    );
}
