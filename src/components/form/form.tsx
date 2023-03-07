import * as React from "react"
import { useEffect, useState } from "react";

import styled from 'styled-components'

const MainDiv = styled.div``

const Section = styled.div``

const WeddingForm = () => {

    const [attending, setAttending] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [alreadyResponded, setAlreadyResponded] = useState(false);
    const [responded, setResponded] = useState(false);

    const [currentSection, setCurrentSection] = useState(false);

    // Showing
    const [showSubmit, setShowSubmit] = useState(false);
    const [showWho, setShowWho] = useState(false);



    const retrieveRSVP = async () => {
        try {
            // Get data from firebase

            const alreadyResponded = false;

            if (alreadyResponded) {
                setAlreadyResponded(true);
            }

            setLoading(false);

        } catch (error) {
            setError(true)
        }

    }

    const submitResponse = async () => {
        try {
            setLoading(true)

            // Submit via function

            setResponded(true)
            setLoading(false)


        } catch (error) {

        }

    }

    useEffect(() => {
        // Get the data
        retrieveRSVP();

    }, [])

    return (
        <MainDiv>

            {loading ?
                <></>
                :

                alreadyResponded ?
                    <></>
                    :
                    responded ?
                        <></>
                        :
                        error ?
                            <></>
                            :

                            <CanYouAttendSection {...attending} />
            }


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

const WhosAttendingSection = () => {
    return (
        <Section>

        </Section>
    )
}

const SubmitSection = () => {
    return (
        <Section>

        </Section>
    )
}

// Song recommendations