import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterLanding = ({ data, icons }) => {
  return (
    <div className="w-full h-[50vh] bg-white flex flex-col justify-end	">
      <div className=" flex justify-center xl:justify-start xl:ml-20 xl:mb-20 items-center mb-8">
        <a
          href={icons.facebook.metadata.page}
          className="px-1 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={icons.facebook.url}
            alt={icons.facebook.metadata.description}
            layout="fixed"
            width="50"
            height="50"
          />
        </a>
        <a
          href={icons.instagram.metadata.page}
          className="px-1 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={icons.instagram.url}
            alt={icons.instagram.metadata.description}
            layout="fixed"
            width="50"
            height="50"
          />{' '}
        </a>

        <a
          href={icons.whatsapp.metadata.page}
          className="px-1 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={icons.whatsapp.url}
            alt={icons.whatsapp.metadata.description}
            layout="fixed"
            width="50"
            height="50"
          />
        </a>
      </div>

      <div>
        <Link href="/aviso-privacidad" passHref>
          <p className="font-serif text-center font-light	 xl:text-right  mb-4 xl:mr-20	text-[11px]	2xl:text-base cursor-pointer">
            {data.copyright.textC}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default FooterLanding
