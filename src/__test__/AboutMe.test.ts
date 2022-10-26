import { render } from "@testing-library/svelte";
import '@testing-library/jest-dom';
import AboutMe from "../routes/about/AboutMe.svelte";
/**
 * @jest-environment jsdom
 */

test("should render", () => {
  const results = render(AboutMe);

  expect(() => results.getByText("About Me")).not.toThrow();
});