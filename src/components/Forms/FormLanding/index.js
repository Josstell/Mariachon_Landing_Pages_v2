import React from "react"
import { useState, useRef } from "react"

import { useForm } from "react-hook-form"

import { nanoid } from "@reduxjs/toolkit"

import { isMobile } from "react-device-detect"

import { CalendarIcon, ClockIcon } from "@heroicons/react/outline"

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

	console.log("Mobilewef", isMobile)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center items-center z-10 w-10/12 sm:w-fit 2xl:w-[40vw] h-fit sm:h-[80vh] lg:h-fit py-3 sm:py-7 px-1 md:px-2  mx-2 md:mx-5  mb-3 lg:mb-10 bg-[#EDEDEDDF] rounded-[40px] sm:ml-[45vw] "
		>
			<div className="mb-1  lg:mb-8 2xl:my-10">
				<h3 className="font-sans text-center text-xl sm:text-xl lg:text-2xl 2xl:text-6xl font-bold text-[#96090C]">
					Contrata fácil y rápido
				</h3>
			</div>

			<div className="flex flex-col w-10/12		justify-between  ">
				<div className="mb-2 2xl:mb-6 w-full flex justify-between items-center">
					<input
						type="date"
						{...register("dateOfEvent", { required: true })}
						className="form-input font-sans bg-gray-50 text-[11px] md:text-[11px] 2xl:text-xl border border-gray-300 text-black  rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block  py-1  lg:py-2 2xl:py-4 w-2/4 2xl:w-2/4"
					/>
					{isMobile && <CalendarIcon className="h-5 w-5 pl-1 text-black" />}
					{isMobile ? (
						<div className="w-0"></div>
					) : (
						<div className="w-[5px]"></div>
					)}
					<input
						type="time"
						{...register("timeOfEvent", { required: true })}
						className="form-input font-sans bg-gray-50 border border-gray-300 text-black text-[12px] md:text-[11px] 2xl:text-xl rounded-lg focus:ring-[#E66400] focus:border-[#E66400] block  py-1   lg:py-2 w-2/4 2xl:w-2/4"
					/>
					{isMobile && <ClockIcon className="h-5 w-5 pl-1 text-black" />}
				</div>
				{errors.timeOfEvent && (
					<span className="font-sans text-red-500 text-[10px]">
						Hora del evento es requerida.
					</span>
				)}
				{errors.dateOfEvent && (
					<span className="font-sans text-red-500 text-[10px]">
						Fecha del evento es requerida.
					</span>
				)}
				<div className="mb-3 2xl:mb-6 ">
					<input
						type="text"
						{...register("name", { required: true })}
						className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm  2xl:text-xl  rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-2 2xl:py-4 2xl:px-5 "
						placeholder="Nombre completo."
					/>
					{errors.name && (
						<span className="text-red-500 text-[10px]">Nombre requerido</span>
					)}
				</div>
				<div className="mb-3 2xl:mb-6 ">
					<input
						type="tel"
						{...register("tel", {
							required: true,
							pattern: /^[0-9\b]+$/i,
							minLength: 10,
							maxLength: 10,
						})}
						className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm  2xl:text-xl  rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-2  2xl:py-4 2xl:px-5"
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
				<div className="mb-0 2xl:mb-6 ">
					<input
						type="email"
						{...register("email", {
							pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
						})}
						className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm  2xl:text-xl  rounded-lg focus:ring-[#B66400] focus:border-[#E66400] block w-full p-2  2xl:py-4  2xl:px-5"
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
					className="font-sans text-white bg-[#E66400] hover:bg-[#FF6400] focus:ring-4 focus:outline-none focus:ring-[#B66400] font-normal	  text-sm 2xl:text-2xl w-full sm:w-auto px-5 py-3 my-3 sm:py-1.5 2xl:py-5 sm:my-3 2xl:my-10 text-center rounded-full"
				>
					Disponibilidad
				</button>
				<p className="font-sans text-center text-[11px] 2xl:text-base m-0 py-0 px-8 sm:px-5">
					Cobertura en la ciudad de Santiago de Queretaro
				</p>
			</div>
		</form>
	)
}

export default FormLanding
