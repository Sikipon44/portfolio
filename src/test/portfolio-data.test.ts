import {describe, it, expect} from 'vitest';
import {profile, projects, contactHref, skillGroups, experiences, aiTools} from '@/lib/portfolio-data';

describe('CV evidence', () => {
    it('shows seven years from the October 2019 start confirmed in November 2026', () => expect(profile.experienceYears).toBe(7));
    it('preserves the seven-person VERMEG team', () => expect(profile.teamSize).toBe(7));
    it('lists the three employers represented in the CV', () => expect(profile.employers).toBe(3));
    it('does not attribute Kafka to professional projects', () => expect(projects.filter(p => p.evidence === 'professional').flatMap(p => p.environment)).not.toContain('Kafka'));
    it('does not attribute AWS to professional projects', () => expect(projects.filter(p => p.evidence === 'professional').flatMap(p => p.environment)).not.toContain('AWS'));
    it('keeps Well Being Work academic and dated 2021', () => {
        const p = projects.find(p => p.slug === 'well-being-work');
        expect(p?.evidence).toBe('academic');
        expect(p?.context).toBe('2021 · Projet académique');
    });
    it('preserves the four developers on Well Being Work', () => expect(projects.find(p => p.slug === 'well-being-work')?.teamSize).toBe(4));
    it('attributes Spring Batch to the academic project rather than professional work', () => {
        expect(projects.find(p => p.slug === 'well-being-work')?.environment).toContain('Spring Batch');
        expect(projects.filter(p => p.evidence === 'professional').flatMap(p => p.environment)).not.toContain('Spring Batch');
        expect(skillGroups.flatMap(g => g.academic)).toContain('Spring Batch');
        expect(skillGroups.flatMap(g => g.professional)).not.toContain('Spring Batch');
    });
    it('retains the supplied LCL production tools', () => {
        expect(projects.find(p => p.slug === 'lcl-mes-comptes')?.environment).toEqual(expect.arrayContaining(['NestJS', 'JMeter', 'WSO2', 'Vault', 'JFrog', 'Elastic', 'GitLab CI/CD']));
    });
    it('uses only supplied professional evidence for skill levels', () => {
        expect(skillGroups.flatMap(g => g.professional)).not.toEqual(expect.arrayContaining(['Python', 'PHP', 'C', 'C#']));
        expect(skillGroups.flatMap(g => g.knowledge)).toEqual(expect.arrayContaining(['Python', 'PHP', 'C', 'C#']));
    });
    it('links career summaries to the same professional project records', () => {
        expect(experiences.filter(e => e.slug).map(e => e.slug)).toEqual(projects.filter(p => p.evidence === 'professional').map(p => p.slug));
    });
    it('keeps project identifiers unique for all five detail pages', () => {
        expect(projects).toHaveLength(5);
        expect(new Set(projects.map(p => p.slug)).size).toBe(5);
    });
    it('uses Metz as residence while preserving the LCL mission location', () => {
        expect(profile.location).toBe('Metz, France');
        expect(projects.find(p => p.slug === 'lcl-mes-comptes')?.context).toBe('Depuis janvier 2024 · Paris');
        expect(experiences[0].role).toBe('Développeur Backend · Paris');
    });
    it('preserves the supplied GTI dates and professional evidence', () => {
        const p = projects.find(p => p.slug === 'gti-idc');
        expect(p?.evidence).toBe('professional');
        expect(p?.context).toBe('Février 2019 – Juin 2019 · Tunis');
        expect(p?.environment).toEqual(expect.arrayContaining(['Java', 'JSF', 'JUnit', 'Oracle', 'jQuery']));
        expect(experiences.find(e => e.company === 'GTI')?.slug).toBe('gti-idc');
    });
    it('orders the nine expertise categories as requested', () => expect(skillGroups.map(g => g.name)).toEqual(['Backend Java & Frameworks', 'Architecture & API', 'Bases de données', 'Qualité & tests', 'DevOps & production', 'Outils', 'Outils d’intelligence artificielle', 'Technologies complémentaires', 'Systèmes & méthodologies']));
    it('keeps academic frameworks separate from professional NestJS', () => {
        expect(skillGroups.flatMap(g => g.academic)).toEqual(expect.arrayContaining(['Spring AOP', 'Angular']));
        expect(skillGroups.flatMap(g => g.professional)).not.toEqual(expect.arrayContaining(['Spring AOP', 'Angular']));
        expect(skillGroups[0].professional).toContain('NestJS');
    });
    it('keeps Docker and Kubernetes complementary', () => {
        expect(skillGroups.flatMap(g => g.knowledge)).toEqual(expect.arrayContaining(['Docker', 'Kubernetes']));
        expect(skillGroups.flatMap(g => g.professional)).not.toContain('Docker');
        expect(skillGroups.flatMap(g => g.professional)).not.toContain('Kubernetes');
    });
    it('lists the four AI tools as complementary, not mission experience', () => {
        expect(aiTools.map(t => t.name)).toEqual(['Claude Code', 'GitHub Copilot', 'n8n', 'Ollama']);
        expect(skillGroups.find(g => g.name === 'Outils d’intelligence artificielle')?.knowledge).toEqual(aiTools.map(t => t.name));
        expect(skillGroups.find(g => g.name === 'Outils d’intelligence artificielle')?.professional).toEqual([]);
    });
    it('includes all requested quality practices without duplicating technical categories', () => {
        expect(skillGroups.find(g => g.name === 'Qualité & tests')?.professional).toEqual(['JUnit', 'Tests unitaires', 'Tests fonctionnels', 'Tests de charge avec JMeter', 'Code Review', 'Pair Programming', 'Refactoring', 'SOLID', 'Design Patterns']);
        const all = skillGroups.flatMap(g => [...g.professional, ...g.academic, ...g.knowledge]);
        expect(new Set(all).size).toBe(all.length);
    });
});
describe('Contact email', () => {
    it('addresses the CV email with encoded real inputs', () => {
        const link = contactHref('Marie & Co', 'marie@example.com', 'Poste CDI', 'Bonjour, échangeons.');
        expect(link.startsWith('mailto:Fouratnefoussi@gmail.com?')).toBe(true);
        expect(decodeURIComponent(link)).toContain('Email : marie@example.com');
        expect(decodeURIComponent(link)).toContain('[Poste CDI]');
    });
});
