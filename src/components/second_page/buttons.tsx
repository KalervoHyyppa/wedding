import * as React from "react"
import styled from 'styled-components'

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30rem;
`

const Button = styled.button`
    border-radius: 5rem;
    border: none;
    backdrop-filter: blur(10px);
    padding: 1rem;
    width: 15rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`


const Buttons = () => {

    return (
        <ButtonDiv>
            <Button>
                Venue
            </Button>

            <Button>
                Schedule
            </Button>

            <Button>
                Lodging
            </Button>

            <Button>
                Transportation
            </Button>

            <Button>
                Registry
            </Button>

        </ButtonDiv>
    )

}

export default Buttons