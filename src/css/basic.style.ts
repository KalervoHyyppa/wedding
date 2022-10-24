import styled from 'styled-components'

export const KODiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    background-color: black;

`

export const ImagesDiv = styled.div`
    position: absolute;
    z-index: -1;
    height: 100vh;
`

export const ImageContainer = styled.div`
    background-image: url(test.jpg);
    background-position: 'center';
    background-size: 'cover';
    background-repeat: 'no-repeat';
    width: '100vw';
    height: '100vh';
`

export const BottomTextStyle = styled.h2`
    color: white;
`

export const BackgroundContainer = styled.div`
    height: 100%;
`