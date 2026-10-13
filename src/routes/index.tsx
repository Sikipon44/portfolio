import {createFileRoute, Link} from '@tanstack/react-router';
import {ArrowUpRight, MapPin, ArrowDown, Check, Terminal} from 'lucide-react';
import {Button} from '@/components/ui/button';
import hero from '@/assets/architecture-hero.jpg';
import {profile, projects, articles, pageHead} from '@/lib/portfolio-data';
import {
    CVButton,
    SectionHeading,
    ExpertiseCards,
    ProjectCard,
    Timeline,
    Testimonials
} from '@/components/portfolio/shared';

export const Route = createFileRoute('/')({
    head: () => pageHead('Développeur Java Senior · Freelance & CDI', 'Fourat Nefoussi, développeur backend Java et Spring Boot à Paris. Microservices, banque, assurance et CI/CD. Découvrez mes projets et mon parcours.'),
    component: Index
});

function Index() {
    return <main>
        <section className="hero"><img className="hero-media" src={hero}
                                       alt="Architecture modulaire en verre vert représentant des microservices interconnectés"
                                       width={1920} height={1024}/>
            <div className="hero-content wrap reveal">
                <div className="status"><span className="status-dot"/> À l’écoute d’opportunités · Freelance & CDI</div>
                <h1>Fourat Nefoussi<span className="mt-2 block text-primary">Développeur Java<br/>Senior.</span></h1><p
                className="hero-subtitle">Je construis des backends robustes, des microservices<br
                className="hidden sm:block"/> évolutifs et du code qui dure.</p>
                <div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/projets">Explorer mes
                    projets <ArrowUpRight/></Link></Button><CVButton outline/></div>
                <div className="hero-note mt-7 flex flex-wrap gap-x-6 gap-y-3"><span
                    className="flex items-center gap-1.5"><MapPin size={12}/> Paris, France</span><span
                    className="flex items-center gap-1.5"><Check size={13} className="text-primary"/> Banque & Assurance</span><span
                    className="flex items-center gap-1.5"><Check size={13} className="text-primary"/> Du code à la production</span>
                </div>
            </div>
            <div className="code-label flex items-center gap-3"><Terminal size={13}
                                                                          className="text-primary"/> architecture.build(<span
                className="text-primary">"reliable"</span>)
            </div>
        </section>
        <section className="stats">
            <div className="wrap grid grid-cols-2 sm:grid-cols-4">{[{
                n: `${profile.experienceYears}`,
                suffix: '+',
                text: 'Années d’expérience · selon le CV'
            }, {
                n: `${profile.sectors}`,
                suffix: '',
                text: 'Secteurs exigeants : banque & assurance'
            }, {
                n: `${profile.employers}`,
                suffix: '',
                text: 'Entreprises dans mon parcours'
            }, {n: `${profile.teamSize}`, suffix: '', text: 'Collaborateurs dans l’équipe LCL'}].map(s => <div
                key={s.text} className="stat">
                <div className="stat-value">{s.n}<span>{s.suffix}</span></div>
                <div className="stat-label">{s.text}</div>
            </div>)}</div>
        </section>
        <section className="client-band">
            <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><p
                className="m-0 text-[10px] leading-5 text-muted-foreground">MON PARCOURS, AU SERVICE<br/>DE LA BANQUE ET
                DE L’ASSURANCE</p>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4"><span
                    className="client-logo italic">LCL</span><span className="client-logo">VERMEG<span
                    className="text-primary">.</span></span><span className="client-logo">GTI</span><span
                    className="text-xs text-muted-foreground">Java. Du métier à la production.</span></div>
            </div>
        </section>
        <section className="section wrap"><SectionHeading eyebrow="01 / EXPERTISE"
                                                          title="La profondeur technique. La vision d’ensemble."
                                                          description="Une stack éprouvée pour transformer vos enjeux métier en systèmes fiables."
                                                          link="/expertise"
                                                          label="Découvrir mon expertise"/><ExpertiseCards/>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground"><span
                className="text-primary">En exploration</span><span>Kafka</span><span>·</span><span>Clean Architecture</span><span>·</span><span>Cloud / AWS</span><span
                className="ml-auto hidden items-center gap-2 sm:flex"><ArrowDown size={12}/> Toujours apprendre. Toujours améliorer.</span>
            </div>
        </section>
        <section className="section border-t border-border">
            <div className="wrap"><SectionHeading eyebrow="02 / PROJETS SÉLECTIONNÉS"
                                                  title="Du code. Des systèmes. De vrais enjeux."
                                                  description="Une sélection de projets en environnement bancaire, assurantiel et académique."
                                                  link="/projets" label="Tous les projets"/>
                <div className="grid gap-5 md:grid-cols-2">{projects.slice(0, 2).map(p => <ProjectCard key={p.slug}
                                                                                                       project={p}/>)}</div>
            </div>
        </section>
        <section className="section wrap"><SectionHeading eyebrow="03 / PARCOURS"
                                                          title="Une expertise qui se construit sur le terrain."
                                                          link="/parcours" label="Mon parcours complet"/><Timeline/>
        </section>
        <section className="section border-y border-border">
            <div className="wrap"><SectionHeading eyebrow="04 / REGARDS CROISÉS"
                                                  title="La confiance se construit en équipe."
                                                  description="Emplacements réservés aux recommandations de mes collaborateurs."/><Testimonials/>
            </div>
        </section>
        <section className="section wrap"><SectionHeading eyebrow="05 / NOTES TECHNIQUES"
                                                          title="Comprendre. Construire. Partager." link="/blog"
                                                          label="Tous les articles"/>
            <div className="grid gap-4 md:grid-cols-3">{articles.map(a => <Link key={a.slug} to="/blog/$slug"
                                                                                params={{slug: a.slug}}
                                                                                className="article-card group">
                <div className="eyebrow">{a.category}</div>
                <h3>{a.title}</h3><p>{a.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground"><span>{a.time} de lecture</span><ArrowUpRight
                    size={17} className="group-hover:text-primary"/></div>
            </Link>)}</div>
        </section>
        <section className="section border-t border-border">
            <div className="wrap grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div>
                    <div className="eyebrow">LE PARCOURS EN DÉTAIL</div>
                    <h2 className="section-title">Tout mon parcours, dans votre prochaine shortlist.</h2><p
                    className="section-description">Expériences, compétences et formations. Mon CV original au format
                    PDF.</p></div>
                <CVButton/></div>
        </section>
    </main>
}
