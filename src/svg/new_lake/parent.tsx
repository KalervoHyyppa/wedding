import styled from 'styled-components'
import * as React from "react";

const SVG = styled.svg`
position: absolute;
`

export const Parent = (props: any, component: React.ReactElement) => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={"0 0 3000 2860"}
        // preserveAspectRatio="xMinYMin meet"
        {...props}

    >
        <defs>
            <linearGradient id="linear-gradient" x1="1109" y1="616.24" x2="1109" y2="2736.62" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1c254d" />
                <stop offset=".16" stopColor="#443751" />
                <stop offset=".58" stopColor="#a7665c" />
                <stop offset=".86" stopColor="#e68363" />
                <stop offset="1" stopColor="#ff8f66" />
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="2250" y1="364.45" x2="2250" y2="2667.29" gradientUnits="userSpaceOnUse">
                <stop offset=".31" stopColor="#1c254d" />
                <stop offset=".32" stopColor="#23284d" />
                <stop offset=".39" stopColor="#564053" />
                <stop offset=".45" stopColor="#835558" />
                <stop offset=".52" stopColor="#a9675c" />
                <stop offset=".59" stopColor="#c87560" />
                <stop offset=".66" stopColor="#e08062" />
                <stop offset=".74" stopColor="#f18864" />
                <stop offset=".82" stopColor="#fb8d65" />
                <stop offset=".92" stopColor="#ff8f66" />
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="1412.5" y1="1175" x2="1412.5" y2="2583.21" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1c254d" />
                <stop offset=".1" stopColor="#4b3b52" />
                <stop offset=".22" stopColor="#7a5157" />
                <stop offset=".34" stopColor="#a3645b" />
                <stop offset=".46" stopColor="#c4735f" />
                <stop offset=".59" stopColor="#de7f62" />
                <stop offset=".71" stopColor="#f08864" />
                <stop offset=".85" stopColor="#fb8d65" />
                <stop offset="1" stopColor="#ff8f66" />
            </linearGradient>
            <linearGradient id="linear-gradient-4" x1="1500" y1="1275.89" x2="1500" y2="3109.45" xlinkHref="#linear-gradient-3" />
            <linearGradient id="linear-gradient-5" x1="1004.29" y1="1388.88" x2="1004.29" y2="2401.24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1c254d" />
                <stop offset=".06" stopColor="#2b2c4e" />
                <stop offset=".53" stopColor="#9c605b" />
                <stop offset=".85" stopColor="#e38262" />
                <stop offset="1" stopColor="#ff8f66" />
            </linearGradient>
            <linearGradient id="linear-gradient-6" x1="2183.22" y1="1412.72" x2="1990.28" y2="2510.55" gradientUnits="userSpaceOnUse">
                <stop offset=".08" stopColor="#1c254d" />
                <stop offset=".12" stopColor="#2b2c4e" />
                <stop offset=".44" stopColor="#9c605b" />
                <stop offset=".67" stopColor="#e38262" />
                <stop offset=".77" stopColor="#ff8f66" />
            </linearGradient>
            <linearGradient id="linear-gradient-7" x1="1603.87" y1="1487.8" x2="1384.28" y2="3422.53" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fb8d64" />
                <stop offset=".25" stopColor="#b16b67" />
                <stop offset=".81" stopColor="#14246e" />
            </linearGradient>
            <linearGradient id="linear-gradient-8" x1="1499.4" y1="1621.21" x2="1500.68" y2="2404.93" gradientUnits="userSpaceOnUse">
                <stop offset=".14" stopColor="#14246e" />
                <stop offset=".61" stopColor="#b16b67" />
                <stop offset=".82" stopColor="#fb8d64" />
            </linearGradient>
            <linearGradient id="linear-gradient-9" x1="1573.37" y1="1051.61" x2="1442.39" y2="2591.3" gradientUnits="userSpaceOnUse">
                <stop offset=".22" stopColor="#ff8f66" />
                <stop offset=".35" stopColor="#b56c5d" />
                <stop offset=".48" stopColor="#744e56" />
                <stop offset=".59" stopColor="#443751" />
                <stop offset=".68" stopColor="#262a4e" />
                <stop offset=".72" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-10" x1="1558.55" y1="751.1" x2="1453.71" y2="3107.31" gradientUnits="userSpaceOnUse">
                <stop offset=".42" stopColor="#ff8f66" />
                <stop offset=".49" stopColor="#b56c5d" />
                <stop offset=".57" stopColor="#744e56" />
                <stop offset=".63" stopColor="#443751" />
                <stop offset=".68" stopColor="#262a4e" />
                <stop offset=".71" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-11" x1="1660.84" y1="1431.43" x2="1372.12" y2="2515.01" gradientUnits="userSpaceOnUse">
                <stop offset=".31" stopColor="#e8704b" />
                <stop offset=".44" stopColor="#b55d4b" />
                <stop offset=".61" stopColor="#73454c" />
                <stop offset=".76" stopColor="#44334c" />
                <stop offset=".88" stopColor="#26294c" />
                <stop offset=".94" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-12" x1="356.86" y1="1512.67" x2="140.79" y2="2011.47" gradientUnits="userSpaceOnUse">
                <stop offset=".16" stopColor="#ff8f66" />
                <stop offset=".17" stopColor="#fc8d65" />
                <stop offset=".3" stopColor="#c0705a" />
                <stop offset=".43" stopColor="#8c5751" />
                <stop offset=".56" stopColor="#62434a" />
                <stop offset=".68" stopColor="#413344" />
                <stop offset=".8" stopColor="#2a2840" />
                <stop offset=".91" stopColor="#1b213d" />
                <stop offset="1" stopColor="#171f3d" />
            </linearGradient>
            <linearGradient id="linear-gradient-13" x1="460.33" y1="1539.56" x2="221.92" y2="2089.92" gradientUnits="userSpaceOnUse">
                <stop offset=".16" stopColor="#ff8f66" />
                <stop offset=".39" stopColor="#b16958" />
                <stop offset=".61" stopColor="#6f494c" />
                <stop offset=".79" stopColor="#3f3244" />
                <stop offset=".92" stopColor="#21243e" />
                <stop offset="1" stopColor="#171f3d" />
            </linearGradient>
            <linearGradient id="linear-gradient-14" x1="531.91" y1="1676.84" x2="339.13" y2="2121.88" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-15" x1="678.01" y1="1765.69" x2="538.45" y2="2087.86" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-16" x1="851.89" y1="1741.08" x2="712.33" y2="2063.25" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-17" x1="944.89" y1="1762.08" x2="805.33" y2="2084.25" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-18" x1="908.88" y1="1689.85" x2="755.06" y2="2044.93" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-19" x1="838.21" y1="1620.25" x2="635.92" y2="2087.23" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-20" x1="714.9" y1="1812.4" x2="589.01" y2="2131.46" gradientUnits="userSpaceOnUse">
                <stop offset=".16" stopColor="#ff8f66" />
                <stop offset=".28" stopColor="#c9745c" />
                <stop offset=".42" stopColor="#935b52" />
                <stop offset=".55" stopColor="#66454b" />
                <stop offset=".68" stopColor="#443444" />
                <stop offset=".8" stopColor="#2b2840" />
                <stop offset=".91" stopColor="#1c213d" />
                <stop offset="1" stopColor="#171f3d" />
            </linearGradient>
            <linearGradient id="linear-gradient-21" x1="882.58" y1="1809.67" x2="756.69" y2="2128.73" xlinkHref="#linear-gradient-20" />
            <linearGradient id="linear-gradient-22" x1="378.96" y1="1270.55" x2="13.12" y2="2115.09" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-23" x1="239.37" y1="1377.6" x2="-50.09" y2="2045.82" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-24" x1="2513.95" y1="1349.5" x2="2729.95" y2="2241.5" gradientUnits="userSpaceOnUse">
                <stop offset=".16" stopColor="#ff8f66" />
                <stop offset=".39" stopColor="#b16958" />
                <stop offset=".61" stopColor="#6f494c" />
                <stop offset=".79" stopColor="#3f3244" />
                <stop offset=".92" stopColor="#21243e" />
                <stop offset="1" stopColor="#171f3d" />
            </linearGradient>
            <linearGradient id="linear-gradient-25" x1="2654.61" y1="1528.9" x2="2815.94" y2="2139.57" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-26" x1="2417.57" y1="1615.81" x2="2554.49" y2="2134.04" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-27" x1="3192.92" y1="1229.96" x2="2826.73" y2="2075.31" xlinkHref="#linear-gradient-13" />
            <linearGradient id="linear-gradient-28" x1="2750.37" y1="1655.33" x2="2907.7" y2="2226" xlinkHref="#linear-gradient-20" />
            <linearGradient id="linear-gradient-29" x1="2346.38" y1="1815.24" x2="2441.44" y2="2160.02" xlinkHref="#linear-gradient-20" />
            <linearGradient id="linear-gradient-30" x1="2407.8" y1="1870.3" x2="2490.07" y2="2168.71" xlinkHref="#linear-gradient-20" />
            <linearGradient id="linear-gradient-31" x1="2613.27" y1="1759.02" x2="2734.31" y2="2198.05" xlinkHref="#linear-gradient-20" />
            <linearGradient id="linear-gradient-32" x1="-13.53" y1="1873.62" x2="341.42" y2="2446.12" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff8f66" />
                <stop offset=".22" stopColor="#b56c5d" />
                <stop offset=".44" stopColor="#744e56" />
                <stop offset=".63" stopColor="#443751" />
                <stop offset=".77" stopColor="#262a4e" />
                <stop offset=".85" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-33" x1="705.82" y1="1853.09" x2="-107.92" y2="2322.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff8f66" />
                <stop offset=".08" stopColor="#f88b65" />
                <stop offset=".2" stopColor="#e58363" />
                <stop offset=".34" stopColor="#c7745f" />
                <stop offset=".49" stopColor="#9c615b" />
                <stop offset=".65" stopColor="#664755" />
                <stop offset=".83" stopColor="#24294d" />
                <stop offset=".85" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-34" x1="1232.13" y1="1895.38" x2="1517.4" y2="2355.5" gradientTransform="translate(1776.5 4354.06) rotate(-180)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-35" x1="1073.82" y1="1871.4" x2="1257.91" y2="2168.33" gradientTransform="translate(1776.5 4354.06) rotate(-180)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-36" x1="1230.69" y1="1956.28" x2="1517.36" y2="2418.64" gradientTransform="translate(1776.5) rotate(-180) scale(1 -1)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-37" x1="1073.82" y1="2159.35" x2="1257.91" y2="2456.27" gradientTransform="translate(1776.5) rotate(-180) scale(1 -1)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-38" x1="913.93" y1="1877.68" x2="1078.13" y2="2142.51" gradientTransform="translate(1776.5 4149.6) rotate(-180)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-39" x1="828.05" y1="1932.24" x2="932.53" y2="2100.76" gradientTransform="translate(1776.5 4149.6) rotate(-180)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-40" x1="913.93" y1="1930.41" x2="1078.13" y2="2195.23" gradientTransform="translate(1776.5) rotate(-180) scale(1 -1)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-41" x1="828.05" y1="2000.24" x2="932.53" y2="2168.76" gradientTransform="translate(1776.5) rotate(-180) scale(1 -1)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-42" x1="2690.35" y1="1891.56" x2="2939.51" y2="2293.43" gradientTransform="translate(0 4208.35) scale(1 -1)" xlinkHref="#linear-gradient-32" />
            <linearGradient id="linear-gradient-43" x1="2622.27" y1="1868.71" x2="2663.15" y2="2122.05" gradientTransform="translate(0 4208.35) scale(1 -1)" gradientUnits="userSpaceOnUse">
                <stop offset=".12" stopColor="#ff8f66" />
                <stop offset=".27" stopColor="#b56c5d" />
                <stop offset=".42" stopColor="#744e56" />
                <stop offset=".54" stopColor="#443751" />
                <stop offset=".63" stopColor="#262a4e" />
                <stop offset=".69" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-44" x1="2757.43" y1="1902.69" x2="2782.77" y2="2059.71" gradientTransform="translate(0 4208.35) scale(1 -1)" gradientUnits="userSpaceOnUse">
                <stop offset=".12" stopColor="#ff8f66" />
                <stop offset=".26" stopColor="#b56c5d" />
                <stop offset=".41" stopColor="#744e56" />
                <stop offset=".52" stopColor="#443751" />
                <stop offset=".61" stopColor="#262a4e" />
                <stop offset=".66" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-45" x1="2476.6" y1="1954.06" x2="2496.22" y2="2075.63" gradientTransform="translate(0 4208.35) scale(1 -1)" gradientUnits="userSpaceOnUse">
                <stop offset=".12" stopColor="#ff8f66" />
                <stop offset=".26" stopColor="#b56c5d" />
                <stop offset=".4" stopColor="#744e56" />
                <stop offset=".52" stopColor="#443751" />
                <stop offset=".6" stopColor="#262a4e" />
                <stop offset=".65" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-46" x1="2690.35" y1="1878.71" x2="2939.51" y2="2280.58" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff8f66" />
                <stop offset=".19" stopColor="#b56c5d" />
                <stop offset=".38" stopColor="#744e56" />
                <stop offset=".54" stopColor="#443751" />
                <stop offset=".66" stopColor="#262a4e" />
                <stop offset=".73" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-47" x1="2622.27" y1="2008.36" x2="2663.15" y2="2261.69" gradientUnits="userSpaceOnUse">
                <stop offset=".12" stopColor="#ff8f66" />
                <stop offset=".19" stopColor="#dc7e62" />
                <stop offset=".32" stopColor="#a2635b" />
                <stop offset=".45" stopColor="#724d56" />
                <stop offset=".57" stopColor="#4c3b52" />
                <stop offset=".68" stopColor="#312f4f" />
                <stop offset=".77" stopColor="#21274d" />
                <stop offset=".85" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-48" x1="2757.43" y1="2100.34" x2="2782.77" y2="2257.35" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff8f66" />
                <stop offset=".2" stopColor="#b56c5d" />
                <stop offset=".39" stopColor="#744e56" />
                <stop offset=".56" stopColor="#443751" />
                <stop offset=".68" stopColor="#262a4e" />
                <stop offset=".75" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-49" x1="2476.6" y1="2101.06" x2="2496.22" y2="2222.63" gradientUnits="userSpaceOnUse">
                <stop offset=".12" stopColor="#ff8f66" />
                <stop offset=".31" stopColor="#b56c5d" />
                <stop offset=".5" stopColor="#744e56" />
                <stop offset=".66" stopColor="#443751" />
                <stop offset=".78" stopColor="#262a4e" />
                <stop offset=".85" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-50" x1="2810.21" y1="1969.12" x2="3046.5" y2="2269.24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff8f66" />
                <stop offset=".18" stopColor="#b56c5d" />
                <stop offset=".36" stopColor="#744e56" />
                <stop offset=".51" stopColor="#443751" />
                <stop offset=".63" stopColor="#262a4e" />
                <stop offset=".69" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-51" x1="2773.43" y1="1994.46" x2="3106.07" y2="2416.96" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff8f66" />
                <stop offset=".14" stopColor="#b56c5d" />
                <stop offset=".28" stopColor="#744e56" />
                <stop offset=".39" stopColor="#443751" />
                <stop offset=".48" stopColor="#262a4e" />
                <stop offset=".53" stopColor="#1c254d" />
            </linearGradient>
            <linearGradient id="linear-gradient-52" x1="2762.97" y1="2587.51" x2="-779.18" y2="2459.56" gradientTransform="translate(-49.51 38.32) rotate(-1.01)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#e2957d" />
                <stop offset=".17" stopColor="#c18376" />
                <stop offset="1" stopColor="#232e56" />
            </linearGradient>
            <linearGradient id="linear-gradient-53" x1="2684.89" y1="2768.37" x2="56.97" y2="2673.44" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#e2957d" />
                <stop offset=".17" stopColor="#c18376" />
                <stop offset="1" stopColor="#232e56" />
            </linearGradient>
            <linearGradient id="linear-gradient-54" x1="1192.25" y1="2461.08" x2="1210.4" y2="2907.3" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#964f39" />
                <stop offset=".94" stopColor="#0b1854" />
            </linearGradient>
            <linearGradient id="linear-gradient-55" x1="1490.94" y1="2525.08" x2="1506.68" y2="2912.18" xlinkHref="#linear-gradient-54" />
            <linearGradient id="linear-gradient-56" x1="2119.15" y1="3786.56" x2="2119.15" y2="2244.52" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#944122" />
                <stop offset=".25" stopColor="#914023" />
                <stop offset=".43" stopColor="#883d26" />
                <stop offset=".57" stopColor="#793a2d" />
                <stop offset=".71" stopColor="#633436" />
                <stop offset=".83" stopColor="#472d41" />
                <stop offset=".95" stopColor="#26244f" />
                <stop offset="1" stopColor="#142057" />
            </linearGradient>
        </defs>
        {component}
    </SVG>
)