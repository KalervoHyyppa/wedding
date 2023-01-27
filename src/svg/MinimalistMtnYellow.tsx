import * as React from "react";
import styled from 'styled-components'



const SVG = styled.svg`
    position: absolute;
`

const MinimalistMtnYellow = (props: any) => (

    <SVG id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"

        preserveAspectRatio="xMinYMin meet"
        // width="1920"
        // height="1080"
        viewBox={"0 0 1920 1080"}
        transform="translate(0,60)"
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

        <path id="yellow" d="m1920,488.81c-150.66-10.97-304.73,53.23-443.95,120.88-166.55,80.94-343.23,170.89-526.91,147.36-77.96-9.99-156.46-40.39-232.95-22.34-69.81,16.47-124.18,70.38-189.26,100.52-117.06,54.21-253.16,26.69-382.11,23.05-57.04-1.61-104.95,2.56-144.81,12.99v208.72h1920V488.81Z"
            style={{
                fill: "#f7c300",
                // filter: "url(#dropShadow)"
            }}
        />

    </SVG>
)

export default MinimalistMtnYellow