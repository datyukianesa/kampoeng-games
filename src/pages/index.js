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
import { Link } from "gatsby"

import AppstoreBadge from "../svg/AppstoreBadge"
import PlaystoreBadge from "../svg/PlaystoreBadge"
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
              <div className="flex flex-row">
                <div className={`flex-1`}>
                  <Link to="/">
                    <AppstoreBadge></AppstoreBadge>
                  </Link>
                </div>
                <div className={`flex-1 mx-9`}>
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
            loading="lazy"
            src="../images/img1.png"
            alt="Games"
          ></StaticImage>
        }
      ></Split>
      <Section id="team" className={`bg-secondary rounded-3xl`}>
        <Heading
          className={`text-center text-complementary font-extrabold py-2 lg:py-10`}
        >
          Our Team
        </Heading>
        <div className="font-extrabold">
          <div className={`flex flex-col md:flex-row md:m-2`}>
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
            <Card className={`text-center flex-1 md:mx-2`}>
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

            <Card className={`text-center flex-1 md:mx-2`}>
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
          </div>
          <div className={`flex flex-col md:flex-row md:m-2`}>
            <Card className={`text-center flex-1 md:mx-2`}>
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
            <Card className={`text-center flex-1 md:mx-2`}>
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
            <Card className={`text-center flex-1 md:mx-2`}>
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
      <Split
        id="history"
        className={`bg-gradient-to-t from-complementary to-gray-200 rounded-3xl`}
        first={
          <Aside className="py-5">
            <Paragraph className={`text-justify text-Indent pb-2`}>
              Kampoeng Games telah berdiri sejak tahun 2020, awalnya perusahaan
              kami hanya melayani pelanggan secara online lewat website dan
              aplikasi yang telah kami buat dikarenakan virus COVID-19 yang
              mengharuskan kami untuk meminimalisir interaksi sosial. Itulah
              mengapa awal berdirinya Kampoeng Games tidak memiliki toko
              langsung Namun seiringnya waktu berjalan, kami akhirnya memiliki
              toko yang terletak di Yogyakarta dan Jakarta. Dengan begitu kami
              dapat mengekspansi modal perusahaan kami. Selain itu, pelanggan
              dapat mengunjungi toko kami jika ingin berbelanja barang kami
              secara langsung.
            </Paragraph>
            <Paragraph className={`text-justify text-Indent lg:pb-2`}>
              Namun seiringnya waktu berjalan, kami akhirnya memiliki toko yang
              terletak di Yogyakarta dan Jakarta. Dengan begitu kami dapat
              mengekspansi modal perusahaan kami. Selain itu, pelanggan dapat
              mengunjungi toko kami jika ingin berbelanja barang kami secara
              langsung.
            </Paragraph>
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
            Kampoeng Games sekarang telah memiliki lebih dari 100 games dan
            voucher dari segala provider. Perusahaan kami juga telah di sponsori
            oleh berbagai perusahaan lainnya seperti Razer, G-Fuel, Microsoft,
            Playstation, Xbox, dan lain-lainnya. Dengan ini, Kampoeng Games
            merupakan toko hiburan dibidang gaming terlengkap di Indonesia.
          </Paragraph>
        }
        second={
          <div className="lg:p-5 xl:w-1/2 xl:ml-36">
            <StaticImage
              className="block"
              loading="eager"
              layout="fullWidth"
              src="../images/amogus.png"
              alt="Cover"
            ></StaticImage>
          </div>
        }
      ></Split>
      <Section id="team" className={`bg-complementary rounded-3xl mb-20`}>
        <div>
          <Heading
            className={`text-center text-secondary font-extrabold py-2 xl:ml-28 xl:mr-28`}
          >
            Visi dan Misi
          </Heading>
        </div>
        <div>
          {/* <LogoIcon className={`p-5`}></LogoIcon> */}
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
        <div className={`flex flex-col lg:-mx-10 lg:flex-row xl:mx-14`}>
          <div
            className={`bg-secondary p-4 mb-2 rounded-lg lg:flex-1 lg:mx-10`}
          >
            <Heading className={`text-center text-white font-extrabold`}>
              Misi 1
            </Heading>
            <Paragraph className={`text-white text-center`}>
              Kepuasan Pelanggan
            </Paragraph>
          </div>
          <div
            className={`bg-secondary p-4 rounded-lg lg:mb-2 lg:flex-1 lg:mx-10`}
          >
            <Heading className={`text-center text-white font-extrabold`}>
              Misi 2
            </Heading>
            <Paragraph className={`text-white text-center`}>
              Menyediakan barang dengan harga terjangkau
            </Paragraph>
          </div>
        </div>
        <div className={`flex flex-col lg:-mx-10 lg:flex-row xl:mx-14`}>
          <div
            className={`bg-secondary p-4 mt-2 rounded-lg lg:flex-1 lg:mx-10`}
          >
            <Heading className={`text-center text-white font-extrabold`}>
              Misi 3
            </Heading>
            <Paragraph className={`text-white text-center`}>
              Variasi barang yang lengkap
            </Paragraph>
          </div>
          <div
            className={`bg-secondary p-4 mt-2 rounded-lg lg:flex-1 lg:mx-10`}
          >
            <Heading className={`text-center text-white font-extrabold`}>
              Misi 4
            </Heading>
            <Paragraph className={`text-white text-center`}>
              Meningkatkan minat perusahaan luar untuk menanam modalnya di
              Indonesia
            </Paragraph>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
