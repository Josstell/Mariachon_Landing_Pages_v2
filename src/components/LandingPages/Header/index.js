import Image from "next/image"
import React from "react"
import FormLanding from "../../Forms/FormLanding"
import Navbar from "../../Navbar"
//width={1920} height={1080}
const Header = ({ data }) => {
	console.log("daros", data)
	return (
		<div className=" relative flex flex-col justify-between items-end	 h-[100vh] bg-black ">
			<Image src={data.img} layout="fill" alt="" objectFit="cover" />
			<Navbar />
			<FormLanding />
		</div>
	)
}

export default Header
