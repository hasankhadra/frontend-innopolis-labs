import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { H as Header, F as Footer } from "../../chunks/Footer.js";
const Experience_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-15dw8zp h3.svelte-15dw8zp{color:#51513d}li.svelte-15dw8zp.svelte-15dw8zp{display:inline-block;text-align:center;align-items:center;margin:0% 5%}#exp.svelte-15dw8zp.svelte-15dw8zp{margin:2.5% 15%;align-items:center;text-align:center;width:70%}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"exp"}" class="${"svelte-15dw8zp"}"><h2>Experience</h2>
	<ul class="${"svelte-15dw8zp"}"><li class="${"svelte-15dw8zp"}"><h3 class="${"svelte-15dw8zp"}">Education</h3>
			<p>Innopolis University</p>
			<p>Computer Science</p>
			<p>2019-2023</p></li>
		<li class="${"svelte-15dw8zp"}"><h3 class="${"svelte-15dw8zp"}">Skills</h3>
			<p>JavaScript</p>
			<p>Typescript</p>
			<p>Blockchain</p>
			<p>Python</p></li>
		<li class="${"svelte-15dw8zp"}"><h3 class="${"svelte-15dw8zp"}">Projects</h3>
			<p>I built a casino poker game using react, smart contracts, and graphql</p>
			<p>I built a smart saving app on the ethereum blockchain</p>
			<p>I finished a 4 months data-engineering internship at Proevctus</p>
			<p>I did many more personal projects, feel free to look at my github profile for more
				information
			</p></li></ul>
</div>`;
});
const styles = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
