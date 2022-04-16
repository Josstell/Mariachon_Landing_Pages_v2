import Image from "next/image"
import React from "react"
import Navbar from "../../Navbar"
//width={1920} height={1080}
const Header = ({ data }) => {
	console.log("daros", data)
	return (
		<div className=" w-full h-screen bg-green-800 ">
			<Navbar />
			<Image src={data.img} layout="fill" objectFit="cover" />
		</div>
	)
}

export default Header
