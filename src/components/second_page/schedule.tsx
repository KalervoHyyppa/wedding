import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react"
import styled from 'styled-components'

interface Props {
    percentScrolled: number;
}


const ComingSoonDiv = styled.div`
    border-radius: 1.5rem;
    border: none;
    backdrop-filter: blur(30px);
    padding: 2rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 30rem;
    max-width: 25em;
    margin: .5rem;

    
`

const BottomDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
`

const H2 = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
    @media (max-width: 768px) {
    }
`

const H2i = styled(H2)`
    font-style: italic;
`

const HR = styled.hr`
    width: 100%;
    border: 1px solid white;
`

const VL = styled.div`
    border: 1px solid white;
    height: 100%;
    
`

const TopDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`





const ComingSoon = () => {
    return (
        <ComingSoonDiv >
            <TopDiv>
                <h1>Schedule</h1>
                <HR />
            </TopDiv>
            {/* <RowDiv>
                <VL />
                <Dot icon={faCircleDot} />
            </RowDiv> */}

            <BottomDiv>

                <TextDiv>
                    <H2>Thursday - September 21, 2023:</H2>
                    <ListItem
                        itemName={'Happy Hour'}
                        time={'4 PM'}
                        location={'TBD'}
                        url=""
                    />
                </TextDiv>

                <TextDiv>
                    <H2>Friday - September 22, 2023:</H2>
                    <ListItem
                        itemName={'Ceremony'}
                        time={'3 PM'}
                        location={'Camp Iroquois'}
                        url={"https://goo.gl/maps/dew4HhwpzJKLXTfw7"}
                    />
                    <ListItem
                        itemName={'Reception'}
                        time={'5 PM'}
                        location={'Mt. Pisgah'}
                        url={"https://goo.gl/maps/a9Sw46u89k8kDVycA"}
                    />

                </TextDiv>

                <TextDiv>
                    <H2>Saturday - September 23, 2023:</H2>
                    <ListItem
                        itemName={'Brunch'}
                        time={'10 AM'}
                        location={'Camp Iroquois'}
                        url={"https://goo.gl/maps/dew4HhwpzJKLXTfw7"}
                    />
                </TextDiv>

            </BottomDiv>
        </ComingSoonDiv>
    )
}

export default ComingSoon


const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .25rem;
    margin-left: 2rem;
    width: 15rem;
`

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const TimeH3 = styled.h3`
    margin-right: 2rem;
    font-size: 1rem;
    font-weight: bold;
`

const Label = styled.h3`
    font-size: 1rem;

`

const LocationText = styled.h3`
    font-size: 1rem;
    font-style: italic;
    text-decoration: underline;
`

const LocationButton = styled.div`
    cursor:pointer;
`



const ListItem = ({
    itemName,
    time,
    location,
    url,
}: {
    itemName: string,
    time: string,
    location: string,
    url: string,
}) => {

    function openInNewTab() {
        console.log('QQQQ open');
        var win: any = window.open(url, '_blank');
        win.focus();
    }
    return (
        <RowDiv>
            <TimeH3>{time}</TimeH3>
            <ColumnDiv>
                <Label>{itemName}</Label>
                <LocationButton onClick={() => openInNewTab()}>
                    <LocationText >{location}</LocationText>

                </LocationButton>

            </ColumnDiv>

        </RowDiv>
    )
}
