
export default async (num: number): Promise<Array<string>> => {
	const quotes = [] as Array<string>;

	for (let i = 0; i < num; i++) {
		const response = await fetch('https://favqs.com/api/qotd');
		const responseJson = await response.json();
		const text = responseJson?.quote.body;

		quotes.push(text);
	}

	return quotes;
};
