import React from 'react'
import styled from 'styled-components'


const BottomTextStyle = styled.h2`
    color: white;
    font-family: "Cormorant Garamond";
    font-size: 3rem;
    margin: 0;
`
const BottomTextSmallStyle = styled.h2`
    color: white;
    font-family: "Open Sans";
    font-size: 1.5rem;
    margin: 0;
`

const BottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15rem;
    margin-bottom: 1rem;
`
const HR = styled.hr`
    width: 100%;
    border: 1px solid white;
`

const BottomText = () => {
    return (
        <BottomDiv>
            <BottomTextStyle>
                Olivia & Kalervo
            </BottomTextStyle>
            <HR />
            <BottomTextSmallStyle>
                Saranac Lake, NY
            </BottomTextSmallStyle>

            <BottomTextSmallStyle>
                September 22, 2023
            </BottomTextSmallStyle>
            <div style={{ height: "8rem" }} />
        </BottomDiv>
    )
}

export default BottomText;