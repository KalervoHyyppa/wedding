import React, { useRef, useEffect } from "react"
import type { HeadFC } from "gatsby"
import { IParallax, Parallax } from '@react-spring/parallax'
import styled from 'styled-components'

import './index.css';
import FirstPage from "../components/first_page/first_page";
import SecondPage from "../components/second_page/second_page";


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
    const parallax = useRef<IParallax>(null!)


    return (
        <MainDiv>
            <Parallax pages={2} style={{ top: '0', left: '0' }} >

                <FirstPage />

                <SecondPage />

            </Parallax>
        </MainDiv>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>KO Wedding</title>
