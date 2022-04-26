/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import Head from "next/head"

import Dispo from "../../components/LandingPages/Dispo"
import FooterLanding from "../../components/LandingPages/Footer"
import Header from "../../components/LandingPages/Header"
import Section01 from "../../components/LandingPages/Section01"
import Section02 from "../../components/LandingPages/Section02"

import { database } from "../../helpers/database"

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
				<link rel="icon" href="/icons/logomariachon.png" />
			</Head>
			<Header data={data.header} icons={data.icons} />

			<Section01 data={data.section_01} />
			<Section02 data={data.section_02} />

			<Dispo data={data.pre_footer} />
			<FooterLanding data={data.footer} icons={data.icons} />
		</>
	)
}

export async function getStaticPaths() {
	const paths = await database.map((path) => ({
		params: { estado: path.region.toString() },
	}))

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const data = await database.filter(
		(est) => est.region.toString() === params.estado
	)
	return {
		props: { data: data[0] }, // will be passed to the page component as props
	}
}

export default region
