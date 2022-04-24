import Image from "next/image"
import React from "react"
import FormLanding from "../../Forms/FormLanding"
import Navbar from "../../Navbar"
import { isMobile } from "react-device-detect"

//width={1920} height={1080}
const Header = ({ data }) => {
	console.log("daros", data)
	return (
		<div className="move-image relative sm:no-move-image flex flex-col justify-between items-center	 h-[100vh] bg-black ">
			<Image
				// src={
				// 	isMobile ? `/images/queretaro/mariachon_mobile.jpg` : `${data.img}`
				// }
				src={data.img}
				layout="fill"
				alt=""
				objectFit="cover"
			/>
			<Navbar />
			<FormLanding />
		</div>
	)
}

export default Header
