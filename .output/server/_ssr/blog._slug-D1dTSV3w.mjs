import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowLeft } from "../_libs/lucide-react.mjs";
import { o as PageIntro, t as Button } from "./shared-DUd5QAgG.mjs";
import { t as Route } from "./blog._slug-r0U8xft6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-D1dTSV3w.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const a = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: a.category,
		title: a.title,
		description: a.excerpt
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "article-content wrap",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-7 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Retour aux articles"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted-foreground",
					children: [
						a.date,
						" · ",
						a.time,
						" de lecture"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs",
				children: "Article pédagogique de démonstration · à personnaliser par Fourat Nefoussi."
			}),
			a.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: s.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.body }),
				i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: a.code }) })
			] }, s.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 border-t border-border pt-5",
				children: a.note
			})
		]
	})] });
}
//#endregion
export { Article as component };
