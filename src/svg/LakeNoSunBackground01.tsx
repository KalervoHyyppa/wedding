import * as React from "react";
const SvgLakeNoSunBackground01 = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={3000}
        // height={2000}
        viewBox={'0 0 3000 3000'}

        role="img"
        {...props}
    >
        <defs>
            <linearGradient
                id="Lake_noSun_background-01_svg__a"
                x1={1500}
                y1={-1523.44}
                x2={1500}
                y2={2101.44}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.4} stopColor="#008b8c" />
                <stop offset={0.44} stopColor="#129891" />
                <stop offset={0.52} stopColor="#37b39e" />
                <stop offset={0.6} stopColor="#56caa8" />
                <stop offset={0.68} stopColor="#6edbb0" />
                <stop offset={0.78} stopColor="#7fe8b5" />
                <stop offset={0.88} stopColor="#89efb8" />
                <stop offset={1} stopColor="#8df2ba" />
            </linearGradient>
        </defs>
        <path
            style={{
                fill: "url(#Lake_noSun_background-01_svg__a)",
            }}
            d="M0 0h3000v2000H0z"
        />
    </svg>
);
export default SvgLakeNoSunBackground01;
