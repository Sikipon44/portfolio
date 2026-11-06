export const profile = {
    name: 'Fourat Nefoussi', email: 'Fouratnefoussi@gmail.com', phone: '+33780497990',
    linkedin: 'https://www.linkedin.com/in/fourat-nefoussi-015799160/', experienceYears: 7,
    location: 'Metz, France', sectors: 2, employers: 3, teamSize: 7,
};
export const projects = [
    {
        slug: 'lcl-mes-comptes',
        name: 'LCL Mes Comptes',
        client: 'LCL · BANQUE',
        type: 'bank',
        evidence: 'professional',
        title: 'Des microservices au cœur de la banque mobile.',
        description: 'Développement et maintenance des API de l’application LCL Mes Comptes, de la conception des microservices à leur intégration et leur déploiement en production.',
        tags: ['Java', 'Spring Boot', 'Microservices', 'MongoDB'],
        environment: ['Java', 'Spring Boot', 'NestJS', 'Microservices', 'MongoDB', 'JIRA', 'IntelliJ IDEA', 'Visual Studio Code', 'WebStorm', 'GitLab', 'Maven', 'MongoDB Compass', 'Dynatrace', 'ArgoCD', 'WSO2', 'Alfred', 'Grafana', 'Vault', 'GitLab CI/CD', 'Elastic', 'JFrog', 'JMeter'],
        details: [
            'Développement de nouvelles API backend avec Java, Spring Boot et NestJS ; conception et réalisation de microservices jusqu’à leur intégration dans l’application et leur déploiement en production.',
            'Maintenance corrective et évolutive des microservices, suivi de production et résolution des incidents et anomalies.',
            'Correction des vulnérabilités de sécurité, mise à jour et gestion des certificats.',
            'Réalisation des déploiements pilotes et des mises en production avec GitLab CI/CD et ArgoCD.',
            'Code review des Merge Requests de l’équipe, accompagnement et intégration des nouveaux collaborateurs.',
            'Participation aux cérémonies Agile Scrum et réalisation de tests unitaires.',
            'Tests de charge avec JMeter pour déterminer et optimiser les valeurs de timeout des API.'
        ],
        context: 'Depuis janvier 2024 · Paris',
        diagram: ['API Gateway', 'Spring Boot', 'MongoDB']
    },
    {
        slug: 'solife',
        name: 'SOLIFE',
        client: 'VERMEG · ASSURANCE',
        type: 'insurance',
        evidence: 'professional',
        title: 'Un socle robuste pour l’assurance-vie.',
        description: 'Évolution d’un progiciel de gestion des contrats d’assurance-vie, épargne, retraite et prévoyance, au sein d’une équipe de 7 développeurs.',
        tags: ['Java', 'Oracle', 'PL/SQL', 'SOLID'],
        environment: ['Java', 'PL/SQL', 'XML', 'Oracle', 'JIRA', 'IntelliJ IDEA', 'GitLab', 'Maven', 'Oracle SQL Developer', 'Scrum'],
        details: [
            'Participation à l’analyse et au développement de nouvelles fonctionnalités pour la gestion des polices et contrats d’assurance.',
            'Responsabilité complète du module ODS (Operational Data Store) : maintenance, développement de nouvelles fonctionnalités et livraisons.',
            'Maintenance corrective et évolutive de l’application ; correction des données Oracle par procédures PL/SQL et avec le Migrateur (Data Fixing).',
            'Application du Craftsmanship, des principes SOLID et des Design Patterns ; code review, pair programming, refactoring et optimisation du code.',
            'Réalisation des tests unitaires et fonctionnels pour valider les exigences clients ; planification et exécution des montées de version et des merges des fonctionnalités développées.',
            'Encadrement et accompagnement des nouveaux collaborateurs dans une équipe de 7 développeurs ; participation aux Daily meetings, Sprint Planning, démonstrations et rétrospectives Scrum.',
            'MAIF, AXA, NNS et BNP Paribas Cardif sont des clients du produit SOLIFE, et non des employeurs ou clients directs de mes missions.'
        ],
        context: 'Octobre 2019 – janvier 2024 · Tunis',
        diagram: ['SOLIFE', 'Module ODS', 'Oracle']
    },
    {
        slug: 'find-my-doctor',
        name: 'Find My Doctor',
        client: 'PROJET ACADÉMIQUE · SANTÉ',
        type: 'health',
        evidence: 'academic',
        title: 'Connecter les patients aux bons praticiens.',
        description: 'Une plateforme de recherche de médecins à proximité, conçue avec trois autres développeurs en méthode Agile.',
        tags: ['Spring Boot', 'Angular', 'API REST', 'Oracle'],
        environment: ['Spring Boot', 'Angular', 'API REST', 'Oracle', 'Swagger'],
        details: ['Choix de l’architecture et des technologies, conception UML et découpage en sprints.', 'Développement backend Spring Boot et frontend Angular, documentation Swagger et tests unitaires.', 'Revues de code, principes SOLID et planification des livraisons.'],
        context: '2022 · Tunis',
        diagram: ['Angular', 'API REST', 'Oracle']
    },
    {
        slug: 'well-being-work',
        name: 'Well Being Work',
        teamSize: 4,
        client: 'PROJET ACADÉMIQUE · JAVA BACKEND',
        type: 'health',
        evidence: 'academic',
        title: 'Des services et des événements pour les collaborateurs.',
        description: 'Plateforme centralisant événements, réservations d’hôtels et collaborations avec de grandes marques pour les collaborateurs des entreprises. Réalisée en 2021 dans une équipe de 4 développeurs en Agile Scrum.',
        tags: ['Java', 'Spring Boot', 'Spring Batch', 'MySQL'],
        environment: ['Java', 'Spring Boot', 'Spring Batch', 'Spring AOP', 'Swagger', 'SQL', 'MySQL', 'REST API', 'SOAP', 'UML', 'IntelliJ IDEA', 'GitLab', 'Maven', 'Postman', 'Scrum'],
        details: [
            'Participation à la conception du projet, au choix de l’architecture technique, à la conception des diagrammes et au découpage en sprints.',
            'Développement backend avec Spring Boot et d’un batch quotidien avec Spring Batch qui envoie des e-mails aux collaborateurs abonnés à des catégories d’événements lorsqu’un nouvel événement correspondant à leurs intérêts est créé.',
            'Application des principes SOLID, des Design Patterns et des bonnes pratiques de développement ; code review, pair programming, refactoring et optimisation.',
            'Réalisation des tests unitaires, participation aux cérémonies Scrum et aux livraisons.'
        ],
        context: '2021 · Projet académique',
        diagram: ['Spring Boot', 'Spring Batch', 'MySQL']
    },
    {
        slug: 'gti-idc',
        name: "Application d’instruction de dossiers de crédit (IDC)",
        client: 'GÉNÉRALE TUNISIENNE DE L’INFORMATIQUE · GTI',
        type: 'bank',
        evidence: 'professional',
        title: 'Expérience professionnelle · Développeur Full Stack Java.',
        description: 'Conception et développement d’une application d’instruction de dossiers de crédit (IDC) en utilisant Java, JSF et Spring.',
        tags: ['Java', 'JSF', 'Spring Security', 'Oracle'],
        environment: ['Java', 'JavaScript', 'JSF', 'Spring Security', 'Spring Data', 'jQuery', 'Oracle', 'Git', 'UML', 'SOAP/REST', 'JUnit', 'Scrum'],
        details: [
            'Étude de l’existant et compréhension du système.',
            'Conception de l’application à l’aide de différents diagrammes UML.',
            'Découpage du projet en sprints selon la méthodologie Agile Scrum.',
            'Développement de l’application.',
            'Débogage pour identifier et corriger les anomalies.',
            'Développement de tests unitaires avec JUnit.'
        ],
        context: 'Février 2019 – Juin 2019 · Tunis',
        diagram: ['JSF', 'Spring', 'Oracle']
    },
];

export const experiences = [
    {
        date: 'JAN. 2024 — AUJOURD’HUI',
        company: 'LCL',
        role: 'Développeur Backend · Paris',
        description: 'Application mobile LCL Mes Comptes — architecture microservices.',
        items: ['API Java Spring Boot et NestJS, de la conception à la mise en production.', 'Maintenance, incidents, sécurité, certificats et tests de charge JMeter.', 'Revues de Merge Requests, intégration des nouveaux collaborateurs et Agile Scrum.'],
        slug: 'lcl-mes-comptes'
    },
    {
        date: 'OCT. 2019 — JAN. 2024',
        company: 'VERMEG',
        role: 'Développeur Java · Tunis',
        description: 'SOLIFE — assurance-vie, épargne, retraite et prévoyance.',
        items: ['Responsabilité complète du module ODS dans une équipe de 7 développeurs.', 'Oracle et PL/SQL, Data Fixing, évolutions fonctionnelles et montées de version.', 'Craftsmanship, SOLID, tests, pair programming et accompagnement des collaborateurs.'],
        slug: 'solife'
    },
    {
        date: 'FÉV. 2019 — JUIN 2019',
        company: 'GTI',
        role: 'Développeur Full Stack Java · Tunis',
        description: 'Conception et développement d’une application d’instruction de dossiers de crédit.',
        items: ['Étude de l’existant et conception à l’aide de diagrammes UML.', 'Développement de l’application avec JSF, Spring Security et Spring Data.', 'Débogage, correction des anomalies et tests unitaires avec JUnit.', 'Participation aux cérémonies Agile Scrum.'],
        environment: ['Java', 'JavaScript', 'JSF', 'Spring Security', 'Spring Data', 'jQuery', 'Oracle', 'Git', 'UML', 'SOAP/REST', 'JUnit', 'Scrum'],
        slug: 'gti-idc'
    },
];

export type SkillGroup = { name: string; professional: string[]; academic: string[]; knowledge: string[] };
export const skillGroups: SkillGroup[] = [
    {
        name: 'Backend Java & Frameworks',
        professional: ['Java', 'Spring Boot', 'Spring', 'Spring Security', 'Spring Data', 'NestJS'],
        academic: ['Spring AOP', 'Spring Batch'],
        knowledge: ['Lombok']
    },
    {
        name: 'Architecture & API',
        professional: ['Architecture microservices', 'API REST', 'Webservices SOAP', 'UML'],
        academic: ['Swagger'],
        knowledge: []
    },
    {
        name: 'Bases de données',
        professional: ['Oracle', 'PL/SQL', 'MongoDB'],
        academic: ['MySQL', 'SQL'],
        knowledge: []
    },
    {
        name: 'Qualité & tests',
        professional: ['JUnit', 'Tests unitaires', 'Tests fonctionnels', 'Tests de charge avec JMeter', 'Code Review', 'Pair Programming', 'Refactoring', 'SOLID', 'Design Patterns'],
        academic: [],
        knowledge: []
    },
    {
        name: 'DevOps & production',
        professional: ['GitLab CI/CD', 'Git', 'ArgoCD', 'Dynatrace', 'Grafana', 'Vault'],
        academic: [],
        knowledge: ['Docker', 'Kubernetes', 'GitHub']
    },
    {
        name: 'Outils',
        professional: ['IntelliJ IDEA', 'Visual Studio Code', 'WebStorm', 'JIRA', 'Maven', 'GitLab', 'Oracle SQL Developer', 'MongoDB Compass', 'WSO2', 'Elastic', 'JFrog', 'Alfred'],
        academic: ['Postman'],
        knowledge: ['TortoiseSVN', 'Unity']
    },
    {
        name: 'Outils d’intelligence artificielle',
        professional: [],
        academic: [],
        knowledge: ['Claude Code', 'GitHub Copilot', 'n8n', 'Ollama']
    },
    {
        name: 'Technologies complémentaires',
        professional: ['JavaScript', 'JSF', 'jQuery'],
        academic: ['Angular'],
        knowledge: ['PrimeNG', 'HTML', 'CSS', 'Bootstrap', 'Python', 'PHP', 'C', 'C#']
    },
    {
        name: 'Systèmes & méthodologies',
        professional: ['Agile Scrum'],
        academic: [],
        knowledge: ['Windows', 'Linux', 'Ubuntu']
    },
];
export const aiTools = [
    {
        name: 'Claude Code',
        description: 'Assistance au développement logiciel, analyse de code et de projets, génération et modification de code, résolution de problèmes techniques.'
    },
    {
        name: 'GitHub Copilot',
        description: 'Autocomplétion intelligente, génération de code, assistance au développement et à la revue de code.'
    },
    {
        name: 'n8n',
        description: 'Automatisation de workflows, intégration de services et création de processus automatisés.'
    },
    {name: 'Ollama', description: 'Exécution et expérimentation de modèles d’intelligence artificielle en local.'},
];
export const workingApproach = ['Qualité et maintenabilité du code', 'Autonomie et organisation', 'Collaboration et partage des connaissances', 'Sens des responsabilités en production', 'Respect des bonnes pratiques de développement'];
export const functionalSkills = [
    {
        name: 'Assurance de personnes',
        items: ['Assurance-vie', 'Épargne et retraite', 'Gestion des contrats d’assurance', 'Actuariat']
    },
    {
        name: 'Banque & conception',
        items: ['Domaine bancaire', 'Analyse fonctionnelle', 'Conception de solutions', 'Développement web', 'Bug fixing', 'Conception d’outils', 'Formation', 'Gestion de projet', 'Gestion d’équipe']
    },
];
export const professionalSkills = ['Autonomie', 'Organisation', 'Leadership', 'Travail en équipe', 'Accompagnement des nouveaux collaborateurs', 'Partage des connaissances', 'Craftsmanship et qualité du code'];
export const interests = ['Voyages', 'Cinéma', 'Jeux vidéo'];
export const articles = [
    {
        slug: 'microservices-spring-boot',
        title: 'Spring Boot : concevoir un microservice prêt pour la production',
        category: 'JAVA & SPRING',
        time: '6 min',
        date: '13 octobre 2026',
        excerpt: 'Contrats d’API, observabilité et sécurité : les fondamentaux avant le premier déploiement.',
        sections: [{
            title: 'Commencer par un contrat clair',
            body: 'Un microservice n’est pas uniquement une application plus petite. Il doit porter une responsabilité métier cohérente et proposer un contrat stable. Définissez les ressources, les codes de réponse et les erreurs avant d’implémenter vos endpoints.'
        }, {
            title: 'Rendre la production observable',
            body: 'Exposez des indicateurs de santé avec Spring Boot Actuator. Distinguez la disponibilité du processus de sa capacité à recevoir du trafic. Ajoutez des logs structurés, des métriques de latence et des identifiants de corrélation pour suivre une requête entre services.'
        }, {
            title: 'Tester au-delà du chemin nominal',
            body: 'Testez la validation, les erreurs et les indisponibilités des dépendances. Un test de charge complète les tests unitaires : il permet de mesurer la latence sous concurrence et de choisir des timeouts réalistes. Les seuils doivent être définis à partir des contraintes du produit, et non de valeurs arbitraires.'
        }],
        code: 'management:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,prometheus\n  endpoint:\n    health:\n      probes:\n        enabled: true',
        note: 'L’endpoint Prometheus nécessite la dépendance micrometer-registry-prometheus. Restreignez les endpoints opérationnels au réseau interne ou protégez-les.'
    },
    {
        slug: 'clean-architecture-java',
        title: 'Clean Architecture en Java : isoler le métier, pas le complexifier',
        category: 'ARCHITECTURE',
        time: '5 min',
        date: '13 octobre 2026',
        excerpt: 'Des dépendances orientées vers le domaine, des ports explicites et un code plus facile à tester.',
        sections: [{
            title: 'Le domaine avant le framework',
            body: 'Les règles métier ne devraient pas dépendre du contrôleur HTTP ou de la base de données. La Clean Architecture organise les dépendances vers le cœur du système. Spring Boot reste un outil de composition, pas le centre du modèle métier.'
        }, {
            title: 'Définir un port utile',
            body: 'Un port représente une capacité attendue par le cas d’usage. Par exemple, un service de création de contrat a besoin d’enregistrer un contrat sans connaître JPA ou MongoDB. L’adaptateur traduit ensuite cette intention vers la technologie choisie.'
        }, {
            title: 'Garder une architecture proportionnée',
            body: 'N’ajoutez pas une interface pour chaque classe par automatisme. Introduisez les frontières là où elles protègent une règle métier ou une dépendance susceptible de changer. Les tests de cas d’usage doivent pouvoir s’exécuter sans démarrer Spring.'
        }],
        code: 'public interface ContractRepository {\n    void save(Contract contract);\n}\n\npublic final class CreateContract {\n    private final ContractRepository repository;\n\n    public CreateContract(ContractRepository repository) {\n        this.repository = repository;\n    }\n}',
        note: 'Article pédagogique ; la Clean Architecture n’est pas explicitement mentionnée dans les expériences du CV.'
    },
    {
        slug: 'kafka-livraison-messages',
        title: 'Kafka : comprendre la livraison et penser l’idempotence',
        category: 'EVENT-DRIVEN',
        time: '7 min',
        date: '13 octobre 2026',
        excerpt: 'Pourquoi un message peut revenir, et comment protéger les effets métier d’un consommateur.',
        sections: [{
            title: 'Un message peut être traité plusieurs fois',
            body: 'Avec une livraison au moins une fois, un consommateur peut rejouer un événement après une panne. Une écriture réussie suivie d’un arrêt avant la confirmation de l’offset suffit à provoquer un doublon. Ce comportement doit être pris en compte dès la conception.'
        }, {
            title: 'Identifier l’effet métier',
            body: 'Associez chaque événement à une identité stable. Pour une écriture dans une base relationnelle, une contrainte d’unicité et une transaction peuvent permettre d’enregistrer l’identifiant traité en même temps que l’effet métier. Une simple vérification avant écriture ne suffit pas face à la concurrence.'
        }, {
            title: 'Ne pas confondre transactions et magie',
            body: 'Les transactions Kafka peuvent coordonner les lectures et écritures à l’intérieur de Kafka. Elles ne rendent pas automatiquement un appel HTTP ou une écriture dans une base externe exactement une fois. Pour ces effets, prévoyez une stratégie d’idempotence ou un pattern outbox adapté.'
        }],
        code: 'event_id → validation → transaction métier\n                          ├─ enregistrer event_id (unique)\n                          └─ appliquer l’effet métier\n                       → confirmer l’offset',
        note: 'Article pédagogique ; Kafka est un axe de développement, non une expérience de production attestée par le CV.'
    }
];

export function contactHref(name: string, email: string, type: string, message: string) {
    return `mailto:${profile.email}?subject=${encodeURIComponent(`[${type}] Prise de contact — ${name}`)}&body=${encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`)}`;
}

export function pageHead(title: string, description: string) {
    return {
        meta: [{title: `${title} | Fourat Nefoussi`}, {
            name: 'description',
            content: description
        }, {property: 'og:title', content: `${title} | Fourat Nefoussi`}, {
            property: 'og:description',
            content: description
        }, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}]
    };
}
