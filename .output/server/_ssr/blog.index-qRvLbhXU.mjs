import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { f as articles, o as PageIntro, t as Button } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-qRvLbhXU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	const [filter, setFilter] = (0, import_react.useState)("Tous");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "BLOG / ENGINEERING NOTES",
		title: "Le code évolue. Les idées aussi.",
		description: "Des articles pédagogiques sur les systèmes distribués, la qualité du code et la mise en production. Une base éditoriale à enrichir."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section wrap pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex flex-wrap gap-2",
				children: [
					"Tous",
					"JAVA & SPRING",
					"ARCHITECTURE",
					"EVENT-DRIVEN"
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: f === filter ? "default" : "outline",
					size: "sm",
					onClick: () => setFilter(f),
					"aria-pressed": f === filter,
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: articles.filter((a) => filter === "Tous" || a.category === filter).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: a.slug },
					className: "article-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: a.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: a.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a.excerpt }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [a.time, " de lecture"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
						})
					]
				}, a.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs text-muted-foreground",
				children: "Articles de démonstration rédigés pour ce portfolio ; à relire et personnaliser avant publication."
			})
		]
	})] });
}
//#endregion
export { Blog as component };
