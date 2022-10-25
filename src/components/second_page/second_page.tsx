
import { ParallaxLayer } from '@react-spring/parallax'
import * as React from "react"
import Background from './background'
import Buttons from './buttons'
import styled from 'styled-components'


const BackgroundContainer = styled.div`
    height: 100%;
`

const SecondPage = () => {

    return (
        <>
            <BackgroundContainer>

                <Background />
            </BackgroundContainer>

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