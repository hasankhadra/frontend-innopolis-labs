import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Experience from '../routes/Experience.svelte';
/**
 * @jest-environment jsdom
 */

test('should render', () => {
	const results = render(Experience);

	expect(() => results.getByText('Education')).not.toThrow();
});
