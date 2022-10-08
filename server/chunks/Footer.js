import { c as create_ssr_component, e as escape } from "./index.js";
import { b as base } from "./paths.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1aonfwl.svelte-1aonfwl{background-color:#e3dcc2;padding:1em;text-align:center}.navigation.svelte-1aonfwl.svelte-1aonfwl{padding:1em;text-align:center;font-size:x-large}.navigation.svelte-1aonfwl>a.svelte-1aonfwl{color:#51513d;text-decoration:double;margin:auto 10%}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-1aonfwl"}"><h1>Hasan Khadra Portfolio</h1>

	<h2>Blockchain and Frontend Developer</h2>
	<h2>Pianist and guitarist</h2>
	<nav class="${"navigation svelte-1aonfwl"}"><a href="${escape(base, true) + "/"}" class="${"svelte-1aonfwl"}">Home Page</a>
		<a href="${escape(base, true) + "/about"}" class="${"svelte-1aonfwl"}">About me</a>
		<a href="${escape(base, true) + "/randomFacts"}" class="${"svelte-1aonfwl"}">Random Facts</a></nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1lxc8y3.svelte-1lxc8y3{background-color:#e3dcc2;width:100%;padding:1em 0;text-align:center;align-items:center}footer.svelte-1lxc8y3>div.svelte-1lxc8y3{display:inline-block;margin:20px}footer.svelte-1lxc8y3 h2.svelte-1lxc8y3{display:block;margin:20px}.links.svelte-1lxc8y3 a.svelte-1lxc8y3{text-decoration:double}.photo.svelte-1lxc8y3.svelte-1lxc8y3{width:30px;height:30px;padding:0 15px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-1lxc8y3"}">
	<h2 class="${"svelte-1lxc8y3"}">Contact me</h2>
	<div class="${"links svelte-1lxc8y3"}" id="${"contact"}"><a class="${"photo-to-link svelte-1lxc8y3"}" href="${"https://www.instagram.com/hasan.khadra.5/"}"><img class="${"photo svelte-1lxc8y3"}" src="${"https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"}" alt="${"Instagram"}"></a>
		<a class="${"photo-to-link svelte-1lxc8y3"}" href="${"https://www.facebook.com/hasan.khadra.5"}"><img class="${"photo svelte-1lxc8y3"}" src="${"https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"}" alt="${"Facebook"}"></a>
		<a class="${"photo-to-link svelte-1lxc8y3"}" href="${"https://github.com/hasankhadra/"}"><img class="${"photo svelte-1lxc8y3"}" src="${"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-1024.png"}" alt="${"Github"}"></a></div>
</footer>`;
});
export {
  Footer as F,
  Header as H
};
