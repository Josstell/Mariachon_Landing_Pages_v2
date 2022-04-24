import Image from "next/image"
import React from "react"
import { isMobile } from "react-device-detect"

const Dispo = () => {
	return (
		<div className=" w-full h-[100vh] relative  flex flex-col justify-center items-end	">
			<Image
				className="-z-10"
				src={
					isMobile
						? `/images/queretaro/mariachisenpuebla_mobile.jpg`
						: "/images/queretaro/preciosmariachisenqueretaro.jpg"
				}
				layout="fill"
				alt=""
				objectFit="contain"
			/>
			<button className="mr-4 px-20 py-3 cursor-pointer	 border-4 rounded-full text-center text-white 	">
				Disponibilidad
			</button>
		</div>
	)
}

export default Dispo
