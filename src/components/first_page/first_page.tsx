import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import MainText from "./main_text";
import Images from "../../pages/main_background";
import BottomText from "./bottom_text";
import styled from 'styled-components'

const ImagesDiv = styled.div`
    position: absolute;
    z-index: -1;
    height: 100vh;
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