import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Dispo = ({ data }) => {
  return (
    <div className="move-image-home-dispo w-full h-screen relative  flex flex-col justify-start items-center lg:items-end lg:justify-center	">
      <Image
        className="-z-10"
        src={data.image.url}
        layout="fill"
        alt={data.image.metadata.description}
        objectFit="cover"
      />
      <Link href="#formulario" scroll={false}>
        <a
          type="button"
          className="cursor-pointer w-52 mt-20 mr-4 px-8 py-2 lg:w-80 lg:mr-36  border-2 bg-[#E66400] text-center text-white hover:text-white/[0.9] rounded-full  lg:h-18
				z-10"
        >
          {data.button.textB}
        </a>
      </Link>
    </div>
  )
}

export default Dispo
