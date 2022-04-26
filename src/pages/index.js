import Link from "next/link"
import Head from "next/head"

import { database } from "../helpers/database"

export async function getStaticProps() {
	return {
		props: {
			data: database,
		},
	}
}

export default function Home({ data }) {
	console.log("datos: ", data)
	console.log(data[0].region)

	return (
		<>
			<Head>
				<title>hCaptcha with Next</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link
				className="text-3xl font-bold underline"
				href={`/${data[0].region}`}
			>
				queretaro
			</Link>
		</>
	)
}
