import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as projects, o as PageIntro, s as ProjectCard } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets.index-XJAMnCqe.js
var import_jsx_runtime = require_jsx_runtime();
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "PROJETS / CAS CONCRETS",
		title: "Derrière chaque ligne de code, un enjeu réel.",
		description: "Applications bancaires, progiciel d’assurance et plateforme santé. Des contributions concrètes, décrites sans chiffres d’impact inventés."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section wrap pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-7 text-xs leading-6 text-muted-foreground",
			children: "Les schémas sont des illustrations conceptuelles, pas des captures des applications ni des représentations des architectures confidentielles."
		})]
	})] });
}
//#endregion
export { Projects as component };
