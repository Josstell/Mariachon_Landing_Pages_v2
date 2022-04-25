import Image from "next/image"
import React from "react"

const FooterLanding = () => {
	return (
		<div className="w-full h-[50vh] bg-white flex flex-col justify-end	">
			<div className=" flex justify-center xl:justify-start xl:ml-20 xl:mb-20 items-center mb-8">
				<div className="px-1">
					<Image
						src="/icons/facebook.svg"
						alt=""
						layout="fixed"
						width="50"
						height="50"
					/>
				</div>
				<div className="px-1">
					<Image
						src="/icons/instagram.svg"
						alt=""
						layout="fixed"
						width="50"
						height="50"
					/>{" "}
				</div>

				<div className="px-1">
					<Image
						src="/icons/whatsapp.svg"
						alt=""
						layout="fixed"
						width="50"
						height="50"
					/>
				</div>
			</div>
			<div>
				<p className="font-serif text-center font-light	 xl:text-right  mb-4 xl:mr-20	text-[11px]	2xl:text-base">
					Todos los derechos reservados © 2022 Mariachon. Política de
					Privacidad.
				</p>
			</div>
		</div>
	)
}

export default FooterLanding
