import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as PageIntro, r as ExpertiseCards } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/expertise-BvjOpwaz.js
var import_jsx_runtime = require_jsx_runtime();
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "EXPERTISE / ENGINEERING",
		title: "Le métier au centre. La technique au service.",
		description: "Des compétences éprouvées dans des systèmes bancaires et assurantiels, complétées par une démarche de progression continue."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section wrap pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpertiseCards, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title",
				children: "Une stack cohérente."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: [
					{
						name: "Backend & API",
						tags: [
							"Java",
							"Spring Boot",
							"Spring Security",
							"Spring Data",
							"Spring AOP",
							"NestJS",
							"REST / SOAP",
							"Swagger",
							"Maven"
						]
					},
					{
						name: "Données",
						tags: [
							"Oracle",
							"MongoDB",
							"MySQL",
							"PL/SQL"
						]
					},
					{
						name: "Livraison & observabilité",
						tags: [
							"GitLab CI/CD",
							"Docker",
							"Kubernetes",
							"ArgoCD",
							"Grafana",
							"Dynatrace",
							"Vault",
							"JMeter"
						]
					},
					{
						name: "Qualité & collaboration",
						tags: [
							"SOLID",
							"Design Patterns",
							"JUnit",
							"Code review",
							"Pair programming",
							"Scrum"
						]
					}
				].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-sm",
					children: g.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: g.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tag",
						children: t
					}, t))
				})] }, g.name))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "AXES DE DÉVELOPPEMENT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title",
					children: "Préparer les systèmes de demain."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-description mb-7",
					children: "Ces sujets constituent des axes d’approfondissement. Leur utilisation en mission n’est pas attestée par le CV actuel."
				}),
				[
					{
						title: "Kafka & event-driven",
						body: "Fiabilité des échanges asynchrones, idempotence et compréhension des garanties de livraison."
					},
					{
						title: "Clean Architecture",
						body: "Approfondir les frontières métier, les ports et les adaptateurs, dans la continuité de la pratique de SOLID."
					},
					{
						title: "Cloud / AWS",
						body: "Explorer les plateformes cloud et leurs services managés, en complément de Docker, Kubernetes et de la chaîne CI/CD."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg text-primary",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-description",
						children: s.body
					})]
				}, s.title))
			] })]
		})]
	})] });
}
//#endregion
export { Expertise as component };
