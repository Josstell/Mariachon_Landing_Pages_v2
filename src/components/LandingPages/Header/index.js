import Image from "next/image"
import React from "react"
import FormLanding from "../../Forms/FormLanding"
import Navbar from "../../Navbar"
//width={1920} height={1080}
const Header = ({ data }) => {
	console.log("daros", data)
	return (
		<div className="flex flex-col justify-between items-end	w-full h-screen bg-green-800 ">
			<Image src={data.img} layout="fill" alt="" objectFit="cover" />
			<Navbar />
			<FormLanding />
		</div>
	)
}

export default Header
