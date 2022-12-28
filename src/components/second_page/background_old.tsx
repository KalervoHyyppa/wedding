import * as React from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import SvgLakeNoSunClouds01 from "../../svg/LakeNoSunClouds01"
import SvgLakeNoSunMountains01 from "../../svg/LakeNoSunMountains01"
import SvgLakeNoSunLake01 from "../../svg/LakeNoSunLake01"
import SvgLakeNoSunIslands01 from "../../svg/LakeNoSunIslands01"
import SvgLakeNoSunTrees01 from "../../svg/LakeNoSunTrees01"



const CloudsLayer = ({ offset = 1, speed = 1 }) => {


    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <SvgLakeNoSunClouds01
                height='100%'
            />
        </ParallaxLayer>
    )
}

const MountainLayer = ({ offset = 1, speed = 1 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
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

const LakeLayer = ({ offset = 1, speed = 1 }) => {
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

const IslandLayer = ({ offset = 1, speed = 1 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <SvgLakeNoSunIslands01
                height='100%'

            />
        </ParallaxLayer>
    )
}
const TreeLayer = ({ offset = 1, speed = 1 }) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
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

            <CloudsLayer offset={1} speed={0.35} />

            <MountainLayer offset={1} speed={0.4} />
            <LakeLayer offset={1} speed={0.45} />
            <IslandLayer offset={1} speed={0.5} />
            <TreeLayer offset={1} speed={0.55} />

        </>
    )
}

export default Background