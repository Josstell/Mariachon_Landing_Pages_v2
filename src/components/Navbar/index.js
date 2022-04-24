import Image from "next/image"
import { isMobile } from "react-device-detect"

const Navbar = () => {
	console.log("Mobile".isMobile)
	return (
		<div className="flex justify-center w-full h-10 lg:bg-white/[.15] z-10	">
			<div className="pl-0 mt-7 pt-[1px] ">
				{isMobile ? (
					<Image
						src="/icons/logomariachon.png"
						alt=""
						layout="fixed"
						width={183}
						height={80}
					/>
				) : (
					<Image
						src="/icons/logomariachon.png"
						alt=""
						layout="fixed"
						width={61}
						height={21}
					/>
				)}
			</div>
		</div>
	)
}

export default Navbar
