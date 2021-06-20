import * as React from "react"

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

import HeroImage from "../svg/HeroImage"

const IndexPage = () => {
  return (
    <Layout>
      <Split
        id="home"
        className={`bg-primary-darker rounded-3xl`}
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
              <div className="grid grid-cols-2 gap-2 place-items-center">
                <Button
                  className={`border-2 border-white bg-secondary text-white  m-2 p-3`}
                >
                  Lorem ipsum
                </Button>
                <Button
                  className={`border-2 border-white bg-secondary text-white m-2 p-3`}
                >
                  Lorem ipsum
                </Button>
              </div>
            </div>
          </div>
        }
      ></Split>
      <Split
        id="desc"
        className={`bg-gray-300 text-secondary rounded-3xl py-2`}
        first={
          <Aside className={`lg:space-y-5`}>
            <Heading
              className={`text-center lg:text-left font-extrabold py-2 lg:py-10`}
            >
              Dari Vouchers Hingga Games
            </Heading>
            <Paragraph className={`text-justify mb-2`}>
              Di Kampoeng Games, Kami menyediakan segala variasi vouchers dari
              berbagai provider begitu pula dengan Games. Barang games yang kami
              sediakan tidak hanya terpaku pada platform PC, kami sediakan pula
              dari platform Console seperti Playstation dan Xbox. Kami
              mengusahakan kelengkapan barang sehingga pelanggan puas dengan
              layanan kami
            </Paragraph>
          </Aside>
        }
        second={
          <StaticImage
            className="xl:w-1/2 xl:ml-32"
            loading="eager"
            src="../images/img1.png"
            alt="Games"
          ></StaticImage>
        }
      ></Split>
      <Section className={`bg-secondary rounded-3xl`}>
        <Heading
          className={`text-center text-complementary font-extrabold py-2 lg:py-10`}
        >
          Our Team
        </Heading>
        <div className="font-extrabold flex flex-col md:flex-row">
          <div className={`md:m-2`}>
            <Card className={`text-center`}>
              <ProfileImage>
                <StaticImage
                  className="w-20 h-20 rounded-full m-5"
                  loading="eager"
                  src="../images/farrel.png"
                  alt="Khalif Farrel"
                ></StaticImage>
              </ProfileImage>
              <Heading className={`text-complementary`}>
                Khalif Farrel Yuandra
              </Heading>
              <div className="py-2">
                <Paragraph className={`text-complementary-darker`}>
                  Front-end Designer
                </Paragraph>
                <Paragraph className={`text-complementary-darker`}>
                  19.11.3256
                </Paragraph>
              </div>
            </Card>
            <Card className={`text-center`}>
              <ProfileImage>
                <StaticImage
                  className="w-20 h-20 rounded-full m-5"
                  loading="eager"
                  src="../images/tegar.png"
                  alt="Ignatius Tegar Saputra"
                ></StaticImage>
              </ProfileImage>
              <Heading className={`text-complementary`}>
                Ignatius Tegar Saputra
              </Heading>
              <div className="py-2">
                <Paragraph className={`text-complementary-darker`}>
                  Front-end Designer
                </Paragraph>
                <Paragraph className={`text-complementary-darker`}>
                  19.11.3298
                </Paragraph>
              </div>
            </Card>
          </div>
          <div className={`md:m-2`}>
            <Card className={`text-center`}>
              <ProfileImage>
                <StaticImage
                  className="w-20 h-20 rounded-full m-5"
                  loading="eager"
                  src="../images/gatsby-icon.png"
                  alt="Bilal Muhtasyimbillah"
                ></StaticImage>
              </ProfileImage>
              <Heading className={`text-complementary`}>
                Bilal Muhtasyimbillah
              </Heading>
              <div className="py-2">
                <Paragraph className={`text-complementary-darker`}>
                  Front-end Designer
                </Paragraph>
                <Paragraph className={`text-complementary-darker`}>
                  19.11.3272
                </Paragraph>
              </div>
            </Card>
            <Card className={`text-center`}>
              <ProfileImage>
                <StaticImage
                  className="w-20 h-20 rounded-full m-5"
                  loading="eager"
                  src="../images/fanni.png"
                  alt="Fanni Fadhila"
                ></StaticImage>
              </ProfileImage>
              <Heading className={`text-complementary md:pt-4 lg:pt-0`}>
                Fanni Fadhila
              </Heading>
              <div className="py-2">
                <Paragraph
                  className={`text-complementary-darker md:pt-5 lg:pt-0`}
                >
                  Back-end Developer
                </Paragraph>
                <Paragraph className={`text-complementary-darker`}>
                  19.11.3300
                </Paragraph>
              </div>
            </Card>
          </div>
          <div className={`md:m-2`}>
            <Card className={`text-center`}>
              <ProfileImage>
                <StaticImage
                  className="w-20 h-20 rounded-full m-5"
                  loading="eager"
                  src="../images/zhafran.png"
                  alt="Abyan Zhafran Daffal"
                ></StaticImage>
              </ProfileImage>
              <Heading className={`text-complementary`}>
                Abyan Zhafran Daffa
              </Heading>
              <div className="py-2">
                <Paragraph className={`text-complementary-darker`}>
                  Back-end Developer
                </Paragraph>
                <Paragraph className={`text-complementary-darker`}>
                  19.11.3252
                </Paragraph>
              </div>
            </Card>
            <Card className={`text-center`}>
              <ProfileImage>
                <StaticImage
                  className="w-20 h-20 rounded-full m-5"
                  loading="eager"
                  src="../images/nadhira.png"
                  alt="Nadhira Triadha Pitaloka"
                ></StaticImage>
              </ProfileImage>
              <Heading className={`text-complementary`}>
                Nadhira Triadha Pitaloka
              </Heading>
              <div className="py-2">
                <Paragraph className={`text-complementary-darker`}>
                  Front-end Designer
                </Paragraph>
                <Paragraph className={`text-complementary-darker`}>
                  19.11.3270
                </Paragraph>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
