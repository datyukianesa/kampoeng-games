import * as React from "react"
import Layout from "../components/Layout.js"
import Split from "../components/Split"
import Aside from "../components/Aside"
import Heading from "../components/Heading"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"

import HeroImage from "../svg/HeroImage"

const IndexPage = () => {
  return (
    <Layout>
      <Split
        id="home"
        reverse
        first={
          <Aside
            className={`bg-secondary flex flex-col text-center p-5 mt-0 lg:mx-20 xl:mx-36`}
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
              className={`font-gothic m-2 p-5 border-2 border-white text-white`}
              to="#home"
            >
              ORDER NOW
            </Button>
          </Aside>
        }
        second={
          <div>
            <HeroImage className={`lg:m-5`} />
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
    </Layout>
  )
}

export default IndexPage
