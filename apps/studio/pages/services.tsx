import Layout from "../components/layout";
import Narbar from "../components/navbar";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import FurnitureService from "../assets/images/3DFurniture.jpg";
import Footer from "../components/footer";

export default function Services() {
    return (
        <Layout>
            <Narbar />
            <div className='serviceHero'>
                <Box component={"div"} className='rawImage'></Box>
                <Box component={"div"} className='backdrop' />
                <Typography variant='h1' className='serviceTitle'>
                    Our<span style={{ fontWeight: 500 }}>&nbsp;Services</span>
                </Typography>
            </div>
            <Container maxWidth='xl'>
                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={FurnitureService} alt='service1' width={900} height={600} />
                    </Box>
                    <Box component={"div"} className='serviceDescription'>
                        <Typography variant='h3' className='heading'>
                            <span style={{ fontWeight: 600 }}>Furniture</span>&nbsp;Visualisation
                        </Typography>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            Bring your products to life and make them completely customisable to align with your brand identity
                            and streamline your marketing. Say goodbye to photoshoots and use 3D furniture visualisation to take
                            your product launches and e-commerce capabilities to the next level. With CGI rendering, the
                            possibilities are quite literally endless. Virtually anything is possible.
                        </Typography>
                    </Box>
                </Box>

                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceDescription'>
                        <Typography variant='h3' className='heading'>
                            <span style={{ fontWeight: 600 }}>Interior</span>&nbsp;Visualisation
                        </Typography>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            Showcase your products, designs, and ideas in beautiful, photorealistic 3D interior settings.
                            Interior CGIs are an incredible way to achieve photorealistic imagery that can be constantly updated
                            to fit with new launches or a rebrand of your business, all at the fraction of the cost of
                            traditional photoshoots.
                        </Typography>
                    </Box>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={FurnitureService} alt='service1' width={900} height={600} />
                    </Box>
                </Box>

                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={FurnitureService} alt='service1' width={900} height={600} />
                    </Box>
                    <Box component={"div"} className='serviceDescription'>
                        <Typography variant='h3' className='heading'>
                            <span style={{ fontWeight: 600 }}>Residential</span>&nbsp;Visualisation
                        </Typography>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            Bring your products to life and make them completely customisable to align with your brand identity
                            and streamline your marketing. Say goodbye to photoshoots and use 3D furniture visualisation to take
                            your product launches and e-commerce capabilities to the next level. With CGI rendering, the
                            possibilities are quite literally endless. Virtually anything is possible.
                        </Typography>
                    </Box>
                </Box>

                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceDescription'>
                        <Typography variant='h3' className='heading'>
                            <span style={{ fontWeight: 600 }}>Residential</span>&nbsp;Visualisation
                        </Typography>
                        <Typography sx={{ fontSize: "1.5rem" }}>
                            Bring your products to life and make them completely customisable to align with your brand identity
                            and streamline your marketing. Say goodbye to photoshoots and use 3D furniture visualisation to take
                            your product launches and e-commerce capabilities to the next level. With CGI rendering, the
                            possibilities are quite literally endless. Virtually anything is possible.
                        </Typography>
                    </Box>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={FurnitureService} alt='service1' width={900} height={600} />
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Layout>
    );
}
