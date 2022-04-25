import React from "react"

const Section01 = () => {
	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#05117F]">
			<div className="flex flex-col lg:flex-row">
				<h1 className=" font-sans text-white font-black text-center text-[50px] 2xl:text-9xl ">
					Mariachis&nbsp;
				</h1>

				<h1 className=" font-sans text-white font-black text-center text-[50px] 2xl:text-9xl">
					en Queretaro
				</h1>
			</div>
			<p className="font-sans  w-11/12 px-5  text-white text-center text-[30px] mt-10 2xl:text-5xl">
				Mariachon plataforma líder para la contratación de mariachis en tu
				ciudad.
			</p>
		</div>
	)
}

export default Section01
