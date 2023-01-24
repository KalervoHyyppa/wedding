

import * as React from "react"
import styled from 'styled-components'

const MainDiv = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    height: 4rem;
    width: 18rem;



    border-radius: 55px;
    background: #FFAB37;
    box-shadow:  9px 9px 18px #d6902e,
                -9px -9px 18px #ffc640;
`

const H3 = styled.h3`
    font-size: 1.5rem;
`
const H4 = styled.h4`
    font-size: 1.5rem;
`

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;

`

const LodgingButton = ({ lodgingOption }: { lodgingOption: LodgingModel }) => {


    return (
        <MainDiv>

            <ColumnDiv>
                <H3>{lodgingOption.name}</H3>
                <H4>{lodgingOption.address}</H4>
            </ColumnDiv>

        </MainDiv>
    )
}

export default LodgingButton