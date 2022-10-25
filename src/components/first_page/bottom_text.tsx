import React from 'react'
import styled from 'styled-components'


const BottomTextStyle = styled.h2`
    color: white;
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
            <div style={{ height: "7.5rem" }} />

        </>
    )
}

export default BottomText;