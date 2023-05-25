import Layout from "../components/layout";
import Narbar from "../components/navbar";
import { Container } from "@mui/material";
import Image from "next/image";
import Before from "../assets/images/beforeAfter/set1Before.jpg";
import After from "../assets/images/beforeAfter/set1After.jpg";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [rawOpacity, setBeforeImgOpacity] = useState(0.5);
    const [colorOpacity, setAfterImgOpcacity] = useState(0);

    const handleScroll = () => {
        const rawImg = document.getElementById("raw");
        const imgHeight = rawImg.clientHeight;
        const position = window.pageYOffset;

        const landingSection = document.getElementById("landingSection");

        let opacity = 0.5;
        if (position > 0 && position < landingSection.clientHeight / 2) {
            opacity = position / landingSection.clientHeight;
            opacity = 0.5 - opacity;
            // console.log("Opacity value: " + opacity);
            setBeforeImgOpacity(opacity);
        }

        let afterOpacit = 0;
        if (position > (landingSection.clientHeight - imgHeight) / 2 && position < landingSection.clientHeight) {
            afterOpacit = 0.5 - position / (landingSection.clientHeight - imgHeight);
            afterOpacit = Math.abs(afterOpacit);
            console.log("Opacity value:" + afterOpacit);
            setAfterImgOpcacity(afterOpacit);
        }
        console.log(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <Layout>
            <section id='landingSection'>
                <div className='heroImg'>
                    <Narbar />
                    <Container>
                        <div style={{ opacity: 1 }} className='sologan'>
                            <span className='wordmarkWhite'>Visualize</span>
                            <br />
                            <span className='wordmarkWhite'>Your</span>
                            <br />
                            <span className='wordmarkWhite'>Imagination</span>
                        </div>
                        {/* <div style={{ opacity: afterOpcacity }} className='sologan'>
                            <span className='wordmarkBlack'>Visualize</span>
                            <br />
                            <span className='wordmarkBlack'>Your</span>
                            <br />
                            <span className='wordmarkBlack'>Imagination</span>
                        </div> */}
                    </Container>
                    <Image id='raw' className='bgImageBefore' style={{ opacity: rawOpacity }} src={Before} alt={"raw"} />
                    <Image id='color' className='bgImageAfter' style={{ opacity: colorOpacity }} src={After} alt={"color"} />
                </div>
            </section>
        </Layout>
    );
}
