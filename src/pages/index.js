import * as React from "react"
import Section from "../components/Section"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Split from "../components/Split"
import Aside from "../components/Aside"
import Heading from "../components/Heading"
import Button from "../components/Button"

import HeroImage from "../svg/HeroImage"

const IndexPage = () => {
  return (
    <Layout>
      <Split
        id="home"
        reverse
        first={
          <Aside
            className={`bg-secondary text-white p-10 text-center lg:px-20 lg:py-5 lg:mx-20`}
          >
            <Heading className={`text-white font-extrabold`}>
              Toko Kebutuhan Gaming Terlengkap di Indonesia
            </Heading>
            <p>
              Para gamers yang ingin mengerjakan hobi mereka di dunia gaming
              dapat mengunjungi toko kami untuk memenuhi segala kebutuhan mereka
              dengan harga terjangkau.
            </p>
            <Button className={`font-gothic hidden md:inline`} to="#home">
              ORDER NOW
            </Button>
          </Aside>
        }
        second={<HeroImage />}
      ></Split>
      <Section id="profile" head={"Profile Perusahaan"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores enim
          libero veniam officia! Nisi dolorum, necessitatibus, consequuntur
          dignissimos aliquam, sapiente est numquam molestias unde sunt sit
          ipsam voluptates iure consequatur minima modi? Animi rem, molestias
          repellendus voluptas ullam veritatis officiis necessitatibus a
          sapiente quas perspiciatis! Quae sed itaque commodi, dolorem mollitia
          veniam nulla reprehenderit deleniti corrupti voluptatibus impedit
          tempore doloribus? Id deserunt numquam ipsa odio beatae repudiandae
          accusamus ab quidem. Eveniet nulla et impedit repudiandae ipsum quia
          expedita praesentium nam quam laboriosam qui maxime unde alias
          delectus, fugit excepturi dolor corrupti quibusdam amet consequatur
          enim non, perspiciatis reiciendis! Tenetur, quidem.
        </p>
      </Section>
      <Section id="about" head={"Tentang Perusahaan"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores enim
          libero veniam officia! Nisi dolorum, necessitatibus, consequuntur
          dignissimos aliquam, sapiente est numquam molestias unde sunt sit
          ipsam voluptates iure consequatur minima modi? Animi rem, molestias
          repellendus voluptas ullam veritatis officiis necessitatibus a
          sapiente quas perspiciatis! Quae sed itaque commodi, dolorem mollitia
          veniam nulla reprehenderit deleniti corrupti voluptatibus impedit
          tempore doloribus? Id deserunt numquam ipsa odio beatae repudiandae
          accusamus ab quidem. Eveniet nulla et impedit repudiandae ipsum quia
          expedita praesentium nam quam laboriosam qui maxime unde alias
          delectus, fugit excepturi dolor corrupti quibusdam amet consequatur
          enim non, perspiciatis reiciendis! Tenetur, quidem.
        </p>
      </Section>
      <Section id="team" head={"Tim Kami"}>
        <Card head="Fanni Fadhila">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae nam, aliquid perferendis maiores labore corrupti? Mollitia,
          maiores expedita. Cumque.
        </Card>
        <Card head="Fanni Fadhila">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae nam, aliquid perferendis maiores labore corrupti? Mollitia,
          maiores expedita. Cumque.
        </Card>
        <Card head="Fanni Fadhila">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae nam, aliquid perferendis maiores labore corrupti? Mollitia,
          maiores expedita. Cumque.
        </Card>
        <Card head="Fanni Fadhila">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae nam, aliquid perferendis maiores labore corrupti? Mollitia,
          maiores expedita. Cumque.
        </Card>
      </Section>
      <Section id="services" head={"Produk dan Layanan"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores enim
          libero veniam officia! Nisi dolorum, necessitatibus, consequuntur
          dignissimos aliquam, sapiente est numquam molestias unde sunt sit
          ipsam voluptates iure consequatur minima modi? Animi rem, molestias
          repellendus voluptas ullam veritatis officiis necessitatibus a
          sapiente quas perspiciatis! Quae sed itaque commodi, dolorem mollitia
          veniam nulla reprehenderit deleniti corrupti voluptatibus impedit
          tempore doloribus? Id deserunt numquam ipsa odio beatae repudiandae
          accusamus ab quidem. Eveniet nulla et impedit repudiandae ipsum quia
          expedita praesentium nam quam laboriosam qui maxime unde alias
          delectus, fugit excepturi dolor corrupti quibusdam amet consequatur
          enim non, perspiciatis reiciendis! Tenetur, quidem.
        </p>
      </Section>
      <Section id="contacts" head={"Contact us!"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores enim
          libero veniam officia! Nisi dolorum, necessitatibus, consequuntur
          dignissimos aliquam, sapiente est numquam molestias unde sunt sit
          ipsam voluptates iure consequatur minima modi? Animi rem, molestias
          repellendus voluptas ullam veritatis officiis necessitatibus a
          sapiente quas perspiciatis! Quae sed itaque commodi, dolorem mollitia
          veniam nulla reprehenderit deleniti corrupti voluptatibus impedit
          tempore doloribus? Id deserunt numquam ipsa odio beatae repudiandae
          accusamus ab quidem. Eveniet nulla et impedit repudiandae ipsum quia
          expedita praesentium nam quam laboriosam qui maxime unde alias
          delectus, fugit excepturi dolor corrupti quibusdam amet consequatur
          enim non, perspiciatis reiciendis! Tenetur, quidem.
        </p>
      </Section>
    </Layout>
  )
}

export default IndexPage
