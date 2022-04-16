import Image from "next/image"

const Navbar = () => {
	return (
		<div className="absolute  w-full h-8 bg-white/[.15] z-10	">
			<div className="pl-10 pt-[1px]">
				<Image
					src="/icons/logomariachon.png"
					layout="fixed"
					width={61}
					height={26}
				/>
			</div>
		</div>
	)
}

export default Navbar
