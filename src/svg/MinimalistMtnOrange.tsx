import * as React from "react";
import styled from 'styled-components'



const SVG = styled.svg`
    position: absolute;
`

const MinimalistMtnOrange = (props: any) => (

    <SVG id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"

        preserveAspectRatio="xMinYMin meet"
        // width="1920"
        // height="1080"
        viewBox={"0 0 1920 1080"}
        {...props}
    >
        <defs>

            <filter id="dropShadow" filterUnits="userSpaceOnUse">
                <feOffset dx="0" dy="7" />
                <feGaussianBlur result="blur-2" stdDeviation="15" />
                <feFlood floodColor="#000" floodOpacity=".75" />
                <feComposite in2="blur-2" operator="in" />
                <feComposite in="SourceGraphic" />
            </filter>
        </defs>
        <path id="orange" d="m1920,713.64c-218.36,97.8-482.54,88.38-692.67-26.51-106.04-57.98-206.41-143.18-327.24-145.73-233.92-4.94-366.81,197.75-602.2,48.25C201.28,528.3,107.28,435.72,0,419.66v660.34h1920v-366.36Z"
            style={{
                fill: "#ffab38",
                // filter: "url(#dropShadow)"
            }}
        />

    </SVG>
)

export default MinimalistMtnOrange