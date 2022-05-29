import Image from 'next/image'
import { isMobile } from 'react-device-detect'

const Navbar = ({ data, isHome }) => {
  return (
    <div
      className={`flex justify-center  w-full h-24   sm:justify-start sm:pl-5 z-10 ${
        !isHome ? ' bg-white/[0.15]' : 'bg-[#FFF5EB]/90'
      }	`}
    >
      <div className="pl-0 mt-2 sm:mt-1 pt-[1px] ">
        <Image
          src={data.url}
          alt={data.metadata.description}
          layout="fixed"
          width={183}
          height={80}
        />
      </div>
    </div>
  )
}

export default Navbar
