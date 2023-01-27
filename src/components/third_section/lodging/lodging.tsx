import * as React from "react"
import styled from 'styled-components'
import LodgingButton from "./lodging_button"
import LodgingHeader from "./lodging_header"


const RowDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 25rem; */
    width: 100%;
    margin-top: -25rem;

    max-width: 35rem;
    justify-content: start;
    align-items: center;

 
`

const Lodging = () => {

    const hotelSaranac: LodgingModel = {
        url: 'https://www.hilton.com/en/hotels/slksnqq-hotel-saranac/?SEO_id=GMB-AMER-QQ-SLKSNQQ&y_source=1_ODMyMDI4NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D',
        name: 'Hotel Saranac',
        address1: '100 Main St, ',
        address2: 'Saranac Lake, NY 12983',
        mapsLink: 'https://goo.gl/maps/vFCNNMBWuHqpcPYK7',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1d/b9/ba/hotel-saranac-curio-collection.jpg?w=700&h=-1&s=1',
    }

    const saranacWaterfront: LodgingModel = {
        url: 'https://www.saranacwaterfrontlodge.com/?utm_campaign=Google%20My%20Business&utm_source=Google&utm_medium=Local%20Search',
        name: 'Saranac Waterfront Lodge',
        address1: '250 Lake Flower Ave,',
        address2: 'Saranac Lake, NY 12983',
        mapsLink: 'https://goo.gl/maps/Vba29qdQbUT1sYz29',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/323253067.jpg?k=167c4f167a1b0b46071a0b31e0de51b07087559cafd5dfbd7f0e485753bacbea&o=&hp=1'
    }

    const franklinManor: LodgingModel = {
        url: 'https://www.franklinmanorbnb.com/',
        name: 'Franklin Manor',
        address1: '8 Franklin Ave,',
        address2: 'Saranac Lake, NY 12983',
        mapsLink: 'https://www.google.com/maps/place/Franklin+Manor+Bed+%26+Breakfast/@44.3248055,-74.1244571,15z/data=!4m2!3m1!1s0x0:0x86e451f44676ac85?sa=X&ved=2ahUKEwjysbWdyub8AhXAAzQIHf_NCWEQ_BJ6BAhlEAc',
        imageUrl: 'https://content.mediastg.net/dyna_images/mls/5101/163676.jpgx?d=0'
    }


    const bestWestern: LodgingModel = {
        url: 'https://www.bestwestern.com/en_US/book/hotel-rooms.33116.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:33116',
        name: 'Best Western',
        address1: '487 Lake Flower Ave,',
        address2: 'Saranac Lake, NY 12983',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/b8/f4/7b/exterior.jpg?w=700&h=-1&s=1',
        mapsLink: 'https://goo.gl/maps/j6fbafMbuPbWqqdH8'
    }

    const saraPlacid: LodgingModel = {
        url: 'https://www.saraplacid.com/',
        name: 'Sara Placid',
        address1: '445 Lake Flower Ave,',
        address2: 'Saranac Lake, NY 12983',
        mapsLink: 'https://goo.gl/maps/MAk8QYg1Jta683xc7',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max500/172374697.jpg?k=1e5d9a31cd1d152139178a726b57bfdc39cf83fef91b452b16d00959f6acd4c5&o=&hp=1'
    }

    const c: LodgingModel = {
        url: '',
        name: '',
        address1: '',
        address2: ''
        , mapsLink: '',
        imageUrl: ''
    }


    return (
        <RowDiv>
            <LodgingHeader />
            <LodgingButton lodgingOption={hotelSaranac} />
            <LodgingButton lodgingOption={saranacWaterfront} />
            <LodgingButton lodgingOption={franklinManor} />
            <LodgingButton lodgingOption={bestWestern} />
            <LodgingButton lodgingOption={saraPlacid} />

        </RowDiv>
    )

}

export default Lodging

