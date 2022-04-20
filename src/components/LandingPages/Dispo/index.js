import Image from "next/image"
import React from "react"

const Dispo = () => {
	return (
		<div className=" w-full h-[80vh] relative  flex flex-col justify-center items-end	">
			<Image
				className="-z-10"
				src="/images/queretaro/preciosmariachisenqueretaro.jpg"
				layout="fill"
				alt=""
				objectFit="cover"
			/>
			<button className="mr-36 px-10 py-1 cursor-pointer	 border-2 rounded-2xl text-center text-white 	">
				Disponibilidad
			</button>
		</div>
	)
}

export default Dispo
