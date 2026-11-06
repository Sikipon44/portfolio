import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Linkedin, g as ArrowUpRight, i as Phone, m as Check, o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { h as profile, n as CVButton, o as PageIntro, p as contactHref, t as Button } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DTabXdTO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [prepared, setPrepared] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		window.location.href = contactHref(String(f.get("name")), String(f.get("email")), String(f.get("type")), String(f.get("message")));
		setPrepared(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "CONTACT / CONSTRUISONS ENSEMBLE",
		title: "Votre prochain projet commence par un échange.",
		description: "Une mission freelance, un poste CDI ou une discussion technique ? Parlons de vos enjeux et de ce que nous pouvons construire ensemble."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section wrap grid gap-12 pt-4 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "status mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), " À l’écoute · Freelance & CDI"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-sm",
				children: [[
					{
						Icon: Mail,
						label: profile.email,
						href: `mailto:${profile.email}`
					},
					{
						Icon: Phone,
						label: "07 80 49 79 90",
						href: `tel:${profile.phone}`
					},
					{
						Icon: Linkedin,
						label: "Retrouvons-nous sur LinkedIn",
						href: profile.linkedin
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: i.href,
					className: "flex items-center gap-3 text-muted-foreground hover:text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.Icon, {
							size: 17,
							className: "shrink-0 text-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 break-all",
							children: i.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })
					]
				}, i.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						size: 17,
						className: "text-primary"
					}), " Metz, France"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CVButton, { outline: true })
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "contact-label",
						children: "Votre nom *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "contact-input",
						name: "name",
						autoComplete: "name",
						placeholder: "Marie Dupont",
						required: true,
						maxLength: 100
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "contact-label",
						children: "Votre e-mail *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "contact-input",
						name: "email",
						type: "email",
						autoComplete: "email",
						placeholder: "marie@entreprise.fr",
						required: true
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "contact-label",
					children: "Votre besoin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "contact-input",
					name: "type",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mission freelance" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Poste CDI" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Échange technique" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Autre" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "contact-label",
					children: "Votre message *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "contact-input min-h-40 resize-y",
					name: "message",
					required: true,
					minLength: 10,
					maxLength: 5e3,
					placeholder: "Le contexte, votre stack, vos enjeux et votre calendrier…"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 text-xs leading-6 text-muted-foreground",
					children: "Le message sera ouvert dans votre messagerie. Aucune donnée n’est enregistrée sur ce site."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "justify-self-start",
					children: ["Préparer mon e-mail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				}),
				prepared && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					role: "status",
					className: "flex items-start gap-2 text-sm text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						size: 17,
						className: "shrink-0"
					}), " Votre e-mail est préparé. Envoyez-le depuis votre messagerie, ou contactez-moi directement à l’adresse ci-contre."]
				})
			]
		})]
	})] });
}
//#endregion
export { Contact as component };
