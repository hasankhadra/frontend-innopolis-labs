import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const AboutMe_svelte_svelte_type_style_lang = "";
const css = {
  code: "#about-me.svelte-hafghg{margin:1% 30%;align-items:center;text-align:center;width:40%}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><div id="${"about-me"}" class="${"svelte-hafghg"}"><h2>About Me</h2>
		<p>My name is Hasan Khadra, I am a senior at Innopolis University studying Computer Science. I am
			a web development and blockchain enthusiast. I am also very passionate about music, I play
			piano professionally and recently I started learning guitar.
		</p></div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
