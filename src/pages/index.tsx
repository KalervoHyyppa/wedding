import React, { useRef, useEffect } from "react"
import type { HeadFC } from "gatsby"
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components'
import { FrontBushes } from "../svg/new_lake/front_bushes"
import { TreesAndStones } from "../svg/new_lake/trees_and_stones"
import { MiddleIslands } from "../svg/new_lake/middle_islands"
import { Sun } from "../svg/new_lake/sun"
import { Cloud3 } from "../svg/new_lake/cloud_3"
import { Mountain6 } from "../svg/new_lake/mountain_6"
import { Mountain5 } from "../svg/new_lake/mountain_5"
import { Cloud1 } from "../svg/new_lake/cloud_1"
import { Mountain4 } from "../svg/new_lake/mountain_4"
import { Mountain3 } from "../svg/new_lake/mountain_3"
import { Cloud2 } from "../svg/new_lake/cloud_2"
import { Mountain2 } from "../svg/new_lake/mountain_2"
import { Mountain1 } from "../svg/new_lake/mountain_1"

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

const IndexPage = () => {

    console.log('QQQQ yo');

    const width = '100%'
    const minWidth = '37rem'

    const vb1 = 3000
    const vb2 = 2860

    const kStart = 1
    const kEnd = 8

    const cloudOffset = 1.5
    const cloudSpeed = 0.5


    const sunOffset = 2
    const sunSpeed = .9

    return (
        <MainDiv >
            <Parallax
                pages={6}
                style={{ top: '0', left: '0' }}
                config={{
                    mass: .5,
                    friction: 20,
                    tension: 150,
                }}
            >

                <ParallaxLayer
                    offset={sunOffset}
                    speed={sunSpeed}
                    style={{
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
                    offset={cloudOffset}
                    speed={cloudSpeed}
                    horizontal={true}
                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Cloud3
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer

                    sticky={{ start: kStart + .45, end: kEnd }}

                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain6
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .4, end: kEnd }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain5
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={cloudOffset}
                    speed={cloudSpeed}
                    horizontal={true}

                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Cloud1
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer

                    sticky={{ start: kStart + .35, end: kEnd }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain4
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .3, end: kEnd }}


                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain3
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={cloudOffset}
                    speed={cloudSpeed}
                    horizontal={true}

                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Cloud2
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .25, end: kEnd }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain2
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .2, end: kEnd }}

                    style={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <Mountain1
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .15, end: kEnd }}

                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <MiddleIslands
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: kStart + .1, end: kEnd }}

                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <TreesAndStones
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: kStart + .05, end: kEnd }}

                    style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                    }}
                >
                    <FrontBushes
                        width={width}
                        style={{ minWidth: minWidth }}

                    />
                </ParallaxLayer>






            </Parallax>
        </MainDiv>
    )

}

export default IndexPage

export const Head: HeadFC = () => <title>KO Wedding</title>
