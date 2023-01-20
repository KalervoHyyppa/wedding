import React, { useRef, useEffect } from "react"
import type { HeadFC } from "gatsby"
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components'

import './index.css';
import FirstPage from "../components/first_page/first_page";
import MinimalistMtnOrange from "../svg/MinimalistMtnOrange";
import MinimalistMtnYellow from "../svg/MinimalistMtnYellow";
import MinimalistMtnBlue from "../svg/MinimalistMtnBlue";
import JoinUs from "../components/second_page/join_us";


const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    background: #e6e6e6;
    /* background: linear-gradient(#e66465, #9198e5); */
`

const OrangeBlock = styled.div`
    height: 200%;
    width: 100%;
    background: #ffab38;
`

const YellowBlock = styled.div`
    height: 200%;
    width: 100%;
    background: #f7c300;
`

const BlueBlock = styled.div`
    height: 200%;
    width: 100%;
    background: #b3dcd4;
`

const IndexPage = () => {

    const myRef = useRef<HTMLInputElement>(null);

    const handleScroll = () => {
        const position = window.pageYOffset

        console.log('QQQQ position', position);
        if (myRef.current) {
            console.log('QQQQ position 1', position);
            const rect = myRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
            } else {
            }
        }
    };
    useEffect(() => {
        console.log('QQQQ useffect 1');
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <MainDiv ref={myRef}>
            <Parallax
                pages={5}
                style={{ top: '0', left: '0' }}
                config={{
                    mass: .5,
                    friction: 20,
                    tension: 150,
                }}
            >

                <FirstPage />

                {/******************************** 
                 * 
                 * Waves
                 * 
                ********************************/}

                <ParallaxLayer

                    sticky={{ start: 1, end: 5 }}

                    style={{
                        display: 'flex',
                        zIndex: -1,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        color: 'black',
                    }}
                >
                    <JoinUs />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.3}
                    speed={0.05}
                    // sticky={{ start: 1 }}
                    style={{
                        // height: '100%',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <MinimalistMtnOrange
                        height='100vh'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.2}
                    speed={0.05}
                    style={{
                        zIndex: 1,

                    }}
                >
                    <OrangeBlock />
                </ParallaxLayer>

                <ParallaxLayer

                    sticky={{ start: 1.1, end: 2 }}
                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <MinimalistMtnYellow
                        height='100vh'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 3 }}
                >
                    <YellowBlock />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 0.9, end: 3 }}
                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <MinimalistMtnBlue
                        height='100vh'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 4 }}
                >
                    <BlueBlock />
                </ParallaxLayer>


            </Parallax>
        </MainDiv>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>KO Wedding</title>
