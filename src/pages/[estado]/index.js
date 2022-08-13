/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import Head from 'next/head'

import Dispo from '../../components/LandingPages/Dispo'
import FooterLanding from '../../components/LandingPages/Footer'
import Header from '../../components/LandingPages/Header'
import Section01 from '../../components/LandingPages/Section01'
import Section02 from '../../components/LandingPages/Section02'

import { database } from '../../helpers/database'
import Navbar from 'src/components/Navbar'
import FormLanding from 'src/components/Forms/FormLanding'
import client from '@lib/sanity'

const region = ({ data, dataS }) => {
  const router = useRouter()
  //const recaptchaRef = useRef(null)

  if (router.isFallback) {
    return <div>CARGANDO... </div>
  }

  console.log('Datoslocal: ', data)
  console.log('DatosSanity: ', dataS)

  return (
    <>
      <Head>
        <title>Mariachis en {dataS.region}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/mariachonapp.png" />

        <meta name="description" content={dataS.seo.description} />

        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content={`Mariachis en ${dataS.region}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://mariachon.com/${dataS.slug}`}
        />
        <meta
          property="og:image"
          content="https://mariachon.com/_next/image?url=%2Fimages%2Fqueretaro%2Fmariachisenqueretaro.jpg&w=2048&q=75"
        />
        <meta property="og:description" content={dataS.seo.og_description} />
        <meta name="keywords" content={dataS.seo.keywords} />
      </Head>
      <Header data={dataS.header}>
        <Navbar data={data.icons.logo} />
        <FormLanding data={dataS.header.form} region={dataS.region} />
      </Header>

      <Section01 data={dataS.secion1.title} />
      <Section02 data={dataS.secion2.title} />

      <Dispo data={dataS.dispo} />
      <FooterLanding data={dataS.footer} icons={data.icons} />
    </>
  )
}

export async function getStaticPaths() {
  const query = `*[_type == "regions"]{
  slug
}`

  const databaseSanity = await client.fetch(query)

  const paths = await databaseSanity.map((path) => ({
    params: { estado: path.slug.toString() },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const query = `*[_type == 'regions' && slug==$slug]`

  const data = await database.filter(
    (est) => est.slug.toString() === 'mariachisenqueretaro'
  )

  const databaseSanity = await client.fetch(query, {
    slug: params.estado,
  })

  return {
    props: { data: data[0], dataS: databaseSanity[0] }, // will be passed to the page component as props
  }
}

export default region
