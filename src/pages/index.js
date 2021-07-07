import * as React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Split from "../components/Split"
import Aside from "../components/Aside"
import Heading from "../components/Heading"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Card from "../components/Card"
import ProfileImage from "../components/ProfileImage"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import AppstoreBadge from "../svg/AppstoreBadge"
import PlaystoreBadge from "../svg/PlaystoreBadge"
import HeroImage from "../svg/HeroImage"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    games: file(relativePath: { eq: "img1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    amogus: file(relativePath: { eq: "amogus.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    siteTitle: site {
      siteMetadata {
        title
      }
    }
    contentfulKGamesHomepage {
      product {
        raw
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // contentful function
  const value = JSON.parse(data.contentfulKGamesHomepage.product.raw)
  console.log(documentToReactComponents(value))

  const cardItem = [
    {
      name: "Khalif Farrel Yuandra",
      title: "Front-end Designer",
      nim: "19.11.3256",
      imgUrl: "../images/farrel.png",
    },
    {
      name: "Ignatius Tegar Saputra",
      title: "Front-end Designer",
      nim: "19.11.3298",
      imgUrl: "../images/tegar.png",
    },
    {
      name: "Bilal Muhtasyimbillah",
      title: "Front-end Designer",
      nim: "19.11.3272",
      imgUrl: "../images/gatsby-icon.png",
    },
    {
      name: "Fanni Fadhila",
      title: "Back-end Developer",
      nim: "19.11.3300",
      imgUrl: "../images/fanni.png",
    },
    {
      name: "Abyan Zhafran Daffa",
      title: "Back-end Developer",
      nim: "19.11.3252",
      imgUrl: "../images/zhafran.png",
    },
    {
      name: "Nadhira Triadha Pitaloka",
      title: "Front-end Designer",
      nim: "19.11.3270",
      imgUrl: "../images/nadhira.png",
    },
  ]

  const vision = [
    {
      title: "Misi 1",
      caption: "Kepuasan Pelanggan",
    },
    {
      title: "Misi 2",
      caption: "Menyediakan barang dengan harga terjangkau",
    },
    {
      title: "Misi 3",
      caption: "Variasi barang yang lengkap",
    },
    {
      title: "Misi 4",
      caption:
        "Meningkatkan minat perusahaan luar untuk menanam modalnya di Indonesia",
    },
  ]

  const parHistory = [
    {
      caption:
        "Kampoeng Games telah berdiri sejak tahun 2020, awalnya perusahaan kami hanya melayani pelanggan secara online lewat website dan aplikasi yang telah kami buat dikarenakan virus COVID-19 yang mengharuskan kami untuk meminimalisir interaksi sosial. Itulah mengapa awal berdirinya Kampoeng Games tidak memiliki toko langsung Namun seiringnya waktu berjalan, kami akhirnya memiliki toko yang terletak di Yogyakarta dan Jakarta. Dengan begitu kami dapat mengekspansi modal perusahaan kami. Selain itu, pelanggan dapat mengunjungi toko kami jika ingin berbelanja barang kami secara langsung.",
    },
    {
      caption:
        "Namun seiringnya waktu berjalan, kami akhirnya memiliki toko yang terletak di Yogyakarta dan Jakarta. Dengan begitu kami dapat mengekspansi modal perusahaan kami. Selain itu, pelanggan dapat mengunjungi toko kami jika ingin berbelanja barang kami secara langsung.",
    },
  ]

  const parDesc = [
    {
      caption:
        "Di Kampoeng Games, Kami menyediakan segala variasi vouchers dari berbagai provider begitu pula dengan Games. Barang games yang kami sediakan tidak hanya terpaku pada platform PC, kami sediakan pula dari platform Console seperti Playstation dan Xbox. Kami mengusahakan kelengkapan barang sehingga pelanggan puas dengan layanan kami",
    },
  ]
  return (
    <Layout>
      <Split
        id="home"
        className={`rounded-3xl`}
        firstClass={`xl:w-full`}
        reverse
        first={
          <Aside
            className={`bg-secondary text-center p-5 lg:mx-14 xl:ml-72 xl:mr-28`}
          >
            <Heading className={`text-white font-extrabold mb-2 lg:py-10`}>
              Toko Kebutuhan Gaming Terlengkap di Indonesia
            </Heading>
            <Paragraph className={`text-white mb-2`}>
              Para gamers yang ingin mengerjakan hobi mereka di dunia gaming
              dapat mengunjungi toko kami untuk memenuhi segala kebutuhan mereka
              dengan harga terjangkau.
            </Paragraph>
            <Button
              className={`font-gothic my-2 px-5 lg:p-5 border-2 border-white text-white`}
            >
              ORDER NOW
            </Button>
          </Aside>
        }
        second={
          <div>
            <HeroImage className={`p-5`} />
            <div className="hidden lg:block">
              <Heading className={`text-secondary font-bold text-center`}>
                Download App kami
              </Heading>
              <div className="grid grid-cols-2">
                <div className={`mx-auto`}>
                  <Link to="/">
                    <AppstoreBadge></AppstoreBadge>
                  </Link>
                </div>
                <div className={`mx-auto`}>
                  <Link to="/">
                    <PlaystoreBadge></PlaystoreBadge>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
      ></Split>
      <Split
        id="desc"
        className={`bg-gray-200 text-secondary rounded-3xl py-2`}
        first={
          <Aside className={`lg:space-y-5`}>
            <Heading
              className={`text-center lg:text-left font-extrabold py-2 lg:py-10`}
            >
              Dari Vouchers Hingga Games
            </Heading>
            {parDesc.map(item => {
              return (
                <Paragraph className={`text-justify mb-2`}>
                  {item.caption}
                </Paragraph>
              )
            })}
          </Aside>
        }
        second={
          <GatsbyImage
            className="xl:w-1/2 xl:ml-32"
            image={data.games.childImageSharp.gatsbyImageData}
          />
        }
      ></Split>
      <Section id="team" className={`bg-secondary rounded-3xl`}>
        <Heading
          className={`text-center text-complementary font-extrabold py-2 lg:py-10`}
        >
          Our Team
        </Heading>
        <div className="font-extrabold">
          <div className={`grid grid-cols-1 md:grid-cols-3 md:m-2`}>
            {cardItem.map(item => {
              return (
                <Card className={`text-center flex-1 md:mx-2`}>
                  <ProfileImage>
                    <StaticImage
                      className="w-20 h-20 rounded-full m-5"
                      loading="eager"
                      src="../images/farrel.png"
                      alt="Khalif Farrel"
                    ></StaticImage>
                  </ProfileImage>
                  <Heading className={`text-complementary`}>
                    {item.name}
                  </Heading>
                  <div className="py-2">
                    <Paragraph className={`text-complementary-darker`}>
                      {item.title}
                    </Paragraph>
                    <Paragraph className={`text-complementary-darker`}>
                      {item.nim}
                    </Paragraph>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>
      <Split
        id="history"
        className={`bg-gradient-to-b from-complementary rounded-3xl`}
        first={
          <Aside className="py-5">
            {parHistory.map(item => {
              return (
                <Paragraph className={`text-justify text-Indent pb-2`}>
                  {item.caption}
                </Paragraph>
              )
            })}
          </Aside>
        }
        second={
          <div className="bg-primary rounded-3xl lg:ml-20">
            <HeroImage className={`py-5 my-2`} />
          </div>
        }
      ></Split>
      <Split
        reverse
        id="products"
        className={`bg-gradient-to-b lg:bg-gradient-to-l from-complementary rounded-3xl`}
        first={
          <Paragraph className={`text-justify py-5 text-Indent lg:text-right`}>
            {documentToReactComponents(value)}
          </Paragraph>
        }
        second={
          <div className="lg:p-5 xl:w-1/2 xl:ml-36">
            <GatsbyImage
              className="block"
              image={data.amogus.childImageSharp.gatsbyImageData}
            />
          </div>
        }
      ></Split>
      <Section id="vision" className={`bg-complementary rounded-3xl mb-20`}>
        <div>
          <Heading
            className={`text-center text-secondary font-extrabold py-2 xl:ml-28 xl:mr-28`}
          >
            Visi dan Misi
          </Heading>
        </div>
        <div>
          <div
            className={`bg-secondary p-4 my-5 rounded-lg lg:mb-7 xl:ml-24 xl:mr-24`}
          >
            <Heading className={`text-center text-white font-extrabold`}>
              Visi
            </Heading>
            <Paragraph
              className={`text-white text-justify lg:ml-24 md:text-center`}
            >
              Kampoeng Games menjadi toko hiburan dibidang Gaming terbaik bagi
              masyarakat Indonesia yang dapat memenuhi segala kebutuhan hobi
              mereka.
            </Paragraph>
          </div>
        </div>
        <div className={`grid grid-cols-1 lg:-mx-10 lg:grid-cols-2 xl:mx-14`}>
          {vision.map(item => {
            return (
              <div
                className={`bg-secondary p-4 mb-2 rounded-lg lg:flex-1 lg:mx-10`}
              >
                <Heading className={`text-center text-white font-extrabold`}>
                  {item.title}
                </Heading>
                <Paragraph className={`text-white text-center`}>
                  {item.caption}
                </Paragraph>
                )
              </div>
            )
          })}
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
