import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import SvgLakeNoSunClouds01 from "../../svg/LakeNoSunClouds01"
import SvgLakeNoSunMountains01 from "../../svg/LakeNoSunMountains01"
import SvgLakeNoSunLake01 from "../../svg/LakeNoSunLake01"
import SvgLakeNoSunIslands01 from "../../svg/LakeNoSunIslands01"
import SvgLakeNoSunTrees01 from "../../svg/LakeNoSunTrees01"
import MinimalistMtnBlue from "../../svg/MinimalistMtnBlue"
import MinimalistMtnYellow from "../../svg/MinimalistMtnYellow"
import MinimalistMtnOrange from "../../svg/MinimalistMtnOrange"



const BlueLayer = ({ offset = 1, speed = 1 }) => {


    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
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
    )
}

const YellowLayer = ({ offset = 1, speed = 1 }) => {


    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            sticky={{ start: 1 }}
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
    )
}

export const OrangeLayer = ({ offset = 1, speed = 1 }) => {


    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            sticky={{ start: 1 }}
            style={{
                // height: '100%',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
            }}
        >
            <MinimalistMtnOrange
                height='100vh'
            />
        </ParallaxLayer>
    )
}

const Background = () => {

    return (
        <>

            <OrangeLayer offset={1} speed={0.05} />
            <YellowLayer offset={1} speed={0.5} />
            <BlueLayer offset={1} speed={.9} />


        </>
    )
}

export default Background