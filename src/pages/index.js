import { data } from "autoprefixer"
import Link from "next/link"

data = [
	{
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
			image: "images/queretaro/preciosmariachisenqueretaro.jpg",
			button: {
				text: "Disponibilidad",
			},
		},
		copyright:
			"Todos los derechos reservados © 2022 Mariachon. Política de Privacidad",
	},
]

export default function Home() {
	console.log(data[0].region)
	return (
		<Link
			href={{
				pathname: "/[slug]",
				query: { slug: data[0].region },
			}}
		>
			<a className="text-3xl font-bold underline">queretaro</a>
		</Link>
	)
}
