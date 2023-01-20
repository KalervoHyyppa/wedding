
import { ParallaxLayer } from '@react-spring/parallax'
import * as React from "react"
import styled from 'styled-components'



const BackgroundContainer = styled.div`
    height: 100%;
`

const ThirdPage = () => {

    return (
        <>
            <ParallaxLayer
                offset={2}
                speed={.9}

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    color: 'black',
                }}>
            </ParallaxLayer>



        </>
    )
}

export default ThirdPage