import * as styled from './button.style'
import * as React from "react"

const Buttons = () => {

    return (
        <styled.ButtonDiv>
            <styled.Button>
                Venue
            </styled.Button>

            <styled.Button>
                Schedule
            </styled.Button>

            <styled.Button>
                Lodging
            </styled.Button>

            <styled.Button>
                Transportation
            </styled.Button>

            <styled.Button>
                Registry
            </styled.Button>

        </styled.ButtonDiv>
    )

}

export default Buttons