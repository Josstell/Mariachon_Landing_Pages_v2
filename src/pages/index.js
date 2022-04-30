import Link from 'next/link'
import Head from 'next/head'

import { database } from '../helpers/database'

export async function getStaticProps() {
  return {
    props: {
      data: database,
    },
  }
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Mariachon</title>
        <link rel="icon" href="/icons/logomariachon.png" />
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
