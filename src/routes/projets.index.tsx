import {createFileRoute} from '@tanstack/react-router';
import {projects, pageHead} from '@/lib/portfolio-data';
import {PageIntro, ProjectCard} from '@/components/portfolio/shared';

export const Route = createFileRoute('/projets/')({
    head: () => pageHead('Projets Java & Spring Boot', 'Découvrez LCL Mes Comptes, SOLIFE, GTI IDC, Find My Doctor et Well Being Work : projets professionnels et académiques de Fourat Nefoussi, développeur Java Senior à Metz.'),
    component: Projects
});

function Projects() {
    return <main><PageIntro eyebrow="PROJETS / CAS CONCRETS" title="Derrière chaque ligne de code, un enjeu réel."
                            description="Applications bancaires, progiciel d’assurance et projets académiques de santé et de services aux collaborateurs. Des contributions concrètes, sans chiffres d’impact inventés."/>
        <section className="section wrap pt-4">
            <div className="grid gap-6 md:grid-cols-2">{projects.map(p => <ProjectCard key={p.slug}
                                                                                       project={p}/>)}</div>
            <p className="mt-7 text-xs leading-6 text-muted-foreground">Les schémas sont des illustrations
                conceptuelles, pas des captures des applications ni des représentations des architectures
                confidentielles.</p></section>
    </main>
}
