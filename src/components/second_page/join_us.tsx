import * as React from "react"
import styled from 'styled-components'

const ComingSoonDiv = styled.div`

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

const H3 = styled.h3`
    color: #707070;
    margin: 0;

`

const H1 = styled.h1`
    color: #707070;

`

const H2 = styled.h2`
    margin: 0;
    color: #707070;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const H2i = styled(H2)`
    font-style: italic;
`

const HR = styled.hr`
    width: 100%;
    border: 1px solid #707070;
`

const TopDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`


const JoinUs = () => {
    return (
        <ComingSoonDiv>
            <TopDiv>
                <H1>Join Us</H1>
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

                <H3>More Details to Come!</H3>
            </BottomDiv>
        </ComingSoonDiv>
    )
}

export default JoinUs