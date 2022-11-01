import * as React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
const Button = styled.button`
    border-radius: 5rem;
    border: none;
    backdrop-filter: blur(10px);
    padding: 1rem;
    width: 5rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 2rem;
`

const ScrollDiv = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`


const Scroll = () => {
    return (

        <ScrollDiv>
            <p style={{ color: "white" }}>
                Scroll Down
            </p>
            <FontAwesomeIcon icon={faChevronCircleDown} style={{ color: "white" }} />
        </ScrollDiv>

    )
}

export default Scroll