import * as React from "react";
import styled from 'styled-components'



const SVG = styled.svg`
    position: absolute;
`

const MinimalistMtnBlue = (props: any) => (

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
                <feGaussianBlur result="blur-2" stdDeviation="10" />
                <feFlood floodColor="#000" floodOpacity=".75" />
                <feComposite in2="blur-2" operator="in" />
                <feComposite in="SourceGraphic" />
            </filter>
        </defs>

        <path id="blue" d="m1920,932.08c-116.18-71.55-268.95-92.24-408.29-78.61-197.81,19.35-387.38,92.26-585.14,112.06-192.79,19.3-384.99-11.93-576.6-29.49-81.77-7.5-229.89-31.7-349.97-19.89v163.84h1920v-147.92Z"
            style={{
                fill: "#b3dcd4",
                // filter: "url(#dropShadow)"
            }}
        />
    </SVG>
)

export default MinimalistMtnBlue