import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'


const KODiv = styled.div`
    display: flex;
    flex-direction: row;
`

const MainText = () => {
    return (

        <>
            <KODiv>
                <StaticImage
                    src="../../images/ko.png"
                    alt="KO"
                    width={250}
                    placeholder="blurred"
                />
            </KODiv>




        </>
    )
}

export default MainText