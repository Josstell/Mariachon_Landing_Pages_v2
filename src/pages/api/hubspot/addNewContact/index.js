const addNewContact = (req, res) => {
	if (req.method !== "POST") {
		return res.status(400).json({ error: "Method not allowed" })
	}

	/// .toLocaleString('mx')

	const dataSend = req.body

	console.log("hubSpot", dataSend)

	const bodyHub = {
		properties: [
			{
				property: "email",
				value: dataSend.email,
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
		],
	}

	console.log("hubSpot", bodyHub)

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
			.then((response) => response.json())
			.then((data) => res.status(200).json(data))
			.catch((error) => res.status(400).json(error))
	}
}

export default addNewContact
