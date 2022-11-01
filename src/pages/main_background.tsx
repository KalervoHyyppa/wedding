import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { BgImage } from "gbimage-bridge"


const ImageStackDiv = styled.div`
    display: grid;
`

interface Props {
    isShowing: boolean;
}

const GridDiv = styled.div<Props>`
  grid-column: 1;
  grid-row: 1;
  opacity: ${props => props.isShowing ? 100 : 0};
  transition: all 500ms linear;
`

const MainBackground = () => {

    const imageQuery =
        useStaticQuery(
            graphql`
                query {
                    gallery: allFile(filter: {relativeDirectory: {eq: "background"}}) {
                        edges {
                        node {
                            id
                            base
                            publicURL
                            childrenImageSharp {
                            gatsbyImageData(
                                transformOptions: {fit: COVER}
                                placeholder: BLURRED
                                webpOptions: {quality: 50}
                            )
                            }
                        }
                        }
                    }
                }
            `
        )

    const [imageURL1, setImageUrl1] = useState(imageQuery.gallery.edges[0].node.childrenImageSharp[0].gatsbyImageData);
    const [imageURL2, setImageUrl2] = useState(imageQuery.gallery.edges[1].node.childrenImageSharp[0].gatsbyImageData);
    const [isShowingSlide1, setIsShowingSlide1] = useState(true);


    useEffect(() => {
        let nextIndex = 1;
        let currentSlide = 0;

        // Changes slides content
        setTimeout(() => {
            setInterval(() => {
                // let nextIndex = currentImageIndex + 1
                nextIndex += 1
                const imagesLength = imageQuery.gallery.edges.length;

                if (nextIndex >= imagesLength) {
                    nextIndex = 0
                }
                if (currentSlide === 0) {
                    setImageUrl2(imageQuery.gallery.edges[nextIndex].node.childrenImageSharp[0].gatsbyImageData)

                } else {
                    setImageUrl1(imageQuery.gallery.edges[nextIndex].node.childrenImageSharp[0].gatsbyImageData)
                }

            }, 5000)
        }, 2500)

        // Changes slide visibility
        setInterval(() => {
            // If current slide is 0, then its on the 1st slide
            if (currentSlide === 0) {
                setIsShowingSlide1(false);
                currentSlide = 1;
            } else {
                setIsShowingSlide1(true);
                currentSlide = 0;
            }
        }, 5000)


    }, [])
    // const { placeholderImage } = useStaticQuery(
    //     graphql`
    //     query {
    //       placeholderImage: file(relativePath: { eq: "test.jpg" }) {
    //         childImageSharp {
    //           gatsbyImageData(
    //             placeholder: BLURRED
    //             formats: [AUTO, WEBP, AVIF]
    //             layout: FULL_WIDTH
    //             height:1
    //           )
    //         }
    //       }
    //     }
    //   `
    // );

    // console.log('QQQQ data', placeholderImage);
    // const pluginImage = getImage(placeholderImage);
    // console.log('QQQQ data', pluginImage);



    return (
        <ImageStackDiv >
            <GridDiv isShowing={isShowingSlide1}>
                <GatsbyImage style={{ height: '100vh', backgroundColor: 'black' }} image={imageURL1} alt={'Slide 1'} />
            </GridDiv>

            <GridDiv isShowing={!isShowingSlide1}>
                <GatsbyImage style={{ height: '100vh', backgroundColor: 'black' }} image={imageURL2} alt={'Slide 2'} />
            </GridDiv>
        </ImageStackDiv>
    )


}


export default MainBackground