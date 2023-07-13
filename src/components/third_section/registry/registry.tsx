

import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 25rem; */
    width: 100%;

    max-width: 35rem;
    justify-content: start;
    align-items: center;
    background: #b3dcd4;
 
`


const H2 = styled.h2`
    margin-top: 3rem;
    font-weight: bold;
    font-size: 2.5rem;
    cursor:pointer;
    text-decoration: underline;
    text-align: center;
`

const Registry = () => {

    function openInNewTab() {
        console.log('QQQQ open');
        var win: any = window.open("https://withjoy.com/kalervo-and-olivia/registry", '_blank');
        win.focus();
    }

    return (
        <ColDiv>
            <StaticImage
                src="../../../images/present.png"
                alt="present"
                width={100}
                placeholder="blurred"
            />
            <H2 onClick={() => openInNewTab()}>Click Here for the Registry</H2>
        </ColDiv>
    )

}

export default Registry