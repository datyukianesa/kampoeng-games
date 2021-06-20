import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Frame({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return <GatsbyImage image={image} />
}

export const query = graphql`
  {
    file(relativePath: { eq: "images/img1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "img1.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

//   const Image = getImage(
//     data.images.edges.find(n => {
//       return n.node.relativePath.includes(props.filename)
//     })
//   )
//   return (
//     <GatsbyImage alt={props.alt} image={Image.node.childImageSharp.fluid} />
//   )
