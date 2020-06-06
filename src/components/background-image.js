import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const Overlay = styled.div`
    opacity: 70%;
`

const TextWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const H1 = styled.h1`
    color:white;
    // font-size:2rem;
    -webkit-text-stroke-width: 0.09rem;
    -webkit-text-stroke-color: black;
    text-align:center;
    // padding-bottom: 5rem;
`

const H2 = styled.h2`
    color:white;
    // font-size: 2.5rem;
    -webkit-text-stroke-width: 0.08rem;
    -webkit-text-stroke-color: black;
    text-align:center;
    
    a {
        text-decoration:none;
    }

`


export default function({ fileName }) {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "images" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                fluid(maxWidth: 2480, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        `
    );
const image = data.placeholderImage.edges.find(
    ({ node }) => node.relativePath === fileName
).node;
if (!image) {
    return null;
}
return (
    <Overlay>
        <div style={{position: 'absolute', backgroundColor:'black' ,WebkitFilter: 'blur(2px) saturate(2)'}}>

        <BackgroundImage
            fluid={image.childImageSharp.fluid}
            style={{
                height: `100vh`,
                width: `100vw`,
                backgroundColor: `transparent`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                display: `flex`,
                alignItems: `center`,
                zIndex:'-99'
            }}
            />

            </div>
            <TextWrapper>
                <H1>Welcome to my website!</H1>
                <H2>It's still in development, but you can see some of my work on <a href="https://www.facebook.com/aliciahoflandart">Facebook</a>.</H2>
                <H2>Check back later!</H2>
            </TextWrapper>
    </Overlay>
);
}