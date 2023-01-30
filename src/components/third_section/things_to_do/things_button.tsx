

import * as React from "react"
import styled from 'styled-components'

const MainDiv = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    height: 7.5rem;
    width: 100%;
    margin: .5rem;

    @media (max-width: 768px) {
        width: 20rem;

    }

    /* border-radius: 2rem; */
    /* background: #ffc06a; */

`

const H3 = styled.h3`
    font-size: 1.2rem;
    text-decoration: underline;
`
const H4 = styled.h4`
    font-size: 1rem;
    margin: 0;
`

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;


`

const Img = styled.img`
    width: 100%;

    @media (max-width: 768px) {
        width: 8rem;

    }
`

const ImgDiv = styled.div`
    flex: 1;
    margin-right: .5rem;


`

const NameButton = styled.div`
    cursor:pointer;
`

const ThingButton = ({ thing }: { thing: ThingsToDoModel }) => {

    function openInNewTab() {
        var win: any = window.open(thing.mapsLink, '_blank');
        win.focus();
    }
    return (
        <MainDiv>
            <ImgDiv>
                <Img src={thing.imageUrl} />

            </ImgDiv>

            <ColumnDiv>
                <NameButton onClick={() => openInNewTab()}>
                    <H3>{thing.name}</H3>
                </NameButton>
                <H4>{thing.address1}</H4>
                <H4>{thing.address2}</H4>
            </ColumnDiv>

        </MainDiv>
    )
}

export default ThingButton