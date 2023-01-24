import * as React from "react"
import styled from 'styled-components'
import LodgingButton from "./lodging_button"


const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 20rem;
    justify-content: space-between;
    margin-top: 6rem;
`

const Lodging = () => {

    const lodge1: LodgingModel = { url: '', name: 'Saranac Hotel', address: '' }
    const lodge2: LodgingModel = { url: '', name: 'q', address: '' }
    const lodge3: LodgingModel = { url: '', name: 'q', address: '' }


    return (
        <ColumnDiv>
            <LodgingButton lodgingOption={lodge1} />
            <LodgingButton lodgingOption={lodge1} />
            <LodgingButton lodgingOption={lodge1} />

        </ColumnDiv>
    )

}

export default Lodging

