import Head from 'next/head'

import { database, databaseHome } from '../helpers/database'
import Header from 'src/components/LandingPages/Header'
import Navbar from 'src/components/Navbar'
import SearchGral from 'src/components/Search'
import Section01 from 'src/components/Home/Secction01'
import Section02 from 'src/components/Home/Section02'
import Dispo from 'src/components/Home/Dispo'
import FooterLanding from 'src/components/LandingPages/Footer'
import client from '@lib/sanity'

const query = `*[_type == "regions"]{
  _id,
  region,
  slug
}`

export async function getStaticProps() {
  const regions = await client.fetch(query)


  return {
    props: {
      data: database,
      home: databaseHome,
      regions: regions,
    },
  }
}

export default function Home({ home, regions }) {
    console.log('REgiones: ', regions)

  return (
    <>
      <Head>
        <title>Mariachon</title>
        <link rel="icon" href="/icons/mariachonapp.png" />
      </Head>
      <Header data={home.header} isHome>
        <Navbar data={home.icons.logo} isHome={true} />

        <div className="z-30 my-5">
          <h1 className="text-bold font-[Comfortaa] text-center text-5xl text-slate-50 mb-2">
            {home.header.title}
          </h1>
          <h3 className=" text-2xl font-[inter] text-center text-slate-50 mb-2">
            {home.header.slogan}
          </h3>
          <SearchGral regions={regions} />
        </div>
        <div></div>
      </Header>
      <Section01 data={home.section_01} />
      <Section02 data={home.section_02} />
      <Dispo data={home.dispo} />
      <FooterLanding data={home.footer} icons={home.icons} />
    </>
  )
}
