import Image from "next/image"
import { isMobile } from "react-device-detect"

const Navbar = ({ data }) => {
	console.log("Logo:   ", data)
	return (
		<div className="flex justify-center  w-full h-24  sm:bg-white/[.15] sm:justify-start sm:pl-5 z-10	">
			<div className="pl-0 mt-7 sm:mt-1 pt-[1px] ">
				{isMobile ? (
					<Image
						src={data.url}
						alt={data.metadata.description}
						layout="fixed"
						width={183}
						height={80}
					/>
				) : (
					<Image
						src={data.url}
						alt={data.metadata.description}
						layout="fixed"
						width={183}
						height={80}
					/>
				)}
			</div>
		</div>
	)
}

export default Navbar
