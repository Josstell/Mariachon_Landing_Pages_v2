import Image from "next/image"
import React from "react"
import { isMobile } from "react-device-detect"

const Dispo = () => {
	return (
		<div className=" w-full h-[60vh] relative  flex flex-col justify-center items-end	">
			<Image
				className="-z-10"
				// src={
				// 	isMobile
				// 		? `/images/queretaro/mariachisenpuebla_mobile.jpg`
				// 		: "/images/queretaro/preciosmariachisenqueretaro.jpg"
				// }
				src="/images/queretaro/preciosmariachisenqueretaro.jpg"
				layout="fill"
				alt=""
				objectFit="cover"
			/>
			<button className="mr-4 px-8 py-2 xl:py-4 xl:px-12 cursor-pointer	 border-2 rounded-full text-center text-white xl:text-2xl xl:mr-40	2xl:text-4xl 2xl:border-8 2xl:px-36 2xl:py-6">
				Disponibilidad
			</button>
		</div>
	)
}

export default Dispo
