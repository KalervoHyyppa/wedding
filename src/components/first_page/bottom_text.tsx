import React from 'react'
import styled from 'styled-components'


const BottomTextStyle = styled.h2`
    color: white;
    font-family: "Open Sans";
    font-size: 2rem;
`

const BottomText = () => {
    return (
        <>
            <BottomTextStyle>
                Saranac, NY
            </BottomTextStyle>

            <BottomTextStyle>
                September 22, 2023
            </BottomTextStyle>
            <div style={{ height: "8rem" }} />

        </>
    )
}

export default BottomText;