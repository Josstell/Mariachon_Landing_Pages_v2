import Image from "next/image"
import React from "react"
import FormLanding from "../../Forms/FormLanding"
import Navbar from "../../Navbar"
//width={1920} height={1080}
const Header = ({ data, icons }) => {
	console.log("headersdvwsdv", icons.logo, data)
	return (
		<div
			id="formulario"
			className="move-image relative sm:no-move-image flex flex-col justify-between items-center	lg:items-end h-[100vh] bg-black "
		>
			<Image
				// src={
				// 	isMobile ? `/images/queretaro/mariachon_mobile.jpg` : `${data.img}`
				// }
				src={data.img.url}
				layout="fill"
				alt={data.img.metadata.description}
				objectFit="cover"
			/>
			<Navbar data={icons.logo} />
			<FormLanding data={data.form} />
		</div>
	)
}

export default Header
