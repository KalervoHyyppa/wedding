import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { BgImage } from "gbimage-bridge"

const MainBackground = () => {

    //     const { placeholderImage } = useStaticQuery(
    //         graphql`
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
    //     );

    // const pluginImage = getImage(placeholderImage);
    // console.log('QQQQ data', pluginImage);

    return (
        // <BgImage image={pluginImage} />
        <StaticImage
            src="../images/test.jpg"
            alt="QQ"
            style={{ height: '100vh' }}
            placeholder="blurred"
        />
    )

}


export default MainBackground

