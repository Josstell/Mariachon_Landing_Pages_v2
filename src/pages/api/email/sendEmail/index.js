import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.API_KEY_SENDING_GRID)

const newLead = (req, res) => {
	if (req.method !== "POST") {
		return res.status(400).json({ error: "Method not allowed" })
	}

	/// .toLocaleString('mx')

	const dataSend = req.body
	const templateEmail = "d-126adc937d96459eaa1b79a87fc29a82"

	let emailToSend =
		req.body.email === ""
			? ["informes@mariachon.com", "xonitg@gmail.com"]
			: ["informes@mariachon.com", "xonitg@gmail.com", req.body.email]

	if (req.method === "POST") {
		const msg = {
			to: emailToSend, // Change to your recipient
			from: " Mariachon - informes <informes@mariachon.com>", // Change to your verified sender
			// subject: dataSend.subjectDina,
			html: "hola",
			templateId: templateEmail,
			dynamic_template_data: dataSend,
		}

		sgMail
			.sendMultiple(msg)
			.then((dat) =>
				res.status(200).json({
					message: `La información ha sido enviada al correo indicado de forma exitoza, gracias...`,
					dat,
				})
			)
			.catch((error) => res.status(400).json(error))
	}
}

export default newLead
