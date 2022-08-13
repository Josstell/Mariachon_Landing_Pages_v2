import Image from 'next/image'
import React from 'react'
import { urlFor } from '@lib/sanity'

//width={1920} height={1080}
const Header = ({ data, children, isHome }) => {
  return (
    <div
      id="formulario"
      className={` ${
        !isHome ? 'move-image  lg:items-end ' : 'move-image-home'
      } relative sm:no-move-image flex flex-col justify-between items-center	h-[100vh] bg-slate-900/40`}
    >
      <Image
        className="-z-30"
        src={isHome ? data.img.url : urlFor(data.img.image.asset).url()}
        alt={data.img.description}
        layout="fill"
        objectFit="cover"
      />
      {children}
    </div>
  )
}

export default Header
