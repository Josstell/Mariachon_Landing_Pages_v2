import Image from "next/image"
import Link from "next/link"
import React from "react"

const Dispo = ({ data }) => {
	return (
		<div className=" w-full h-[60vh] relative  flex flex-col justify-center items-end	">
			<Image
				className="-z-10"
				// src={
				// 	isMobile
				// 		? `/images/queretaro/mariachisenpuebla_mobile.jpg`
				// 		: "/images/queretaro/preciosmariachisenqueretaro.jpg"
				// }
				src={data.image.url}
				layout="fill"
				alt={data.image.metadata.description}
				objectFit="cover"
			/>
			<Link href="#formulario" scroll={false}>
				<a
					type="button"
					className="cursor-pointer mr-4 px-8 py-2 xl:py-4 xl:px-12 border-2 hover:bg-white/[.2] text-center text-white hover:text-white/[0.9] rounded-full  xl:text-2xl lg:mr-40	2xl:text-4xl 2xl:border-8 2xl:px-36 2xl:py-6
				z-10"
				>
					{data.button.textB}
				</a>
			</Link>
		</div>
	)
}

export default Dispo
