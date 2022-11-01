import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { BgImage } from "gbimage-bridge"

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

    console.log('QQQQ image query', imageQuery);
    const [imageURL, setImageUrl] = useState(imageQuery.gallery.edges[0].node.childrenImageSharp[0].gatsbyImageData);

    useEffect(() => {
        let nextIndex = 0;
        setInterval(() => {
            // let nextIndex = currentImageIndex + 1
            nextIndex += 1
            const imagesLength = imageQuery.gallery.edges.length;
            console.log('QQQQ image length', imagesLength)

            console.log('QQQQ next index before', nextIndex);
            if (nextIndex >= imagesLength) {
                nextIndex = 0
            }
            console.log('QQQQ next index after', nextIndex);


            setImageUrl(imageQuery.gallery.edges[nextIndex].node.childrenImageSharp[0].gatsbyImageData)

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
        <GatsbyImage style={{ height: '100vh', backgroundColor: 'black' }} image={imageURL} alt={'q'} />
    )
    return (

        <>
            {imageQuery.gallery.edges.map((edge: any) => {
                console.log('QQQQ node', edge);
                console.log('QQQQ child', edge.node.childrenImageSharp);
                console.log('QQQQ data', edge.node.childrenImageSharp[0].gatsbyImageData);
                return <GatsbyImage image={edge.node.childrenImageSharp[0].gatsbyImageData} alt={'q'} />
            })}
        </>

    )

}


export default MainBackground