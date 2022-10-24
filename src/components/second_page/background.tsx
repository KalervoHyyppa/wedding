import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import SvgLakeNoSunBackground01 from "../../svg/LakeNoSunBackground01"
import SvgLakeNoSunClouds01 from "../../svg/LakeNoSunClouds01"
import SvgLakeNoSunMountains01 from "../../svg/LakeNoSunMountains01"
import SvgLakeNoSunLake01 from "../../svg/LakeNoSunLake01"
import SvgLakeNoSunIslands01 from "../../svg/LakeNoSunIslands01"
import SvgLakeNoSunTrees01 from "../../svg/LakeNoSunTrees01"
import { StaticImage } from "gatsby-plugin-image"



const BackGroundLayer = ({ offset = 0, speed = 0 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: 0,
                right: 0,
            }}
        >
            <SvgLakeNoSunBackground01
                height='100%'
            />
        </ParallaxLayer >
    )
}

const CloudsLayer = ({ offset = 0, speed = 0 }) => {


    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: 0,
                right: 0,
                transform: 'translate(-50 %, -50 %)',
            }}
        >
            <SvgLakeNoSunClouds01
                height='100%'
            />
        </ParallaxLayer>
    )
}

const MountainLayer = ({ offset = 0, speed = 0 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
            }}
        >
            <SvgLakeNoSunMountains01
                height='100%'
            />
            {/* <StaticImage
                src="../images/Lake_noSun_mountains-01.svg"
                alt="QQ"
                style={{ height: '100vh' }}
                placeholder="blurred"
            /> */}
        </ParallaxLayer>
    )
}

const LakeLayer = ({ offset = 0, speed = 0 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
            }}
        >
            <SvgLakeNoSunLake01
                height='100%'

            />
        </ParallaxLayer>
    )
}

const IslandLayer = ({ offset = 0, speed = 0 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
            }}
        >
            <SvgLakeNoSunIslands01
                height='100%'

            />
        </ParallaxLayer>
    )
}
const TreeLayer = ({ offset = 0, speed = 0 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
            }}
        >
            <SvgLakeNoSunTrees01
                height='100%'

            />
        </ParallaxLayer>
    )
}


const Background = () => {

    return (
        <>

            <BackGroundLayer offset={1} speed={0.3} />
            <CloudsLayer offset={1} speed={0.35} />

            <MountainLayer offset={1} speed={0.4} />
            <LakeLayer offset={1} speed={0.45} />
            <IslandLayer offset={1} speed={0.5} />
            <TreeLayer offset={1} speed={0.55} />

        </>
    )
}

export default Background