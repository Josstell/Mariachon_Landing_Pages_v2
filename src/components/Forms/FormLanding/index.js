import React from "react"

const FormLanding = () => {
	return (
		<form className="flex flex-col justify-center z-10 w-[350px] h-[60vh] py-5 px-7 text-xs m-10 bg-[#EDEDEDBF] rounded-2xl">
			<div className="mb-2">
				<h3 className="text-center text-base font-bold text-[#96090C]">
					Contrata fácil y rápido
				</h3>
			</div>

			<div className="mb-2 flex justify-around">
				<input
					type="date"
					id="date"
					className="bg-gray-50 text-[11px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block w-full p-1 "
					placeholder="Fecha"
					required
				/>
				<input
					type="time"
					id="time"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block w-full p-1  ml-1"
					placeholder="Hora"
					required
				/>
			</div>

			<div className="mb-3">
				<input
					type="text"
					id="name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-1 "
					placeholder="Nombre completo"
					required
				/>
			</div>
			<div className="mb-3">
				<input
					type="text"
					id="tel"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-1 "
					placeholder="# Celular"
					required
				/>
			</div>

			<button
				type="submit"
				className="text-white bg-[#E66400] hover:bg-[#FF6400] focus:ring-4 focus:outline-none focus:ring-[#B66400] font-base rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center rounded-full"
			>
				Disponibilidad
			</button>
			<p className="text-center text-[11px] mt-1 px-2">
				Cobertura ciudad en la Santiago de Queretaro
			</p>
		</form>
	)
}

export default FormLanding
