
import { ParallaxLayer } from '@react-spring/parallax'
import * as React from "react"
import Background from './background'
import Buttons from './buttons'
import styled from 'styled-components'
import ComingSoon from './coming_soon'
import JoinUs from './join_us'


const BackgroundContainer = styled.div`
    height: 100%;
`

const SecondPage = () => {

    return (
        <>
            <ParallaxLayer
                offset={1}
                speed={.9}

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    color: 'black',
                }}>
                <JoinUs />
            </ParallaxLayer>
            <BackgroundContainer>

                <Background />
            </BackgroundContainer>


        </>
    )
}

export default SecondPage