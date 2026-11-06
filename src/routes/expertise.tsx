import {createFileRoute} from '@tanstack/react-router';
import {pageHead, skillGroups, functionalSkills, professionalSkills, aiTools} from '@/lib/portfolio-data';
import {Terminal, Sparkles, Workflow, Cpu} from 'lucide-react';
import {PageIntro, ExpertiseCards} from '@/components/portfolio/shared';

export const Route = createFileRoute('/expertise')({
    head: () => pageHead('Expertise Java, architecture & DevOps', 'Fourat Nefoussi, Senior Java Backend Developer à Metz : 7+ ans, Java Spring Boot, microservices, banque, assurance et monitoring de production. Compétences professionnelles, projets académiques et connaissances complémentaires.'),
    component: Expertise
});

function Expertise() {
    return <main><PageIntro eyebrow="EXPERTISE / ENGINEERING" title="Le métier au centre. La technique au service."
                            description="Une expertise backend Java et microservices développée dans la banque et l’assurance, avec une attention constante à la qualité, à la maintenabilité et à la fiabilité."/>
        <section className="section wrap pt-4"><ExpertiseCards/>
            <div className="mt-12">
                <div className="eyebrow">COMPÉTENCES TECHNIQUES</div>
                <h2 className="section-title">Une stack cohérente.</h2><p className="section-description mb-8">Les
                usages professionnels et académiques sont distingués des connaissances complémentaires, sans présumer
                d’un niveau de maîtrise équivalent.</p>
                <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">{skillGroups.map(g => <div key={g.name}
                                                                                                 className="min-w-0 border-t border-border pt-5">
                    <h3 className="mb-4 text-lg">{g.name}</h3>
                    <div className="space-y-4">{[{
                        label: 'Pratique professionnelle',
                        items: g.professional
                    }, {label: 'Projets académiques', items: g.academic}, {
                        label: 'Connaissances complémentaires',
                        items: g.knowledge
                    }].filter(level => level.items.length > 0).map(level => <div key={level.label}><p
                        className="mb-2 text-xs text-muted-foreground">{level.label}</p>
                        <div className="flex flex-wrap gap-2">{level.items.map(t => {
                            const tool = aiTools.find(tool => tool.name === t);
                            const Icon = ({
                                'Claude Code': Terminal,
                                'GitHub Copilot': Sparkles,
                                n8n: Workflow,
                                Ollama: Cpu
                            } as Record<string, typeof Terminal>)[t];
                            return tool ? <div key={t} className="w-full flex items-start gap-3">{Icon &&
                                <Icon size={18} className="mt-1 shrink-0 text-primary"/>}
                                <div><h4 className="text-sm text-foreground">{t}</h4><p
                                    className="mt-1 text-xs leading-6 text-muted-foreground">{tool.description}</p>
                                </div>
                            </div> : <span className="tag" key={t}>{t}</span>;
                        })}</div>
                    </div>)}</div>
                </div>)}</div>
            </div>
        </section>
        <section className="section border-y border-border">
            <div className="wrap">
                <div className="eyebrow">CONNAISSANCES FONCTIONNELLES</div>
                <h2 className="section-title">Comprendre les enjeux métier.</h2>
                <div className="mt-7 grid gap-8 md:grid-cols-2">{functionalSkills.map(g => <div key={g.name}><h3
                    className="mb-4 text-lg">{g.name}</h3>
                    <div className="flex flex-wrap gap-2">{g.items.map(t => <span className="tag"
                                                                                  key={t}>{t}</span>)}</div>
                </div>)}</div>
            </div>
        </section>
        <section className="section wrap">
            <div className="eyebrow">PRATIQUE PROFESSIONNELLE</div>
            <h2 className="section-title">La qualité se construit ensemble.</h2><p
            className="section-description mb-6">Des revues de code à l’accompagnement des nouveaux collaborateurs, une
            démarche attentive au collectif et à la qualité des livraisons.</p>
            <div className="flex flex-wrap gap-2">{professionalSkills.map(t => <span className="tag"
                                                                                     key={t}>{t}</span>)}</div>
            <div className="mt-12">
                <div className="eyebrow">AXES DE DÉVELOPPEMENT</div>
                <h2 className="section-title">Préparer les systèmes de demain.</h2><p
                className="section-description mb-7">Ces sujets constituent des axes d’approfondissement. Leur
                utilisation en mission n’est pas attestée par le CV actuel.</p>
                <div className="grid gap-x-8 md:grid-cols-3">{[{
                    title: 'Kafka & event-driven',
                    body: 'Fiabilité des échanges asynchrones, idempotence et compréhension des garanties de livraison.'
                }, {
                    title: 'Clean Architecture',
                    body: 'Approfondir les frontières métier, les ports et les adaptateurs, dans la continuité de la pratique de SOLID.'
                }, {title: 'Cloud / AWS', body: 'Explorer les plateformes cloud et leurs services managés.'}].map(s =>
                    <div className="border-t border-border py-6" key={s.title}><h3
                        className="text-lg text-primary">{s.title}</h3><p className="section-description">{s.body}</p>
                    </div>)}</div>
            </div>
        </section>
    </main>
}
