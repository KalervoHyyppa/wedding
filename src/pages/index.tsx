import React, { useRef, useEffect, useState } from "react"
import type { HeadFC } from "gatsby"
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components'
import { FrontBushes } from "../svg/new_lake/front_bushes"
import { TreesAndStones } from "../svg/new_lake/trees_and_stones"
import { MiddleIslands } from "../svg/new_lake/middle_islands"
import { Sun } from "../svg/new_lake/sun"
import { Mountain6 } from "../svg/new_lake/mountain_6"
import { Mountain5 } from "../svg/new_lake/mountain_5"
import { Cloud1 } from "../svg/new_lake/cloud_1"
import { Mountain4 } from "../svg/new_lake/mountain_4"
import { Mountain3 } from "../svg/new_lake/mountain_3"
import { Mountain2 } from "../svg/new_lake/mountain_2"
import { Mountain1 } from "../svg/new_lake/mountain_1"
import FirstPage from "../components/first_page/first_page"
import MinimalistMtnOrange from "../svg/MinimalistMtnOrange"
import MinimalistMtnYellow from "../svg/MinimalistMtnYellow";
import MinimalistMtnBlue from "../svg/MinimalistMtnBlue";
import './index.css';
import NavBar from "../components/nav_bar/NavBar"
import KNavBar from "../components/nav_bar/NavBar"
import Schedule from "../components/second_page/schedule"
import Lodging from "../components/third_section/lodging/lodging"
import LodgingHeader from "../components/third_section/lodging/lodging_header"
import ThingsToDo from "../components/third_section/things_to_do/things_to_do"
import Registry from "../components/third_section/registry/registry"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    /* align-items: center; */
    /* background: #e6e6e6; */
    background: linear-gradient(#e66465, #9198e5);
`

const OffWhiteBlock = styled.div`
    height: 200%;
    width: 100%;
    background: #e6e6e6;
`

const OrangeBlock = styled.div`
    height: 220%;
    width: 100%;
    background: #ffab38;
`

const YellowBlock = styled.div`
    height: 200%;
    width: 100%;
    background: #f7c300;
`

const BlueBlock = styled.div`
    height: 100%;
    width: 100%;
    background: #b3dcd4;
`

const IndexPage = () => {

    const width = '100%'
    const minWidth = '37rem'
    const vb1 = 3000
    const vb2 = 2860
    const kStart = .8
    const kEnd = 3.5
    const k3rdSectionStart = kStart + 1.75
    const kSpeed = 0.9
    const kPages = 3.5
    const kStartOpacity = .2


    const kZBack = -1
    // const kZMiddle = 0
    const kZFront = 100000000000000000

    const [currentPercentScrolled, setCurrentPercentScrolled] = useState(0);



    function getOpacity(start: number, currentScrollPosition: number) {

        const end = start + .01
        if (currentScrollPosition < start) return 0
        else if (currentScrollPosition > end) return 1
        else {
            const diffFromStart = currentScrollPosition - start;
            const denominator = end - start;

            return diffFromStart / denominator;
        }
    }

    function getOpacityEnd(end: number, currentScrollPosition: number) {

        const start = end - .01
        if (currentScrollPosition < start) return 1
        else if (currentScrollPosition > end) return 0
        else {

            const diffFromEnd = end - currentScrollPosition;
            const denominator = end - start;

            return diffFromEnd / denominator;

        }
    }

    const myRef = useRef<any>(null);
    const parallaxRef = useRef<any>(null);

    const handleScroll2 = (e: any) => {
        const height = myRef.current.clientHeight
        const scrollablePages = kPages - 1 // because you can't scroll past the last page 
        const scrollHeight = height * scrollablePages

        const scrollTop = e.target.scrollTop
        const percentScrolled = scrollTop / scrollHeight
        setCurrentPercentScrolled(percentScrolled / 2)
        // console.log('QQQQ percentScrolled', percentScrolled / 2);
        // const currentPage = Math.floor(percentScrolled * scrollablePages)
        // const currentPageScrollTop = scrollTop - (height * (currentPage))
        // const currentPagePercent = currentPageScrollTop / height

        // // because the ParallaxLayer below has an `offset` of `0`
        // if (currentPage === 0) {
        // }
    }


    useEffect(() => {
        const container = document.querySelector('.my-class-name')
        container!.addEventListener('scroll', handleScroll2, true)
        return () => {
            container!.removeEventListener('scroll', handleScroll2)
        }
    }, [])

    const scrollToSchedule = () => {
        parallaxRef.current.scrollTo(1.4);
    }

    const scrollToLodging = () => {
        parallaxRef.current.scrollTo(3.65);
    }

    const scrollToThings = () => {
        parallaxRef.current.scrollTo(5.6);
    }

    const scrollToRegistry = () => {
        parallaxRef.current.scrollTo(7.3);
    }


    return (
        <MainDiv ref={myRef} className='my-class-name'>
            <KNavBar
                scheduleLink={() => scrollToSchedule()}
                lodgingLink={() => scrollToLodging()}
                thingsLink={() => scrollToThings()}
                registryLink={() => scrollToRegistry()}
            />

            <Parallax
                pages={kPages}
                ref={parallaxRef}
                style={{
                    top: '0', left: '0',
                    background: "linear-gradient(#e66465, #9198e5)",
                }}
                config={{
                    mass: .5,
                    friction: 20,
                    tension: 150,
                }}
            >

                <FirstPage />


                <ParallaxLayer
                    id="sun"
                    offset={kStart + .8}
                    speed={kSpeed}
                    style={{
                        zIndex: kZBack,
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Sun
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>




                <ParallaxLayer

                    id="Mountain6"

                    sticky={{ start: kStart + .45, end: kEnd }}

                    style={{
                        // zIndex: kZMiddle,
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain6
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <Mountain5
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <Mountain4
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <Mountain3
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <Mountain2
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <Mountain1
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <MiddleIslands
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <TreesAndStones
                        width={width}
                        style={{ minWidth: minWidth }}

                    />

                    <FrontBushes
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .5, end: kEnd + .1 }}
                    id="Schedule"
                    style={{
                        // zIndex: kZMiddle,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ opacity: getOpacity(kStartOpacity, currentPercentScrolled) }}>
                        <Schedule />
                    </div>

                </ParallaxLayer>


                {/******************************** 
                 * 
                 * Waves
                 * 
                ********************************/}
                {/* 
                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart }}
                >
                    <OffWhiteBlock />
                </ParallaxLayer> */}



                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + .35, end: k3rdSectionStart + .35 }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        pointerEvents: 'none',

                    }}
                >
                    <MinimalistMtnOrange
                        height='100vh'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + 1.2 }}

                    style={{

                    }}
                >
                    <OrangeBlock />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + 1.95, end: k3rdSectionStart + 10 }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'center',
                    }}
                >
                    <Lodging />
                </ParallaxLayer>


                <ParallaxLayer

                    sticky={{ start: k3rdSectionStart + .25, end: k3rdSectionStart + 2.05 }}
                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <MinimalistMtnYellow
                        height='100vh'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + 3 }}
                >
                    <YellowBlock />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + 3.6, end: k3rdSectionStart + 10 }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'center',
                    }}
                >
                    <ThingsToDo />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + .15, end: k3rdSectionStart + 3.75 }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <MinimalistMtnBlue
                        height='100vh'
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + 4.7 }}

                >
                    <BlueBlock />
                </ParallaxLayer>


                <ParallaxLayer
                    sticky={{ start: k3rdSectionStart + 4.7, end: k3rdSectionStart + 10 }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Registry />
                </ParallaxLayer>


            </Parallax>

        </MainDiv>
    )

}

export default IndexPage

export const Head: HeadFC = () => <title>KO Wedding</title>
