import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Quotes from '../routes/randomQuotes/Quotes.svelte';
/**
 * @jest-environment jsdom
 */

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

test('should render', async () => {
	const results = render(Quotes, { numQuotes: 0 });

	await delay(1000);

	expect(() => results.getByText('loading...')).not.toThrow();
});
