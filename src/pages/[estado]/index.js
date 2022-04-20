/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react"
import { useRouter } from "next/router"
import Dispo from "../../components/LandingPages/Dispo"
import FooterLanding from "../../components/LandingPages/Footer"
import Header from "../../components/LandingPages/Header"
import Section01 from "../../components/LandingPages/Section01"
import Section02 from "../../components/LandingPages/Section02"
import Navbar from "../../components/Navbar"

const estado = {
	id: 0,
	region: "Queretaro",
	header: {
		img: "/images/queretaro/mariachisenqueretaro.jpg",
		form: {
			text: "Contrata Fácil y rápido",
			button: "Disponibilidad",
			cover: "Cobertura ciudad de Santiago de Queretaro",
		},
	},
	section_01: {
		title: "Mariachis en Queretaro",
		paragraph:
			"Mariachon plataforma líder para la contratación de mariachis en tu ciudad.",
	},
	section_02: {
		title: {
			a: "Mariachis",
			b: "responsables y de confianza",
		},
		paragraph:
			"Encuentra precios y variedad de grupos según la calidad, performance e imagen.",
	},
	pre_footer: {
		image: "/images/queretaro/preciosmariachisenqueretaro.jpg",
		button: {
			text: "Disponibilidad",
		},
	},
	copyright:
		"Todos los derechos reservados © 2022 Mariachon. Política de Privacidad",
}

const region = () => {
	const router = useRouter()
	//const recaptchaRef = useRef(null)

	const { region } = router.query

	console.log(region)

	return (
		<div>
			<Header data={estado.header} />

			<Section01 />
			<Section02 />

			<Dispo />
			<FooterLanding />
		</div>
	)
}

export default region
