import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import MainText from "./main_text";
import Images from "../../pages/main_background";
import BottomText from "./bottom_text";
import styled from 'styled-components'
import Scroll from "./scroll";

const ImagesDiv = styled.div`
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100%;
    background-color: black;
`

const FadeInDiv = styled.div`
    opacity: 0;
    animation-name: fadein;
    animation-duration: 1.5s;
    animation-delay: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
`

const FirstPage = () => {
    return (
        <>
            <ParallaxLayer
                offset={0}
                speed={1}

            // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}
            >
                <ImagesDiv>
                    <Images />

                </ImagesDiv>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={0.7}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: "column",
                    marginTop: "5rem"
                }}
            >
                <MainText />

            </ParallaxLayer>

            <FadeInDiv>

                <ParallaxLayer
                    offset={0}
                    speed={0.7}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flexDirection: "column",
                    }}
                >
                    <BottomText />

                </ParallaxLayer>
            </FadeInDiv>

            <FadeInDiv>
                <ParallaxLayer
                    offset={0}
                    speed={.9}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flexDirection: "column",

                    }}
                >
                    <Scroll />

                </ParallaxLayer>
            </FadeInDiv>
        </>
    )
}

export default FirstPage