import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as ArrowUpRight, m as Check, o as MapPin, r as Terminal, v as ArrowDown } from "../_libs/lucide-react.mjs";
import { d as Timeline, f as articles, g as projects, h as profile, l as SectionHeading, n as CVButton, r as ExpertiseCards, s as ProjectCard, t as Button, u as Testimonials } from "./shared-DUd5QAgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DKdlmN2X.js
var import_jsx_runtime = require_jsx_runtime();
var architecture_hero_default = "/assets/architecture-hero-BPVkpRgi.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "hero-media",
					src: architecture_hero_default,
					alt: "Architecture modulaire en verre vert représentant des microservices interconnectés",
					width: 1920,
					height: 1024
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-content wrap reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), " À l’écoute d’opportunités · Freelance & CDI"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Fourat Nefoussi", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block text-primary",
							children: [
								"Développeur Java",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Senior."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-subtitle",
							children: [
								"Je construis des backends robustes, des microservices",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" évolutifs et du code qui dure."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projets",
									children: ["Explorer mes projets ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CVButton, { outline: true })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-note mt-7 flex flex-wrap gap-x-6 gap-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 12 }), " Metz, France"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 13,
										className: "text-primary"
									}), " Banque & Assurance"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 13,
										className: "text-primary"
									}), " Du code à la production"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "code-label flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
							size: 13,
							className: "text-primary"
						}),
						" architecture.build(",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "\"reliable\""
						}),
						")"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "stats",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap grid grid-cols-2 sm:grid-cols-4",
				children: [
					{
						n: `${profile.experienceYears}`,
						suffix: "+",
						text: "Années d’expérience · selon le CV"
					},
					{
						n: `${profile.sectors}`,
						suffix: "",
						text: "Secteurs exigeants : banque & assurance"
					},
					{
						n: `${profile.employers}`,
						suffix: "",
						text: "Entreprises dans mon parcours"
					},
					{
						n: `${profile.teamSize}`,
						suffix: "",
						text: "Collaborateurs dans l’équipe LCL"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stat",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stat-value",
						children: [s.n, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.suffix })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "stat-label",
						children: s.text
					})]
				}, s.text))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "client-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0 text-[10px] leading-5 text-muted-foreground",
					children: [
						"MON PARCOURS, AU SERVICE",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"DE LA BANQUE ET DE L’ASSURANCE"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-10 gap-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "client-logo italic",
							children: "LCL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "client-logo",
							children: ["VERMEG", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "client-logo",
							children: "GTI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Java. Du métier à la production."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "01 / EXPERTISE",
					title: "La profondeur technique. La vision d’ensemble.",
					description: "Une stack éprouvée pour transformer vos enjeux métier en systèmes fiables.",
					link: "/expertise",
					label: "Découvrir mon expertise"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpertiseCards, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "En exploration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kafka" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Clean Architecture" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cloud / AWS" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto hidden items-center gap-2 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 12 }), " Toujours apprendre. Toujours améliorer."]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "02 / PROJETS SÉLECTIONNÉS",
					title: "Du code. Des systèmes. De vrais enjeux.",
					description: "Une sélection de projets en environnement bancaire, assurantiel et académique.",
					link: "/projets",
					label: "Tous les projets"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2",
					children: projects.slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "03 / PARCOURS",
				title: "Une expertise qui se construit sur le terrain.",
				link: "/parcours",
				label: "Mon parcours complet"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "04 / REGARDS CROISÉS",
					title: "La confiance se construit en équipe.",
					description: "Emplacements réservés aux recommandations de mes collaborateurs."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "05 / NOTES TECHNIQUES",
				title: "Comprendre. Construire. Partager.",
				link: "/blog",
				label: "Tous les articles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: articles.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: a.slug },
					className: "article-card group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: a.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: a.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a.excerpt }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [a.time, " de lecture"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 17,
								className: "group-hover:text-primary"
							})]
						})
					]
				}, a.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "LE PARCOURS EN DÉTAIL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: "Tout mon parcours, dans votre prochaine shortlist."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-description",
						children: "Expériences, compétences et formations. Mon CV original au format PDF."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CVButton, {})]
			})
		})
	] });
}
//#endregion
export { Index as component };
