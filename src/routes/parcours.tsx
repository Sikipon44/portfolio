import {createFileRoute} from '@tanstack/react-router';
import {pageHead, interests} from '@/lib/portfolio-data';
import {PageIntro, Timeline, CVButton} from '@/components/portfolio/shared';

export const Route = createFileRoute('/parcours')({
    head: () => pageHead('Parcours & formation', 'Installé à Metz, de VERMEG à LCL : expériences Java, banque et assurance. Formation ingénieur et parcours de Fourat Nefoussi.'),
    component: Career
});

function Career() {
    return <main><PageIntro eyebrow="PARCOURS / DE TUNIS À METZ" title="La rigueur se forge dans les vrais projets."
                            description="Développeur Backend Java Senior, j’interviens sur des applications bancaires et des progiciels d’assurance, de la conception à la production. Responsabilité de module, accompagnement d’équipe et qualité du code jalonnent mon parcours."/>
        <section className="section wrap pt-4"><Timeline/>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
                <div>
                    <div className="eyebrow">FORMATION</div>
                    <h2 className="section-title">Des bases solides.</h2><h3 className="text-lg">Diplôme national
                    d’ingénieur · Génie logiciel</h3><p className="section-description mb-7">ESPRIT, Tunis ·
                    2019–2023</p><h3 className="text-lg">Licence fondamentale · Sciences de l’informatique</h3><p
                    className="section-description">ISAMM, Tunis · 2016–2019</p></div>
                <div>
                    <div className="eyebrow">APPRENTISSAGE CONTINU</div>
                    <h2 className="section-title">Rester en mouvement.</h2>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li>2022 · Online Summit for Java Devs</li>
                        <li>2022 · Learning Python & SQL Programming</li>
                        <li>2018 · Microsoft Technology Associate</li>
                        <li>2016 · Formation Symfony2 PHP5</li>
                    </ul>
                    <p className="mt-7 text-sm text-muted-foreground">Français courant et professionnel · Anglais
                        professionnel</p></div>
            </div>
            <div className="mt-14 border-t border-border pt-8">
                <div className="eyebrow mb-4">CENTRES D’INTÉRÊT</div>
                <div className="mb-8 flex flex-wrap gap-2">{interests.map(i => <span className="tag"
                                                                                     key={i}>{i}</span>)}</div>
                <CVButton/></div>
        </section>
    </main>
}
