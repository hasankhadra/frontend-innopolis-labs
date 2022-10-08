import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const RandomFacts_svelte_svelte_type_style_lang = "";
const css = {
  code: "#random-facts.svelte-150u0hq.svelte-150u0hq{display:flex;flex-direction:column;align-items:center}#random-facts.svelte-150u0hq>div.svelte-150u0hq{margin-top:14px;display:flex;flex-direction:row;align-items:center}",
  map: null
};
const RandomFacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { numFacts: numFacts2 } = $$props;
  let facts = [];
  if ($$props.numFacts === void 0 && $$bindings.numFacts && numFacts2 !== void 0)
    $$bindings.numFacts(numFacts2);
  $$result.css.add(css);
  return `<div id="${"random-facts"}" class="${"svelte-150u0hq"}"><h2>Random facts</h2>
	${facts.length ? each(facts, (element) => {
    return `<div class="${"svelte-150u0hq"}">${escape(element)}
			<img src="${"https://www.freeiconspng.com/thumbs/idea-icon/ideas-light-bulb-icon-16.png"}" alt="${"idea icon"}">
		</div>`;
  }) : `<p>loading...</p>`}
</div>`;
});
let numFacts = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Random Facts</title>`, ""}`, ""}

<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(RandomFacts, "RandomFacts").$$render($$result, { numFacts }, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
