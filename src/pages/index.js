import * as React from "react"
import Section from "../components/Section"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Tombol from "../components/Button"

const IndexPage = () => {
  return (
    <Layout>
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
        <Tombol to="/">click me</Tombol>
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
