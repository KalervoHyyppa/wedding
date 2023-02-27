import * as React from "react"
import { useEffect, useState } from "react";

import styled from 'styled-components'

const MainDiv = styled.div``

const Section = styled.div``

const WeddingForm = () => {

    const [attending, setAttending] = useState(false);

    return (
        <MainDiv>

            <CanYouAttendSection {...attending} />


        </MainDiv>

    )
}


export default WeddingForm

const CanYouAttendSection = (attendState: boolean) => {

    return (
        <Section>

        </Section>
    )
}

// Song recommendations