import {Link, useLocation} from '@tanstack/react-router';
import {useState} from 'react';
import {
    ArrowUpRight,
    ArrowRight,
    Download,
    Menu,
    X,
    MapPin,
    Coffee,
    Layers3,
    Workflow,
    Blocks,
    Database,
    Code2,
    Linkedin
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import cv from '@/assets/cv.pdf';
import {profile, projects} from '@/lib/portfolio-data';

export function CVButton({outline = false}: { outline?: boolean }) {
    return <Button asChild variant={outline ? 'outline' : 'default'} size="lg"><a href={cv.url}
                                                                                  download="CV_Fourat_Nefoussi.pdf"
                                                                                  target="_blank"
                                                                                  rel="noreferrer"><Download/> Télécharger
        mon CV</a></Button>;
}

export function Header() {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const nav = [{to: '/', text: 'Accueil'}, {to: '/expertise', text: 'Expertise'}, {
        to: '/projets',
        text: 'Projets'
    }, {to: '/parcours', text: 'Parcours'}, {to: '/blog', text: 'Blog'}] as const;
    return <header className="site-header relative z-20">
        <div className="wrap grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 lg:flex lg:justify-between">
            <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Fourat Nefoussi, accueil"><span
                className="brand-symbol">fn<span className="text-foreground">.</span></span><span
                className="brand-name truncate">Fourat <span>Nefoussi</span></span></Link>
            <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">{nav.map(n => <Link
                key={n.to} to={n.to} className="nav-link" data-active={pathname === n.to}>{n.text}</Link>)}</nav>
            <div className="flex shrink-0 items-center gap-2"><Button asChild className="hidden sm:inline-flex"><Link
                to="/contact">Parlons de votre projet <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon"
                                                                                             className="lg:hidden"
                                                                                             onClick={() => setOpen(!open)}
                                                                                             aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ?
                <X/> : <Menu/>}</Button></div>
        </div>
        {open && <nav aria-label="Navigation mobile"
                      className="absolute inset-x-0 top-full grid gap-1 border-b border-border bg-background p-5">{nav.map(n =>
            <Button key={n.to} asChild variant="ghost" className="justify-start"><Link to={n.to}
                                                                                       onClick={() => setOpen(false)}>{n.text}</Link></Button>)}<Button
            asChild><Link to="/contact" onClick={() => setOpen(false)}>Me contacter <ArrowUpRight/></Link></Button>
        </nav>}</header>;
}

export function Footer() {
    return <>
        <section className="cta-band">
            <div className="wrap grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div>
                    <div className="eyebrow">CONSTRUISONS LA SUITE</div>
                    <h2 className="section-title mb-0">Un projet ambitieux mérite un backend solide.</h2></div>
                <Button asChild size="lg"><Link to="/contact">Échangeons <ArrowUpRight/></Link></Button></div>
        </section>
        <footer className="footer wrap flex flex-wrap items-center justify-between gap-5">
            <span>© 2026 Fourat Nefoussi</span>
            <div className="flex items-center gap-5"><span className="flex items-center gap-2"><MapPin size={12}/> Paris, France</span><a
                href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Profil LinkedIn"
                className="text-foreground"><Linkedin size={16}/></a><a href={`mailto:${profile.email}`}
                                                                        className="hover:text-primary">Me
                contacter <span aria-hidden="true">↗</span></a></div>
        </footer>
    </>
}

export function SectionHeading({eyebrow, title, description, link, label}: {
    eyebrow: string,
    title: string,
    description?: string,
    link?: ' /' | '/expertise' | '/projets' | '/parcours' | '/blog',
    label?: string
}) {
    return <div className="section-header">
        <div className="min-w-0">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="section-title">{title}</h2>{description &&
            <p className="section-description">{description}</p>}</div>
        {link && link !== ' /' && <Link to={link}
                                        className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground hover:text-primary">{label || 'Tout découvrir'}
            <ArrowUpRight size={14}/></Link>}</div>;
}

export function PageIntro({eyebrow, title, description}: { eyebrow: string, title: string, description: string }) {
    return <div className="page-intro wrap reveal">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1><p>{description}</p></div>
}

export function ExpertiseCards() {
    const cards = [{
        icon: Coffee,
        title: 'Java & Spring Boot',
        description: 'Des API fiables, sécurisées et testables. Une expertise backend ancrée dans les exigences du secteur financier.',
        tags: ['Java', 'Spring Boot', 'Spring Security', 'API REST']
    }, {
        icon: Layers3,
        title: 'Architecture & qualité',
        description: 'Des systèmes modulaires qui évoluent sereinement. Microservices, principes SOLID et revues de code au quotidien.',
        tags: ['Microservices', 'SOLID', 'Design Patterns', 'Tests']
    }, {
        icon: Workflow,
        title: 'DevOps & production',
        description: 'Du code à la production, sans rupture. Automatisation des livraisons, observabilité et maîtrise du cycle de vie.',
        tags: ['CI/CD', 'Docker', 'Kubernetes', 'ArgoCD']
    }];
    return <div className="grid gap-4 md:grid-cols-3">{cards.map(c => <div key={c.title} className="skill-card">
        <c.icon className="skill-icon" size={28} strokeWidth={1.5}/>
        <h3>{c.title}</h3><p>{c.description}</p>
        <div className="flex flex-wrap gap-1.5">{c.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
    </div>)}</div>
}

export function ProjectVisual({project}: { project: typeof projects[number] }) {
    return <div className={`project-visual ${project.type}`}>
        <div className="visual-grid"/>
        <span className="project-visual-label">{project.client} / SYSTEM OVERVIEW</span>
        <div className="diagram">
            <div className="diagram-node"><Blocks size={32} strokeWidth={1.4}/></div>
            <div className="diagram-line"/>
            <div className="diagram-branch">{project.diagram.map((d, i) => <div key={d}
                                                                                className="diagram-small flex items-center gap-3">{i === 2 ?
                <Database size={13}/> : <Code2 size={13}/>} {d}</div>)}</div>
        </div>
    </div>
}

export function ProjectCard({project}: { project: typeof projects[number] }) {
    return <Link to="/projets/$slug" params={{slug: project.slug}} className="project-card group"><ProjectVisual
        project={project}/>
        <div className="project-body">
            <div className="eyebrow">{project.client}</div>
            <h3 className="flex items-center justify-between gap-2">{project.name}<ArrowUpRight
                className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={20}/></h3><p>{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(t => <span className="tag"
                                                                                    key={t}>{t}</span>)}</div>
        </div>
    </Link>
}

export function Timeline() {
    return <div>{[{
        date: 'JAN. 2024 — AUJOURD’HUI',
        company: 'LCL',
        role: 'Développeur Backend · Paris',
        description: 'Application mobile LCL Mes Comptes — architecture microservices.',
        items: ['Développement d’API Java Spring Boot et NestJS.', 'Déploiement, suivi de production, sécurité et tests de charge.', 'Revues de code et accompagnement des nouveaux arrivants.']
    }, {
        date: 'OCT. 2019 — JAN. 2024',
        company: 'VERMEG',
        role: 'Développeur Java · Tunis',
        description: 'SOLIFE — assurance-vie, épargne, retraite et prévoyance.',
        items: ['Responsabilité du module ODS dans une équipe de 7 personnes.', 'Développement Java, Oracle et PL/SQL ; principes SOLID et refactoring.', 'Maintenance évolutive et corrective, tests et mentoring.']
    }, {
        date: 'FÉV. 2019 — JUIN 2019',
        company: 'GTI',
        role: 'Développeur Full Stack Java · Tunis',
        description: 'Conception d’une application d’instruction de dossiers de crédit.',
        items: ['Développement JSF, Spring Security et Spring Data.', 'Conception UML, Scrum et tests unitaires JUnit.']
    }].map(e => <div className="timeline-item" key={e.company}>
        <div className="timeline-date">{e.date}</div>
        <div className="timeline-body"><h3 className="mb-2">{e.company}</h3>
            <div className="mb-4 text-sm text-primary">{e.role}</div>
            <p>{e.description}</p>
            <ul className="list-disc pl-4">{e.items.map(i => <li key={i}>{i}</li>)}</ul>
        </div>
    </div>)}</div>
}

export function Testimonials() {
    return <div className="grid gap-4 md:grid-cols-2">{[{
        quote: '« Fourat apporte une vraie rigueur dans la conception des API et garde toujours la production en tête. »',
        role: 'Tech Lead · Banque'
    }, {
        quote: '« Un développeur autonome, attentif à la qualité du code et au partage de connaissances avec l’équipe. »',
        role: 'Engineering Manager · Assurance'
    }].map(t => <div key={t.role} className="testimonial"><span className="eyebrow text-muted-foreground">TÉMOIGNAGE FICTIF · À REMPLACER</span>
        <blockquote>{t.quote}</blockquote>
        <div className="text-xs text-muted-foreground">Nom à renseigner <span className="mx-2">/</span> {t.role}</div>
    </div>)}</div>
}

export {ArrowRight};
