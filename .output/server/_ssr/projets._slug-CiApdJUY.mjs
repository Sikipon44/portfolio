import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as projects, m as pageHead } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets._slug-CiApdJUY.js
var $$splitComponentImporter = () => import("./projets._slug-DWroUT2D.mjs");
var Route = createFileRoute("/projets/$slug")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => pageHead(loaderData?.name || "Projet indisponible", loaderData?.description || "Projet de Fourat Nefoussi."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
