import Airtable from "airtable";

export async function POST(request) {
	const {
		firstName,
		lastName,
		email,
		phone,
		country,
		state,
		city,
		zipCode,
		service,
		message,
	} = await request.json();

	const base = new Airtable({
		apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
	}).base(process.env.AIRTABLE_BASE_ID);

	try {
		const records = await base(process.env.AIRTABLE_TABLE_ID).create([
			{
				fields: {
					first_name: firstName,
					last_name: lastName,
					email,
					phone,
					country,
					state,
					city,
					zip_code: zipCode,
					service,
					message,
				},
			},
		]);
		return new Response(
			JSON.stringify({
				message: "Form data stored successfully",
				records,
			})
		);
	} catch (error) {
		console.error("Error storing data in Airtable", error);
		return new Response(
			JSON.stringify({ error: "Failed to store form data" })
		);
	}
}
