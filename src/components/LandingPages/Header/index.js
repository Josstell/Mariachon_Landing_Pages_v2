import Image from 'next/image'
import React from 'react'

//width={1920} height={1080}
const Header = ({ data, children, isHome }) => {
  return (
    <div
      id="formulario"
      className={` ${
        !isHome ? 'move-image lg:items-end ' : 'move-image-home'
      } relative sm:no-move-image flex flex-col justify-between items-center	h-[100vh] bg-slate-900/5`}
    >
      <Image
        className="-z-30"
        src={data.img.url}
        alt={data.img.metadata.description}
        layout="fill"
        objectFit="cover"
      />
      {children}
    </div>
  )
}

export default Header
