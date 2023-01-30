

import * as React from "react"
import styled from 'styled-components'

const RowDiv = styled.div`
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
    font-weight: bold;
    font-size: 2.5rem;
`

const Registry = () => {

    return (
        <RowDiv>
            <H2>Registry</H2>
            <H2>Coming Soon</H2>
        </RowDiv>
    )

}

export default Registry