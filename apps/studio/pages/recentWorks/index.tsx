import Layout from "../../components/layout";
import Narbar from "../../components/navbar";
import { Backdrop, Box, Container, Typography } from "@mui/material";
import Footer from "../../components/footer";
import ArmChair01 from "../../assets/images/furnitures/ArmChair01.jpg";
import ArmChair02 from "../../assets/images/furnitures/ArmChair02.jpg";
import ArmChair04 from "../../assets/images/furnitures/ArmChair04.jpg";
import ArmChair05 from "../../assets/images/furnitures/ArmChair05.jpg";
import CoffeeTable01 from "../../assets/images/furnitures/CoffeeTable01.jpg";
import CoffeeTable02 from "../../assets/images/furnitures/CoffeeTable02.jpeg";
import CoffeeTable03 from "../../assets/images/furnitures/CoffeeTable03.jpg";
import CoffeeTable04 from "../../assets/images/furnitures/CoffeeTable04.jpg";
import CoffeeTable05 from "../../assets/images/furnitures/CoffeeTable05.jpeg";
import CoffeeTable06 from "../../assets/images/furnitures/CoffeeTable06.jpg";
import CoffeeTable07 from "../../assets/images/furnitures/CoffeeTable07.jpg";
import SofaDetail01 from "../../assets/images/furnitures/SofaDetail01.jpg";
import SofaDetail02 from "../../assets/images/furnitures/SofaDetail02.jpg";
import SofaDetail03 from "../../assets/images/furnitures/SofaDetail03.jpg";
import SofaDetail04 from "../../assets/images/furnitures/SofaDetail04.jpg";
import SofaDetail05 from "../../assets/images/furnitures/SofaDetail05.jpg";
import SofaDetail06 from "../../assets/images/furnitures/SofaDetail06.jpg";
import Contact from "../../components/contact";
import ImageThumbnail from "./imageThumbnail";
import { useState } from "react";
import Image from "next/image";

export default function RecentWorks() {
    const [backdropStatus, setBackdropStatus] = useState(false);
    const [imageSrc, setImageSrc] = useState<any>();

    const dismissBackdrop = () => {
        setBackdropStatus(false);
    };

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
            <Container className='image-gallery'>
                <Box component={"div"} className='image-row'>
                    <ImageThumbnail
                        thumbnailSrc={ArmChair01}
                        alt='Arm Chair'
                        openBackdrop={() => {
                            setBackdropStatus(true);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={ArmChair02}
                        alt='Arm Chair'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={ArmChair04}
                        alt='Arm Chair'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={ArmChair05}
                        alt='Arm Chair'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable07}
                        alt='Arm Chair'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={SofaDetail06}
                        alt='Sofa Detail'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                </Box>
                <Box component={"div"} className='image-row'>
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable03}
                        alt='Coffee Table'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable01}
                        alt='Coffee Table'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable02}
                        alt='Coffee Table'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable04}
                        alt='Coffee Table'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable05}
                        alt='Coffee Table'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={CoffeeTable06}
                        alt='Coffee Table'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                </Box>
                <Box component={"div"} className='image-row'>
                    <ImageThumbnail
                        thumbnailSrc={SofaDetail01}
                        alt='Sofa Detail'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={SofaDetail02}
                        alt='Sofa Detail'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={SofaDetail03}
                        alt='Sofa Detail'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={SofaDetail04}
                        alt='Sofa Detail'
                        openBackdrop={(src) => {
                            setBackdropStatus(true);
                            setImageSrc(src);
                        }}
                    />
                    <ImageThumbnail
                        thumbnailSrc={SofaDetail05}
                        alt='Sofa Detail'
                        openBackdrop={(src) => {
                            setImageSrc(src);
                            setBackdropStatus(true);
                        }}
                    />
                </Box>
            </Container>
            <Contact />
            <Footer />
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropStatus}
                onClick={dismissBackdrop}
            >
                <Image src={imageSrc} alt='Image' className='detail-image' />
            </Backdrop>
        </Layout>
    );
}
