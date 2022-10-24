import { ParallaxLayer } from '@react-spring/parallax'
import * as React from "react"
import Background from '../components/second_page/background'
import Buttons from '../components/second_page/buttons'
import SvgLake01 from '../images/Lake'
import SvgLakeNoSun from '../images/Lake_noSun'
import * as styled from '../css/basic.style'



const SecondPage = () => {
    return (
        <>

            <styled.BackgroundContainer>

                {/* <SvgLakeNoSun /> */}
                <Background />
            </styled.BackgroundContainer>

            <ParallaxLayer
                offset={1}
                speed={.3}

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                }}>
                <Buttons />
            </ParallaxLayer>
        </>
    )
}

export default SecondPage