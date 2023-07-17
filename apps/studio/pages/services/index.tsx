import Layout from "../../components/layout";
import Narbar from "../../components/navbar";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/footer";
import PropertyRender from "../../assets/images/propertyRender1.jpg";
import PropertyRender2 from "../../assets/images/propertyRender2.jpg";
import InteriorRender from "../../assets/images/interiorRender1.jpg";
import FrunitureRender from "../../assets/images/FurnitureRender2.jpg";

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
            <Container maxWidth={false}>
                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={PropertyRender} alt='Property Render' width={900} height={600} />
                    </Box>
                    <Box component={"div"} className='serviceDescription'>
                        <Box sx={{ m: 8 }}>
                            <Typography variant='h3' className='heading'>
                                <span style={{ fontWeight: 600 }}>Architectural</span>&nbsp;Visualisation
                            </Typography>
                            <Typography sx={{ fontSize: "1.5rem" }}>
                                Showcase your architectural design with photorealistic CGIs. From architects to developers and
                                from large-scale schemes to one-off bespoke builds, we assist our clients in adding marketing
                                value, selling off-plan and creating impressive presentations with our stunning CGIs.
                            </Typography>
                            <Button variant='contained' sx={{ mt: 8 }}>
                                See More
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceDescription'>
                        <Box sx={{ m: 8 }}>
                            <Typography variant='h3' className='heading'>
                                <span style={{ fontWeight: 600 }}>Interior</span>&nbsp;Visualisation
                            </Typography>
                            <Typography sx={{ fontSize: "1.5rem" }}>
                                Let your audience visualise their dream spaces. We work with house builders, commercial
                                developers and high-end interior designers to create stunning interior design renders, fit-out
                                animations and marketing CGIs. These visualisations predominantly assist in marketing, off-plan
                                sales and the development of interior design schemes.
                            </Typography>
                            <Button variant='contained' sx={{ mt: 8 }}>
                                See More
                            </Button>
                        </Box>
                    </Box>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={InteriorRender} alt='Interior Render' width={900} height={600} />
                    </Box>
                </Box>

                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceImage'>
                        <video style={{ width: "-webkit-fill-available" }} autoPlay playsInline muted loop>
                            <source src='propertyAnimation.mp4' type='video/mp4'></source>
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                    <Box component={"div"} className='serviceDescription'>
                        <Box sx={{ m: 8 }}>
                            <Typography variant='h3' className='heading'>
                                <span style={{ fontWeight: 600 }}>Architectural</span>&nbsp;Animation
                            </Typography>
                            <Typography sx={{ fontSize: "1.5rem" }}>
                                In a world where video is quickly becoming an expectation, make your design stand out amongst
                                the rest with a cinematic architectural animation that grabs the audience&apos;s attention. We
                                combine animated 3D renders with live-action footage and captivating motion graphics to produce
                                informative storytelling experiences.
                            </Typography>
                            <Button variant='contained' sx={{ mt: 8 }}>
                                See More
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box component={"div"} className='serviceItem'>
                    <Box component={"div"} className='serviceDescription'>
                        <Box sx={{ m: 8 }}>
                            <Typography variant='h3' className='heading'>
                                <span style={{ fontWeight: 600 }}>Furniture</span>&nbsp;Visualisation
                            </Typography>
                            <Typography sx={{ fontSize: "1.5rem" }}>
                                Bring your products to life and make them completely customisable to align with your brand
                                identity and streamline your marketing. Say goodbye to photoshoots and use 3D furniture
                                visualisation to take your product launches and e-commerce capabilities to the next level. With
                                CGI rendering, the possibilities are quite literally endless. Virtually anything is possible.
                            </Typography>
                            <Button variant='contained' sx={{ mt: 8 }}>
                                See More
                            </Button>
                        </Box>
                    </Box>
                    <Box component={"div"} className='serviceImage'>
                        <Image src={FrunitureRender} alt='Fruniture Render' width={900} height={600} />
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Layout>
    );
}
