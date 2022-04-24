import React from "react"
import { useState, useRef } from "react"

import { useForm } from "react-hook-form"

import { nanoid } from "@reduxjs/toolkit"

import ReCAPTCHA from "react-google-recaptcha"

const FormLanding = (props) => {
	const recaptchaRef = useRef(null)

	const [dataClient, setDataClient] = useState({})

	const {
		register,
		resetField,
		handleSubmit,
		formState: { errors },
	} = useForm()
	//	const onSubmit = (data) => data

	const onSubmit = (data, e) => {
		e.preventDefault()

		setDataClient({
			...data,
			id: nanoid(),
			region: "Queretaro",
			city: "Cobertura ciudad de Santiago de Queretaro",
		})

		recaptchaRef.current.execute()
	}

	const onReCAPTCHAChange = async (captchaCode) => {
		// If the reCAPTCHA code is null or undefined indicating that
		// the reCAPTCHA was expired then return early

		if (!captchaCode) {
			return
		}
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				body: JSON.stringify({ dataClient, captcha: captchaCode }),
				headers: {
					"Content-Type": "application/json",
				},
			})
			if (response.ok) {
				// If the response is ok than show the success alert
				addLeadToGoogleSheet(dataClient)
				sendEmailToAdminAndClient(dataClient)
				addLeadToHubSpot(dataClient)
				resetForm()

				alert("Sus datos fueron bien registrados")
			} else {
				// Else throw an error with the message returned
				// from the API
				const error = await response.json()
				throw new Error(error.message)
			}
		} catch (error) {
			alert(error?.message || "Hubo un error favor de intentar más tarde.")
		} finally {
			// Reset the reCAPTCHA when the request has failed or succeeeded
			// so that it can be executed again if user submits another email.
			recaptchaRef.current.reset()

			setDataClient({})
		}
	}

	const resetForm = () => {
		resetField("dateOfEvent")
		resetField("timeOfEvent")
		resetField("tel")
		resetField("email")
		resetField("name")
	}

	const addLeadToGoogleSheet = async (Client) => {
		try {
			const response = await fetch("/api/google-sheet/add", {
				method: "POST",
				body: JSON.stringify(Client),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const validation = await response.json()

			console.log(validation.message)
		} catch (error) {}
	}

	const sendEmailToAdminAndClient = async (client) => {
		try {
			const response = await fetch("/api/email/sendEmail", {
				method: "POST",
				body: JSON.stringify(client),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const validation = await response.json()

			console.log(validation.message)
		} catch (error) {}
	}

	const addLeadToHubSpot = async (client) => {
		try {
			const response = await fetch("/api/hubspot/addNewContact", {
				method: "POST",
				body: JSON.stringify(client),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const validation = await response.json()

			console.log(validation.message)
		} catch (error) {}
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center items-center z-10 w-10/12	 h-fit py-10 px-12 text-xs mx-20  mb-20 bg-[#EDEDEDDF] rounded-[40px]"
		>
			<div className="mb-8">
				<h3 className="font-sans text-center text-2xl font-bold text-[#96090C]">
					Contrata fácil y rápido
				</h3>
			</div>

			<div className="flex flex-col w-11/12		justify-between ">
				<div className="mb-4 w-full flex justify-around">
					<input
						type="date"
						{...register("dateOfEvent", { required: true })}
						className="bg-gray-50 text-[11px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block  p-2  "
						placeholder="Fecha"
					/>
					<div className="w-[10px]"></div>
					<input
						type="time"
						{...register("timeOfEvent", { required: true })}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block  p-2  "
						placeholder="Hora"
					/>
				</div>
				{errors.timeOfEvent && (
					<span className="text-red-500 text-[10px]">
						Hora del evento es requerida.
					</span>
				)}
				{errors.dateOfEvent && (
					<span className="text-red-500 text-[10px]">
						Fecha del evento es requerida.
					</span>
				)}
				<div className="mb-4">
					<input
						type="text"
						{...register("name", { required: true })}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-2 "
						placeholder="Nombre completo."
					/>
					{errors.name && (
						<span className="text-red-500 text-[10px]">Nombre requerido</span>
					)}
				</div>
				<div className="mb-4">
					<input
						type="tel"
						{...register("tel", {
							required: true,
							pattern: /^[0-9\b]+$/i,
							minLength: 10,
							maxLength: 10,
						})}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-2 "
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
				<div className="mb-0">
					<input
						type="email"
						{...register("email", {
							pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
						})}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-2 "
						placeholder="Email (opcional)."
					/>
					{errors.email?.type === "pattern" && (
						<span className="text-red-500 text-[10px]">
							Hubo un error en su correo, favor de revizarlo. <br />
							<br />
						</span>
					)}
				</div>

				<ReCAPTCHA
					ref={recaptchaRef}
					size="invisible"
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
					onChange={onReCAPTCHAChange}
				/>

				<button
					type="submit"
					className="font-sans text-white bg-[#E66400] hover:bg-[#FF6400] focus:ring-4 focus:outline-none focus:ring-[#B66400] font-normal	  text-sm w-full sm:w-auto px-5 py-3.5 my-8 text-center rounded-full"
				>
					Disponibilidad
				</button>
				<p className="text-center text-[11px]  px-8">
					Cobertura en la ciudad de Santiago de Queretaro
				</p>
			</div>
		</form>
	)
}

export default FormLanding
