import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as articles, m as pageHead } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-r0U8xft6.js
var $$splitComponentImporter = () => import("./blog._slug-D1dTSV3w.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const a = articles.find((a) => a.slug === params.slug);
		if (!a) throw notFound();
		return a;
	},
	head: ({ loaderData }) => pageHead(loaderData?.title || "Article indisponible", loaderData?.excerpt || "Notes techniques de Fourat Nefoussi."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
