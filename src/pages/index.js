import { useState, useRef } from "react"
import Link from "next/link"
import Head from "next/head"
import HCaptcha from "@hcaptcha/react-hcaptcha"

const data = [
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
	const [email, setEmail] = useState("")
	const hcaptchaRef = useRef(null)

	const handleChange = ({ target: { value } }) => {
		setEmail(value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// Execute the hCaptcha when the form is submitted
		hcaptchaRef.current.execute()
	}

	const onHCaptchaChange = async (captchaCode) => {
		// If the hCaptcha code is null or undefined indicating that
		// the hCaptcha was expired then return early
		if (!captchaCode) {
			return
		}
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				body: JSON.stringify({ email, captcha: captchaCode }),
				headers: {
					"Content-Type": "application/json",
				},
			})
			if (response.ok) {
				// If the response is ok than show the success alert
				alert("Email registered successfully")
			} else {
				// Else throw an error with the message returned
				// from the API
				const error = await response.json()
				throw new Error(error.message)
			}
		} catch (error) {
			alert(error?.message || "Something went wrong")
		} finally {
			// Reset the hCaptcha when the request has failed or succeeeded
			// so that it can be executed again if user submits another email.
			setEmail("")
		}
	}

	return (
		<>
			<Link
				href={{
					pathname: "/[slug]",
					query: { slug: data[0].region },
				}}
			>
				<a className="text-3xl font-bold underline">queretaro</a>
			</Link>
			<div className="container">
				<Head>
					<title>hCaptcha with Next</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div id="feedback-form">
					<h2 className="header">Hello hCaptcha</h2>
					<div>
						<form onSubmit={handleSubmit}>
							<HCaptcha
								id="test"
								size="invisible"
								ref={hcaptchaRef}
								sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
								onVerify={onHCaptchaChange}
							/>
							<input
								onChange={handleChange}
								required
								type="email"
								name="email"
								placeholder="Email"
							/>
							<button type="submit">Register</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
