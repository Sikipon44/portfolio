import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowLeft, m as Check } from "../_libs/lucide-react.mjs";
import { c as ProjectVisual, o as PageIntro, t as Button } from "./shared-DUd5QAgG.mjs";
import { t as Route } from "./projets._slug-CiApdJUY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets._slug-DWroUT2D.js
var import_jsx_runtime = require_jsx_runtime();
function Project() {
	const p = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: p.client,
		title: p.name,
		description: p.title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section wrap pt-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				className: "mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projets",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Tous les projets"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, { project: p }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_300px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: "Contexte & contributions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-description mb-7",
						children: p.description
					}),
					p.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-1 shrink-0 text-primary",
							size: 16
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-description",
							children: d
						})]
					}, d))
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-5",
						children: "ENVIRONNEMENT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-sm text-muted-foreground",
						children: p.context
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tag",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 text-xs leading-6 text-muted-foreground",
						children: "Schéma conceptuel. Aucun code ni donnée propriétaire n’est publié."
					})
				] })]
			})
		]
	})] });
}
//#endregion
export { Project as component };
