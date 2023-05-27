import Layout from "../components/layout";
import Narbar from "../components/navbar";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [rawOpacity, setBeforeImgOpacity] = useState(0.5);
    const [colorOpacity, setAfterImgOpcacity] = useState(0);

    const calculateOpacityValues = () => {
        const rawImg = document.getElementById("raw");
        const imgHeight = rawImg.clientHeight;
        const yPosition = window.pageYOffset;
        const landingSection = document.getElementById("landingSection");

        let rawImgOpacity = 0.5;
        if (yPosition > 0 && yPosition < landingSection.clientHeight / 2) {
            rawImgOpacity = yPosition / (landingSection.clientHeight - imgHeight);
            rawImgOpacity = 0.5 - rawImgOpacity;
            setBeforeImgOpacity(rawImgOpacity);
        }

        let renderedImgOpcacity = 0;
        if (yPosition > (landingSection.clientHeight - imgHeight) / 2 && yPosition < landingSection.clientHeight) {
            renderedImgOpcacity = 0.5 - yPosition / (landingSection.clientHeight - imgHeight);
            renderedImgOpcacity = Math.abs(renderedImgOpcacity);
            setAfterImgOpcacity(renderedImgOpcacity);
        }
    };

    useEffect(() => {
        calculateOpacityValues();
        window.addEventListener("scroll", calculateOpacityValues, { passive: true });
        return () => {
            window.removeEventListener("scroll", calculateOpacityValues);
        };
    });

    return (
        <Layout>
            <section id='landingSection'>
                <div className='heroImg'>
                    <Narbar />
                    <Container>
                        <div style={{ opacity: rawOpacity * 2 }} className='sologan'>
                            <span className='wordmarkWhite'>Visualize</span>
                            <br />
                            <span className='wordmarkWhite'>Your</span>
                            <br />
                            <span className='wordmarkWhite'>Imagination</span>
                        </div>
                        <div style={{ opacity: colorOpacity * 2 }} className='sologan'>
                            <span className='wordmarkBlack'>Visualize</span>
                            <br />
                            <span className='wordmarkBlack'>Your</span>
                            <br />
                            <span className='wordmarkBlack'>Imagination</span>
                        </div>
                    </Container>
                    <Box id='raw' className='rawImage' style={{ opacity: rawOpacity }} />
                    <Box className='renderedImage' style={{ opacity: colorOpacity }} />
                </div>
            </section>
        </Layout>
    );
}
