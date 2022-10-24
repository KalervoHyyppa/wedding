import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import * as styled from "../css/basic.style"
import MainText from "../components/first_page/main_text";
import Images from "./main_background";
import BottomText from "../components/first_page/bottom_text";

const FirstPage = () => {
    return (
        <>
            <ParallaxLayer
                offset={0}
                speed={1}
            // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}
            >
                <styled.ImagesDiv>
                    <Images />

                </styled.ImagesDiv>
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
        </>
    )
}

export default FirstPage