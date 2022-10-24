import * as React from "react"
import type { HeadFC } from "gatsby"
import * as styled from "../css/basic.style"
import { IParallax, Parallax } from '@react-spring/parallax'

import './index.css';
import FirstPage from "./first_page";
import SecondPage from "./second_page";
import Background from "../components/second_page/background";



const IndexPage = () => {
    const parallax = React.useRef<IParallax>(null)
    return (
        <styled.MainDiv>
            <Parallax pages={2} style={{ top: '0', left: '0' }} ref={parallax}>

                <FirstPage />

                <SecondPage />

            </Parallax>
        </styled.MainDiv>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>KO Wedding</title>
