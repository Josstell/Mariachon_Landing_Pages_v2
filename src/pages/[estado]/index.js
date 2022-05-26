/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import Head from 'next/head'

import Dispo from '../../components/LandingPages/Dispo'
import FooterLanding from '../../components/LandingPages/Footer'
import Header from '../../components/LandingPages/Header'
import Section01 from '../../components/LandingPages/Section01'
import Section02 from '../../components/LandingPages/Section02'

import { database } from '../../helpers/database'

const region = ({ data }) => {
  const router = useRouter()
  //const recaptchaRef = useRef(null)

  if (router.isFallback) {
    return <div>CARGANDO... </div>
  }

  return (
    <>
      <Head>
        <title>Mariachis en {data.region}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/mariachonapp.png" />

        <meta name="description" content={data.SEO.description} />

        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content={`Mariachis en ${data.region}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://mariachon.com/${data.slug}`}
        />
        <meta
          property="og:image"
          content="hhttps://mariachon.com/_next/image?url=%2Fimages%2Fqueretaro%2Fmariachisenqueretaro.jpg&w=2048&q=75"
        />
        <meta property="og:description" content={data.SEO.og_description} />
        <meta name="keywords" content={data.SEO.keywords} />
      </Head>
      <Header data={data.header} icons={data.icons} region={data.region} />

      <Section01 data={data.section_01} />
      <Section02 data={data.section_02} />

      <Dispo data={data.pre_footer} />
      <FooterLanding data={data.footer} icons={data.icons} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = await database.map((path) => ({
    params: { estado: path.slug.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await database.filter(
    (est) => est.slug.toString() === params.estado
  )
  return {
    props: { data: data[0] }, // will be passed to the page component as props
  }
}

export default region
