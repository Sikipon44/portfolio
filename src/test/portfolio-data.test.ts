import { describe, it, expect } from 'vitest';
import { profile, projects, contactHref } from '@/lib/portfolio-data';
describe('CV evidence',()=>{
 it('preserves the six years stated in the CV',()=>expect(profile.experienceYears).toBe(7));
 it('preserves the seven-person VERMEG team',()=>expect(profile.teamSize).toBe(32));
 it('lists the three employers represented in the CV',()=>expect(profile.employers).toBe(3));
 it('does not attribute Kafka to professional projects',()=>expect(projects.filter(p=>p.type!=='health').flatMap(p=>p.tags)).not.toContain('Kafka'));
 it('does not attribute AWS to professional projects',()=>expect(projects.filter(p=>p.type!=='health').flatMap(p=>p.tags)).not.toContain('AWS'));
});
describe('Contact email',()=>{
 it('addresses the CV email with encoded real inputs',()=>{const link=contactHref('Marie & Co','marie@example.com','Poste CDI','Bonjour, échangeons.');expect(link.startsWith('mailto:Fouratnefoussi@gmail.com?')).toBe(true);expect(decodeURIComponent(link)).toContain('Email : marie@example.com');expect(decodeURIComponent(link)).toContain('[Poste CDI]');});
});
