import * as React from "react"
import styled from 'styled-components'

const ComingSoonDiv = styled.div`
    border-radius: 1.5rem;
    border: none;
    backdrop-filter: blur(10px);
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 2rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 25rem;
    @media (max-width: 768px) {
        height: 20rem;
    }
`

const BottomDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const H2 = styled.h2`
    margin: 0;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const H2i = styled(H2)`
    font-style: italic;
`

const HR = styled.hr`
    width: 100%;
    border: 1px solid white;
`

const TopDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`


const ComingSoon = () => {
    return (
        <ComingSoonDiv>
            <TopDiv>
                <h1>Join Us</h1>
                <HR />
            </TopDiv>

            <BottomDiv>

                <TextDiv>
                    <H2>Friday, September 22, 2023:</H2>
                    <H2i>Ceremony and Reception</H2i>
                </TextDiv>

                <TextDiv>
                    <H2>September 20 - 24:</H2>
                    <H2i>Boat Stuff</H2i>
                </TextDiv>

                <h3>More Details to Come!</h3>
            </BottomDiv>
        </ComingSoonDiv>
    )
}

export default ComingSoon