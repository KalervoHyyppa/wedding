
import * as React from "react"
import styled from 'styled-components'
import ThingButton from "./things_button"

// Olympic Jumping Complex
const olympic: ThingsToDoModel = {
    name: 'Olympic Jumping Complex',
    address1: '5486 Cascade Rd,',
    address2: 'Lake Placid, NY 12946',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/ADK_187_5E3FB39C-B568-5D61-4574CF0F01038D52-5e3fb2c0944ae85_5e3fb3ed-e3a1-1976-ccab757fc7427f00.jpg',
    mapsLink: 'https://goo.gl/maps/ZZkZz9xrxZKBr3QbA',
}

// Drive up White Face
const driveFace: ThingsToDoModel = {
    name: "Drive Up WhiteFace and get that Bumpah' Stickah'",
    address1: 'White Face',
    address2: 'Wilmington, NY 12997',
    imageUrl: 'https://whiteface.com/wp-content/uploads/sites/3/2020/10/Veterans-Memorial-Highway-Aerial-Lake-Placid_1920x600.jpg',
    mapsLink: 'https://goo.gl/maps/Pb6c7opFKwpy9AWN8',
}

// Easy Hike
const easyHike: ThingsToDoModel = {
    name: "McKenzie Pond | Easy Hike",
    address1: "Jackrabbit Trailhead,",
    address2: "Saranac Lake, NY 12983",
    imageUrl: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjM0MzM0NDMvMDU2NDg3MjUzYWI0MDEzODFlNWEwODRkMDIxOGM1MWUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    mapsLink: 'https://www.alltrails.com/trail/us/new-york/jackrabbit-trail-to-mckenzie-pond--2?u=i',
}

// Medium Hike
const mediumHike: ThingsToDoModel = {
    name: "Scarface Mountain",
    address1: 'Scarface Mountain Trailhead,',
    address2: 'Saranac Lake, NY 12983',
    imageUrl: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzk0OTU4NTYvZTUzYzI2Nzg0OTFlMjliYjczYTU1ZjUwMGJhNTFhYzAuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    mapsLink: 'https://www.alltrails.com/trail/us/new-york/scarface-mountain?u=i',

}

const RowDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 25rem; */
    width: 100%;
    margin-top: -15rem;

    max-width: 35rem;
    justify-content: start;
    align-items: center;
    background: #f7c300;
 
`


const H2 = styled.h2`
    font-weight: bold;
    font-size: 2.5rem;
`

const ThingsToDo = () => {


    return (

        <RowDiv>
            <H2>Things to Do</H2>

            <ThingButton thing={olympic} />
            <ThingButton thing={driveFace} />
            <ThingButton thing={easyHike} />
            <ThingButton thing={mediumHike} />

        </RowDiv>
    )

}

export default ThingsToDo