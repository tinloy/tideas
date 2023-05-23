import Layout from "../components/layout";
import Narbar from "../components/navbar";
import { Container, useStepContext } from "@mui/material";
import Image from "next/image";
import Before from "../assets/images/beforeAfter/set1Before.jpg";
import After from "../assets/images/beforeAfter/set1After.jpg";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [yPosition, setYPosition] = useState(0);
    const [beforeOpacity, setBeforeImgOpacity] = useState(0.5);
    const [afterOpcacity, setAfterImgOpcacity] = useState(0);

    const handleScroll = () => {
        const bgImgAf = document.getElementById("before");
        const imgHeight = bgImgAf.clientHeight;
        const position = window.pageYOffset;

        let opacity = 1;
        if (position < imgHeight) {
            opacity = (imgHeight - position) / imgHeight / 2;
            console.log("Opacity value: " + opacity);
            setBeforeImgOpacity(opacity);
            setAfterImgOpcacity(0.5 - opacity);
        }
        setYPosition(position);
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
                        <div style={{ opacity: beforeOpacity }} className='sologan'>
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

                    <Image
                        id='before'
                        className='bgImageBefore'
                        style={{ opacity: beforeOpacity }}
                        src={Before}
                        alt={"before"}
                    />
                    <Image id='after' className='bgImageAfter' style={{ opacity: afterOpcacity }} src={After} alt={"after"} />
                </div>
            </section>
            {/* <section id='ourWorks'>
                <div className='our-works'>
                    <Container>
                        <span className='wordmark'>Our works</span>
                        <Image src={After} alt='project-one' />
                    </Container>
                </div>
            </section>
            <Container>
                <span className='wordmark'>Visualize</span>
                <br />
                <span className='wordmark'>Your</span>
                <br />
                <span className='wordmark'>Imagination</span>
            </Container> */}
        </Layout>
    );
}
