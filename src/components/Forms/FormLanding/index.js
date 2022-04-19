import React from "react"
import { useState } from "react"

import { useForm } from "react-hook-form"

const FormLanding = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data) => console.log(data)
	console.log(watch())

	const [fecha, setFecha] = useState("")
	const [hora, setHora] = useState("")
	const [nombre, setNombre] = useState("")
	const [tel, setTel] = useState("")
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center z-10 w-[350px] h-[60vh] py-5 px-7 text-xs m-10 bg-[#EDEDEDBF] rounded-2xl"
		>
			<div className="mb-2">
				<h3 className="text-center text-base font-bold text-[#96090C]">
					Contrata fácil y rápido
				</h3>
			</div>

			<div className="mb-2 flex justify-around">
				<input
					type="date"
					{...register("dates", { required: true })}
					className="bg-gray-50 text-[11px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block w-full p-1 "
					placeholder="Fecha"
				/>
				<input
					type="time"
					{...register("times", { required: true })}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block w-full p-1  ml-1"
					placeholder="Hora"
				/>
			</div>
			{errors.times && (
				<span className="text-red-500 text-[10px]">
					Hora del evento es requerida.
				</span>
			)}
			{errors.dates && (
				<span className="text-red-500 text-[10px]">
					Fecha del evento es requerida.
				</span>
			)}

			<div className="mb-3">
				<input
					type="text"
					{...register("name", { required: true })}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-1 "
					placeholder="Nombre completo"
				/>
				{errors.name && (
					<span className="text-red-500 text-[10px]">Nombre requerido</span>
				)}
			</div>
			<div className="mb-3">
				<input
					type="number"
					{...register("tel", {
						required: true,
						pattern: /^[0-9\b]+$/i,
						minLength: 10,
						maxLength: 10,
					})}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-1 "
					placeholder="Número de celular."
				/>
				{errors.tel?.type === "pattern" && (
					<span className="text-red-500 text-[10px]">
						Por favor introduce solo numeros del 0-9. <br />
					</span>
				)}
				{(errors.tel?.type === "minLength" ||
					errors.tel?.type === "maxLength") && (
					<span className="text-red-500 text-[10px]">
						El numéro tiene que ser de 10 cifras. <br />
					</span>
				)}
				{errors.tel && (
					<span className="text-red-500 text-[10px]">
						Número celular es requerido.
					</span>
				)}
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
