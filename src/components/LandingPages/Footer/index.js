import Image from "next/image"
import React from "react"

const FooterLanding = () => {
	return (
		<div className="w-full h-[50vh] bg-white flex flex-col justify-end	">
			<div className="w-[25vw] flex justify-center mb-8">
				<div className="px-1">
					<Image
						src="/icons/facebook.png"
						alt=""
						layout="fixed"
						width="20"
						height="20"
					/>
				</div>
				<div className="px-1">
					<Image
						src="/icons/instagram.png"
						alt=""
						layout="fixed"
						width="20"
						height="20"
					/>{" "}
				</div>

				<div className="px-1">
					<Image
						src="/icons/whatsapp.png"
						alt=""
						layout="fixed"
						width="20"
						height="20"
					/>{" "}
				</div>
			</div>
			<div>
				<p className="text-right mr-20 mb-2	text-[8px]	">
					Todos los derechos reservados © 2022 Mariachon. Política de
					Privacidad.
				</p>
			</div>
		</div>
	)
}

export default FooterLanding
