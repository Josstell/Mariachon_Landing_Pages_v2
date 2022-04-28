const addNewContact = (req, res) => {
	function handleErrors(response) {
		if (!response.ok) {
			throw Error({ status: response.status, response })
		}
		return response
	}

	if (req.method !== "POST") {
		return res.status(400).json({ error: "Method not allowed" })
	}

	/// .toLocaleString('mx')

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}

	const dataSend = req.body

	const dateOfEvent = new Date(req.body.dateOfEvent)

	console.log("hubSpot data:", dataSend)

	const bodyHub = {
		properties: [
			{
				property: "email",
				value:
					dataSend.email !== ""
						? dataSend.email
						: `sin_correo${dataSend.id}@gmail.com`,
			},
			{
				property: "firstname",
				value: dataSend.name,
			},
			{
				property: "lastname",
				value: "",
			},
			{
				property: "website",
				value: `http://mariachon.com/${dataSend.region}`,
			},
			{
				property: "company",
				value: "Mariachon",
			},
			{
				property: "phone",
				value: dataSend.tel,
			},

			{
				property: "city",
				value: dataSend.city,
			},
			{
				property: "state",
				value: dataSend.region,
			},
			{
				property: "event_date",
				value: dateOfEvent.toLocaleDateString("es-MX", options),
			},
			{
				property: "event_time",
				value: dataSend.timeOfEvent,
			},
		],
	}

	if (req.method === "POST") {
		fetch(
			`https://api.hubapi.com/contacts/v1/contact/?hapikey=${process.env.API_KEY_HUBSPOT}`,
			{
				method: "POST", //
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(bodyHub),
			}
		)
			.then(handleErrors)
			.then((response) => {
				res.status(200).json({
					message_from_us: `La información ha sido agregada a hubSpot...`,
					response,
				})
			})
			.catch((error) => {
				console.log(error)
				res.status(error.status).json(error)
			})
	}
}

export default addNewContact
