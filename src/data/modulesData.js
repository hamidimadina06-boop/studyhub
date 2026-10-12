export const semesters = [
  {
    id: 'semester-1',
    number: 1,
    slug: 'semester-1',
    titleKey: 'semester1Title',
    termKey: 'semester1Term',
    badgeKey: 'semester1Badge',
    descriptionKey: 'semester1Description',
    enterKey: 'enterSemester1'
  },
  {
    id: 'semester-2',
    number: 2,
    slug: 'semester-2',
    titleKey: 'semester2Title',
    termKey: 'semester2Term',
    badgeKey: 'semester2Badge',
    descriptionKey: 'semester2Description',
    enterKey: 'enterSemester2'
  }
];

export const modules = [
  // ================= SEMESTER 1 (EXACTLY 5 MODULES) =================
  {
    id: 'analyse-1',
    slug: 'analyse-1',
    semesterId: 'semester-1',
    semesterNumber: 1,
    title: 'Analyse 1',
    titleAr: 'تحليل 1',
    code: 'MATH-101',
    credits: '6 ECTS',
    iconType: 'math',
    descriptionEn: 'Differential and integral calculus, real functions of a single variable, limits, sequences, and series.',
    descriptionAr: 'حساب التفاضل والتكامل، الدوال الحقيقية لمتغير حقيقي، النهايات، المتتاليات والمتسلسلات.',
    channels: [
      {
        id: 'ab-math',
        title: '3Blue1Brown - Essence of Calculus',
        category: 'VISUAL INTUITION',
        description: 'World-renowned visual animations unlocking the deep intuition behind limits, derivatives, and integration.',
        url: 'https://www.youtube.com/@3blue1brown',
        subscribers: '6.4M subscribers'
      },
      {
        id: 'khan-calc',
        title: 'Khan Academy - Calculus 1',
        category: 'STEP-BY-STEP FOUNDATIONS',
        description: 'Comprehensive guided practice and theoretical proofs for epsilon-delta limits, continuity, and differentiability.',
        url: 'https://www.youtube.com/@khanacademy',
        subscribers: '8.3M subscribers'
      },
      {
        id: 'prof-leonard',
        title: 'Professor Leonard',
        category: 'UNIVERSITY LECTURES',
        description: 'Full-length university whiteboard lectures explaining real analysis and calculus with clarity and rigor.',
        url: 'https://www.youtube.com/@ProfessorLeonard',
        subscribers: '1.2M subscribers'
      }
    ],
    chapters: [
      {
        id: 'an1-ch1',
        title: "Chapitre 1 : Les Nombres Réels & Propriétés de R",
        tag: 'PDF • Handout',
        description: 'Axiomatique des réels, borne supérieure, propriété d’Archimède, densité des rationnels et intervalles.',
        meta: '32 Pages • 2.1 MB',
        downloadUrl: 'https://example.com/resources/analyse1/ch1-reels.pdf'
      },
      {
        id: 'an1-ch2',
        title: "Chapitre 2 : Suites Numériques & Convergence",
        tag: 'Lecture Notes',
        description: 'Suites convergentes, théorèmes de comparaison, suites adjacentes, théorème de Bolzano-Weierstrass et suites de Cauchy.',
        meta: '44 Pages • 3.2 MB',
        downloadUrl: 'https://example.com/resources/analyse1/ch2-suites.pdf'
      },
      {
        id: 'an1-ch3',
        title: "Chapitre 3 : Fonctions Continues & Théorème des Valeurs Intermédiaires",
        tag: 'Full Syllabus',
        description: 'Limites selon Heine et Cauchy, continuité sur un intervalle, TVI et continuité uniforme.',
        meta: '38 Pages • 2.9 MB',
        downloadUrl: 'https://example.com/resources/analyse1/ch3-continuite.pdf'
      },
      {
        id: 'an1-ch4',
        title: "Chapitre 4 : Dérivabilité, Théorème de Rolle & Égalités des Accroissements Finis",
        tag: 'PDF • Slides',
        description: 'Nombre dérivé, formule des accroissements finis, théorème de Cauchy et développements limités d’ordre 1.',
        meta: '50 Slides • 3.5 MB',
        downloadUrl: 'https://example.com/resources/analyse1/ch4-derivabilite.pdf'
      }
    ],
    exams: [
      {
        id: 'an1-ex1',
        title: 'Examen Final - Analyse Mathématique 1',
        year: '2023 - 2024',
        description: 'Épreuve terminale : études complètes de suites récurrentes, limites par développement limité et démonstrations théoriques.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/analyse1/examen-final-2024.pdf'
      },
      {
        id: 'an1-ex2',
        title: 'Contrôle Continu 1 (Midterm)',
        year: '2023 - 2024',
        description: 'Évaluation surveillée portant sur les propriétés fondamentales de R et la convergence des suites.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/analyse1/cc1-2024.pdf'
      },
      {
        id: 'an1-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Session de seconde chance couvrant l’ensemble du programme semestriel avec corrigé détaillé.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/analyse1/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'algebre-1',
    slug: 'algebre-1',
    semesterId: 'semester-1',
    semesterNumber: 1,
    title: 'Algèbre 1',
    titleAr: 'جبر 1',
    code: 'MATH-102',
    credits: '5 ECTS',
    iconType: 'grid',
    descriptionEn: 'Set theory, algebraic structures (groups, rings, fields), polynomials, and linear systems.',
    descriptionAr: 'نظرية المجموعات، البنى الجبرية (الزمر، الحلقات، الحقول)، كثيرات الحدود والأنظمة الخطية.',
    channels: [
      {
        id: 'alg-3b1b',
        title: '3Blue1Brown - Linear Algebra Core',
        category: 'GEOMETRIC PERSPECTIVE',
        description: 'Visual representations of linear combinations, spans, bases, and linear systems.',
        url: 'https://www.youtube.com/@3blue1brown',
        subscribers: '6.4M subscribers'
      },
      {
        id: 'alg-socal',
        title: 'Socratica - Abstract Algebra',
        category: 'THEORETICAL ALGEBRA',
        description: 'Engaging, clean lessons on group theory, ring structures, homomorphisms, and modulo arithmetic.',
        url: 'https://www.youtube.com/@Socratica',
        subscribers: '950K subscribers'
      },
      {
        id: 'alg-mit',
        title: 'MIT OpenCourseWare',
        category: 'MIT LECTURES',
        description: 'Rigorous foundational mathematics lectures from world-leading instructors at MIT.',
        url: 'https://www.youtube.com/@mitocw',
        subscribers: '5.2M subscribers'
      }
    ],
    chapters: [
      {
        id: 'alg1-ch1',
        title: "Chapitre 1 : Notions de Logique, Théorie des Ensembles & Applications",
        tag: 'PDF • Handout',
        description: 'Connecteurs logiques, quantificateurs, injectivité, surjectivité, bijectivité et relations d’équivalence.',
        meta: '36 Pages • 2.6 MB',
        downloadUrl: 'https://example.com/resources/algebre1/ch1-logique.pdf'
      },
      {
        id: 'alg1-ch2',
        title: "Chapitre 2 : Lois de Composition Interne & Structures Algébriques",
        tag: 'Lecture Notes',
        description: 'Groupes, sous-groupes, théorèmes de Lagrange, anneaux, idéaux, corps commutatifs.',
        meta: '42 Pages • 3.1 MB',
        downloadUrl: 'https://example.com/resources/algebre1/ch2-structures.pdf'
      },
      {
        id: 'alg1-ch3',
        title: "Chapitre 3 : Arithmétique dans Z & Polynômes à une Indéterminée",
        tag: 'Full Syllabus',
        description: 'Division euclidienne, algorithme d’Euclide étendu, PPCM/PGCD, factorisation de polynômes sur R et C.',
        meta: '48 Pages • 3.8 MB',
        downloadUrl: 'https://example.com/resources/algebre1/ch3-polynomes.pdf'
      },
      {
        id: 'alg1-ch4',
        title: "Chapitre 4 : Fractions Rationnelles & Décomposition en Éléments Simples",
        tag: 'PDF • Slides',
        description: 'Pôles, parties entières et méthodes de décomposition pratique.',
        meta: '28 Slides • 1.9 MB',
        downloadUrl: 'https://example.com/resources/algebre1/ch4-fractions.pdf'
      }
    ],
    exams: [
      {
        id: 'alg1-ex1',
        title: 'Examen Final - Algèbre 1',
        year: '2023 - 2024',
        description: 'Exercices complets sur les groupes cycliques, décomposition de polynômes et systèmes modulaires.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/algebre1/examen-final-2024.pdf'
      },
      {
        id: 'alg1-ex2',
        title: 'Interrogation Écrite (Devoir Surveillé)',
        year: '2023 - 2024',
        description: 'Évaluation portant sur les relations d’équivalence et l’arithmétique de Bezout.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/algebre1/interro-2024.pdf'
      },
      {
        id: 'alg1-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve générale de synthèse avec corrigé type officiel.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/algebre1/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'algo-1',
    slug: 'algo-1',
    semesterId: 'semester-1',
    semesterNumber: 1,
    title: 'Algo 1',
    titleAr: 'خوارزميات 1',
    code: 'CS-101',
    credits: '6 ECTS',
    iconType: 'code',
    descriptionEn: 'Introduction to algorithmic thinking, core data structures, pseudocode, and procedural programming fundamentals.',
    descriptionAr: 'مقدمة في التفكير الخوارزمي وهياكل البيانات الأساسية والشفرة الوهمية وأساسيات البرمجة الإجرائية.',
    channels: [
      {
        id: 'algo-abdul-bari',
        title: 'Abdul Bari - Algorithms',
        category: 'ANALYSIS & DESIGN',
        description: 'In-depth whiteboard walkthroughs on recursion trees, asymptotic analysis, divide-and-conquer, and Big-O foundations.',
        url: 'https://www.youtube.com/@abdul_bari',
        subscribers: '1.1M subscribers'
      },
      {
        id: 'algo-cs50',
        title: 'CS50 - David J. Malan',
        category: 'HARVARD UNIVERSITY',
        description: 'Legendary introductory lectures covering computational thinking, memory allocation, arrays, sorting, and algorithmic efficiency.',
        url: 'https://www.youtube.com/@cs50',
        subscribers: '2.4M subscribers'
      },
      {
        id: 'algo-bro-code',
        title: 'Bro Code',
        category: 'FAST PRACTICAL SYNTAX',
        description: 'Direct, no-fluff animated tutorials on sorting algorithms, procedural syntax, linear searches, and stack mechanisms.',
        url: 'https://www.youtube.com/@BroCodez',
        subscribers: '2.6M subscribers'
      }
    ],
    chapters: [
      {
        id: 'algo1-ch1',
        title: "Chapitre 1 : Introduction & Notions d'Algorithme",
        tag: 'PDF • Slides',
        description: 'Formal definitions, machine computation models, trace tables, and standard pseudocode conventions.',
        meta: '35 Slides • 2.4 MB',
        downloadUrl: 'https://example.com/resources/algo1/ch1-notions.pdf'
      },
      {
        id: 'algo1-ch2',
        title: "Chapitre 2 : Variables, Types & Opérateurs",
        tag: 'Lecture Notes',
        description: 'Primitive data types (int, float, char, boolean), memory footprints, arithmetic/logical operations, and precedence.',
        meta: '28 Pages • 2.8 MB',
        downloadUrl: 'https://example.com/resources/algo1/ch2-types.pdf'
      },
      {
        id: 'algo1-ch3',
        title: "Chapitre 3 : Structures Conditionnelles & Boucles",
        tag: 'Full Syllabus',
        description: 'Branching logic (Si...Alors...Sinon, Selon-Cas) and iteration schemes (Pour, TantQue, Faire...TantQue) with termination proofs.',
        meta: '52 Pages • 5.1 MB',
        downloadUrl: 'https://example.com/resources/algo1/ch3-boucles.pdf'
      },
      {
        id: 'algo1-ch4',
        title: "Chapitre 4 : Fonctions, Procédures & Modularité",
        tag: 'PDF • Handout',
        description: 'Subroutine scoping, parameter passing by value vs. reference, local/global states, and introductory recursion.',
        meta: '41 Pages • 3.7 MB',
        downloadUrl: 'https://example.com/resources/algo1/ch4-fonctions.pdf'
      }
    ],
    exams: [
      {
        id: 'algo1-ex1',
        title: 'Examen Final - Algorithmique 1',
        year: '2023 - 2024',
        description: 'Comprehensive semester examination covering trace tables, array sorting, and structured procedure design.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/algo1/examen-final-2024.pdf'
      },
      {
        id: 'algo1-ex2',
        title: 'Contrôle Continu 1 (Midterm)',
        year: '2023 - 2024',
        description: 'Mid-term assessment focusing exclusively on algorithmic conditions, nested loops, and primitive type validation.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/algo1/cc1-2024.pdf'
      },
      {
        id: 'algo1-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Remedial session exam encompassing recursive functions, array manipulation, and procedural code optimization.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/algo1/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'structure-machine',
    slug: 'structure-machine',
    semesterId: 'semester-1',
    semesterNumber: 1,
    title: 'Structure Machine',
    titleAr: 'بنية الآلة',
    code: 'CS-102',
    credits: '5 ECTS',
    iconType: 'cpu',
    descriptionEn: 'Digital electronics fundamentals, Boolean algebra, logic gates, combinational and sequential circuit design.',
    descriptionAr: 'أساسيات الإلكترونيات الرقمية، الجبر البولياني، البوابات المنطقية، وتصميم الدوائر التوافقية والتعاقبية.',
    channels: [
      {
        id: 'sm-ben-eater',
        title: 'Ben Eater - 8-Bit Computer',
        category: 'HARDWARE ARCHITECTURE',
        description: 'Building an 8-bit breadboard computer from scratch using basic 7400-series logic gates and registers.',
        url: 'https://www.youtube.com/@BenEater',
        subscribers: '1.3M subscribers'
      },
      {
        id: 'sm-neso',
        title: 'Neso Academy - Digital Electronics',
        category: 'CIRCUIT THEORY',
        description: 'Clear, exhaustive explanations of Karnaugh maps, binary arithmetic, decoders, multiplexers, and flip-flops.',
        url: 'https://www.youtube.com/@nesoacademy',
        subscribers: '2.9M subscribers'
      },
      {
        id: 'sm-crashcourse',
        title: 'CrashCourse - Computer Science',
        category: 'HISTORY & HARDWARE',
        description: 'High-production overview of logic gates, transistors, and the architectural birth of modern CPUs.',
        url: 'https://www.youtube.com/@crashcourse',
        subscribers: '15.8M subscribers'
      }
    ],
    chapters: [
      {
        id: 'sm1-ch1',
        title: "Chapitre 1 : Systèmes de Numération & Codage de l'Information",
        tag: 'PDF • Slides',
        description: 'Bases 2, 8, 10, 16, conversions, arithmétique binaire, complément à 2, norme IEEE-754 pour les flottants.',
        meta: '38 Slides • 2.7 MB',
        downloadUrl: 'https://example.com/resources/sm/ch1-numeration.pdf'
      },
      {
        id: 'sm1-ch2',
        title: "Chapitre 2 : Algèbre de Boole & Simplification des Fonctions Logiques",
        tag: 'Lecture Notes',
        description: 'Postulats de Huntington, théorèmes de De Morgan, formes canoniques et méthode des tableaux de Karnaugh.',
        meta: '34 Pages • 2.4 MB',
        downloadUrl: 'https://example.com/resources/sm/ch2-boole.pdf'
      },
      {
        id: 'sm1-ch3',
        title: "Chapitre 3 : Circuits Logiques Combinatoires",
        tag: 'Full Syllabus',
        description: 'Conception d’additionneurs (Half & Full Adder), multiplexeurs, démultiplexeurs, comparateurs et décodeurs.',
        meta: '46 Pages • 3.9 MB',
        downloadUrl: 'https://example.com/resources/sm/ch3-combinatoire.pdf'
      },
      {
        id: 'sm1-ch4',
        title: "Chapitre 4 : Circuits Séquentiels & Bascules",
        tag: 'PDF • Handout',
        description: 'Horloges, bascules RS, D, JK, T, compteurs asynchrones/synchrones et registres à décalage.',
        meta: '42 Pages • 3.3 MB',
        downloadUrl: 'https://example.com/resources/sm/ch4-sequentiel.pdf'
      }
    ],
    exams: [
      {
        id: 'sm1-ex1',
        title: 'Examen Final - Structure Machine 1',
        year: '2023 - 2024',
        description: 'Synthèse combinatoire complète avec décodeurs et conception d’un compteur modulo 12 synchrone.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/sm/examen-final-2024.pdf'
      },
      {
        id: 'sm1-ex2',
        title: 'Contrôle Continu 1 (Midterm)',
        year: '2023 - 2024',
        description: 'Exercices sur le codage IEEE-754 et la minimisation de fonctions par tables de Karnaugh.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/sm/cc1-2024.pdf'
      },
      {
        id: 'sm1-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve terminale de session 2 avec synthèse de circuits arithmétiques.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/sm/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'se',
    slug: 'se',
    semesterId: 'semester-1',
    semesterNumber: 1,
    title: 'SE',
    titleAr: 'أنظمة التشغيل',
    code: 'CS-103',
    credits: '4 ECTS',
    iconType: 'terminal',
    descriptionEn: 'Operating system fundamentals, UNIX/Linux command line, file system hierarchy, process management, and shell scripting.',
    descriptionAr: 'مفاهيم أنظمة التشغيل الأساسية، سطر أوامر يونكس/لينكس، هيكل نظام الملفات، إدارة العمليات وبرمجة الشل.',
    channels: [
      {
        id: 'se-netchuck',
        title: 'NetworkChuck - Linux for Beginners',
        category: 'HANDS-ON LINUX',
        description: 'Vibrant, clear introductions to bash navigation, file permissions, shell piping, and practical terminal workflows.',
        url: 'https://www.youtube.com/@NetworkChuck',
        subscribers: '3.8M subscribers'
      },
      {
        id: 'se-freecodecamp',
        title: 'freeCodeCamp - Operating Systems',
        category: 'OS THEORY',
        description: 'Comprehensive full-length university lectures on process scheduling, memory virtualization, and file systems.',
        url: 'https://www.youtube.com/@freecodecamp',
        subscribers: '10.2M subscribers'
      },
      {
        id: 'se-firas',
        title: 'Learn Linux TV',
        category: 'SYSADMIN & SCRIPTING',
        description: 'Professional guides to shell scripting (Bash), Linux user management, grep, sed, and awk commands.',
        url: 'https://www.youtube.com/@LearnLinuxTV',
        subscribers: '470K subscribers'
      }
    ],
    chapters: [
      {
        id: 'se1-ch1',
        title: "Chapitre 1 : Introduction aux Systèmes d'Exploitation & Architecture UNIX",
        tag: 'PDF • Slides',
        description: 'Rôle de l’OS, noyau (kernel), espace utilisateur, appels système (syscalls) et historique UNIX/GNU Linux.',
        meta: '30 Slides • 2.1 MB',
        downloadUrl: 'https://example.com/resources/se/ch1-intro.pdf'
      },
      {
        id: 'se1-ch2',
        title: "Chapitre 2 : Arborescence, Système de Fichiers & Gestion des Droits",
        tag: 'Lecture Notes',
        description: 'Standard FHS, commandes de base (ls, cd, cp, mv, rm), inodes, liens physiques/symboliques et droits (chmod, chown).',
        meta: '36 Pages • 2.7 MB',
        downloadUrl: 'https://example.com/resources/se/ch2-fs.pdf'
      },
      {
        id: 'se1-ch3',
        title: "Chapitre 3 : Gestion des Processus & Ordonnancement",
        tag: 'Full Syllabus',
        description: 'Cycle de vie d’un processus, PID, signaux (kill, SIGTERM), tubes de communication (pipes) et redirections.',
        meta: '44 Pages • 3.4 MB',
        downloadUrl: 'https://example.com/resources/se/ch3-processus.pdf'
      },
      {
        id: 'se1-ch4',
        title: "Chapitre 4 : Programmation Shell Bash Avancée",
        tag: 'PDF • Handout',
        description: 'Variables, arguments, structures de contrôle (if, case, for, while) et filtres (grep, awk, sed).',
        meta: '40 Pages • 3.0 MB',
        downloadUrl: 'https://example.com/resources/se/ch4-shell.pdf'
      }
    ],
    exams: [
      {
        id: 'se1-ex1',
        title: 'Examen Final - Système d’Exploitation 1',
        year: '2023 - 2024',
        description: 'Questions théoriques sur l’ordonnancement, analyse de commandes bash et écriture d’un script de sauvegarde.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/se/examen-final-2024.pdf'
      },
      {
        id: 'se1-ex2',
        title: 'Test Pratique de TP (Terminal & Bash)',
        year: '2023 - 2024',
        description: 'Évaluation en laboratoire sur la manipulation de fichiers, tubes et scripts shell.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/se/test-tp-2024.pdf'
      },
      {
        id: 'se1-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve écrite portant sur les inodes, gestion des droits octaux et processus zombies.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/se/rattrapage-2023.pdf'
      }
    ]
  },

  // ================= SEMESTER 2 (EXACTLY 7 MODULES) =================
  {
    id: 'analyse-2',
    slug: 'analyse-2',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'Analyse 2',
    titleAr: 'تحليل 2',
    code: 'MATH-201',
    credits: '5 ECTS',
    iconType: 'integral',
    descriptionEn: 'Definite integrals, primitives, ordinary differential equations (ODEs), and Taylor expansions.',
    descriptionAr: 'التكاملات المحددة، الدوال الأصلية، المعادلات التفاضلية العادية ونشر تايلور.',
    channels: [
      {
        id: 'an2-blackpen',
        title: 'blackpenredpen',
        category: 'INTEGRAL TECHNIQUES',
        description: 'Engaging problem-solving sessions on tricky integration tricks, ODEs, and series tests.',
        url: 'https://www.youtube.com/@blackpenredpen',
        subscribers: '1.4M subscribers'
      },
      {
        id: 'an2-3b1b',
        title: '3Blue1Brown - Differential Equations',
        category: 'VISUAL CALCULUS',
        description: 'Intuitive geometric visualizations of vector fields, ODE solutions, and harmonic oscillators.',
        url: 'https://www.youtube.com/@3blue1brown',
        subscribers: '6.4M subscribers'
      },
      {
        id: 'an2-khan',
        title: 'Khan Academy - Integral Calculus',
        category: 'FULL SYLLABUS',
        description: 'Step-by-step integrals, Riemann sums, integration by parts, and trigonometric substitutions.',
        url: 'https://www.youtube.com/@khanacademy',
        subscribers: '8.3M subscribers'
      }
    ],
    chapters: [
      {
        id: 'an2-ch1',
        title: "Chapitre 1 : Intégrale de Riemann & Calcul de Primitives",
        tag: 'PDF • Slides',
        description: 'Sommes de Darboux et Riemann, théorème fondamental de l’analyse, intégration par parties et changement de variable.',
        meta: '40 Slides • 2.9 MB',
        downloadUrl: 'https://example.com/resources/analyse2/ch1-riemann.pdf'
      },
      {
        id: 'an2-ch2',
        title: "Chapitre 2 : Intégrales Généralisées (Impropres)",
        tag: 'Lecture Notes',
        description: 'Critères de convergence sur un intervalle non borné, intégrales de Riemann de référence et absolue convergence.',
        meta: '32 Pages • 2.4 MB',
        downloadUrl: 'https://example.com/resources/analyse2/ch2-generalisees.pdf'
      },
      {
        id: 'an2-ch3',
        title: "Chapitre 3 : Équations Différentielles Ordinaires (EDO)",
        tag: 'Full Syllabus',
        description: 'Équations linéaires d’ordre 1 et d’ordre 2 à coefficients constants, méthode de variation de la constante.',
        meta: '48 Pages • 3.7 MB',
        downloadUrl: 'https://example.com/resources/analyse2/ch3-edo.pdf'
      },
      {
        id: 'an2-ch4',
        title: "Chapitre 4 : Développements Limités & Séries Entières",
        tag: 'PDF • Handout',
        description: 'Formule de Taylor-Young, Taylor-Lagrange, calculs de limites indéterminées et asymptotes.',
        meta: '36 Pages • 2.6 MB',
        downloadUrl: 'https://example.com/resources/analyse2/ch4-taylor.pdf'
      }
    ],
    exams: [
      {
        id: 'an2-ex1',
        title: 'Examen Final - Analyse 2',
        year: '2023 - 2024',
        description: 'Calculs d’intégrales impropres, résolution d’EDO d’ordre 2 avec second membre et développement limité.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/analyse2/examen-final-2024.pdf'
      },
      {
        id: 'an2-ex2',
        title: 'Contrôle Continu 1',
        year: '2023 - 2024',
        description: 'Épreuve portant sur les techniques d’intégration et les primitives de fractions rationnelles.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/analyse2/cc1-2024.pdf'
      },
      {
        id: 'an2-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Session de rattrapage intégrale avec corrigé.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/analyse2/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'algebre-2',
    slug: 'algebre-2',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'Algèbre 2',
    titleAr: 'جبر 2',
    code: 'MATH-202',
    credits: '5 ECTS',
    iconType: 'grid',
    descriptionEn: 'Vector spaces, subspaces, linear transformations, matrices, determinants, and matrix inversion.',
    descriptionAr: 'الفضاءات الشعاعية، الفضاءات الجزئية، التطبيقات الخطية، المصفوفات، والمحددات.',
    channels: [
      {
        id: 'alg2-strang',
        title: 'Gilbert Strang - Linear Algebra',
        category: 'MIT CLASSIC',
        description: 'The golden standard of linear algebra lectures: matrix subspaces, eigenvalues, projections, and decompositions.',
        url: 'https://www.youtube.com/@mitocw',
        subscribers: '5.2M subscribers'
      },
      {
        id: 'alg2-3b1b',
        title: '3Blue1Brown - Essence of Linear Algebra',
        category: 'GEOMETRIC INTUITION',
        description: 'Visualizations of determinants as volume scaling, eigenvectors as steady axes, and matrix multiplication as composition.',
        url: 'https://www.youtube.com/@3blue1brown',
        subscribers: '6.4M subscribers'
      },
      {
        id: 'alg2-michel',
        title: 'Michel van Biezen',
        category: 'WORKED PROBLEMS',
        description: 'Step-by-step calculations for Gaussian elimination, finding rank, determinants, and matrix inverses.',
        url: 'https://www.youtube.com/@MichelvanBiezen',
        subscribers: '980K subscribers'
      }
    ],
    chapters: [
      {
        id: 'alg2-ch1',
        title: "Chapitre 1 : Espaces Vectoriels & Sous-Espaces",
        tag: 'PDF • Handout',
        description: 'Familles libres, génératrices, bases, dimension finie, théorème de la base incomplète et sous-espaces supplémentaires.',
        meta: '38 Pages • 2.8 MB',
        downloadUrl: 'https://example.com/resources/algebre2/ch1-espaces.pdf'
      },
      {
        id: 'alg2-ch2',
        title: "Chapitre 2 : Applications Linéaires & Théorème du Rang",
        tag: 'Lecture Notes',
        description: 'Noyau (Ker), Image (Im), isomorphisme, théorème du rang et composition d’applications linéaires.',
        meta: '34 Pages • 2.5 MB',
        downloadUrl: 'https://example.com/resources/algebre2/ch2-applications.pdf'
      },
      {
        id: 'alg2-ch3',
        title: "Chapitre 3 : Matrices & Systèmes Linéaires",
        tag: 'Full Syllabus',
        description: 'Calcul matriciel, matrice d’une application linéaire, changement de base, pivot de Gauss et inversion.',
        meta: '46 Pages • 3.6 MB',
        downloadUrl: 'https://example.com/resources/algebre2/ch3-matrices.pdf'
      },
      {
        id: 'alg2-ch4',
        title: "Chapitre 4 : Déterminants & Applications",
        tag: 'PDF • Slides',
        description: 'Formes multilinéaires alternées, comatrice, formules de Cramer et calcul de rang.',
        meta: '30 Slides • 2.2 MB',
        downloadUrl: 'https://example.com/resources/algebre2/ch4-determinants.pdf'
      }
    ],
    exams: [
      {
        id: 'alg2-ex1',
        title: 'Examen Final - Algèbre 2',
        year: '2023 - 2024',
        description: 'Exercices complets de diagonalisation, théorème du rang et résolution de systèmes paramétriques.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/algebre2/examen-final-2024.pdf'
      },
      {
        id: 'alg2-ex2',
        title: 'Contrôle Continu 1',
        year: '2023 - 2024',
        description: 'Épreuve sur les espaces vectoriels, indépendance linéaire et calcul de noyau/image.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/algebre2/cc1-2024.pdf'
      },
      {
        id: 'alg2-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve de seconde chance avec corrigé détaillé pas à pas.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/algebre2/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'algo-2',
    slug: 'algo-2',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'Algo 2',
    titleAr: 'خوارزميات 2',
    code: 'CS-201',
    credits: '6 ECTS',
    iconType: 'branch',
    descriptionEn: 'Advanced data structures: linked lists, stacks, queues, binary search trees, and recursive problem solving.',
    descriptionAr: 'هياكل البيانات المتقدمة: القوائم المترابطة، المكدسات، الطوابير، أشجار البحث الثنائية وحل المشاكل بالاستدعاء الذاتي.',
    channels: [
      {
        id: 'algo2-abdul',
        title: 'Abdul Bari - Data Structures',
        category: 'DATA STRUCTURE MASTERY',
        description: 'Masterclass tutorials on singly and doubly linked lists, trees, AVL rotations, and graph representations.',
        url: 'https://www.youtube.com/@abdul_bari',
        subscribers: '1.1M subscribers'
      },
      {
        id: 'algo2-william',
        title: 'William Fiset - Data Structures',
        category: 'ALGORITHM ANIMATIONS',
        description: 'Software engineer animated visualizations of trees, heaps, priority queues, and union-find.',
        url: 'https://www.youtube.com/@WilliamFiset-videos',
        subscribers: '320K subscribers'
      },
      {
        id: 'algo2-mycodeschool',
        title: 'mycodeschool',
        category: 'POINTERS & MEMORY',
        description: 'Unmatched deep-dives into pointer arithmetic, memory layouts, and C dynamic memory allocation.',
        url: 'https://www.youtube.com/@mycodeschool',
        subscribers: '1.8M subscribers'
      }
    ],
    chapters: [
      {
        id: 'algo2-ch1',
        title: "Chapitre 1 : Récursivité & Analyse de Complexité",
        tag: 'PDF • Slides',
        description: 'Récursivité simple, croisée et terminale. Équations de récurrence et notation grand O.',
        meta: '36 Slides • 2.5 MB',
        downloadUrl: 'https://example.com/resources/algo2/ch1-recursivite.pdf'
      },
      {
        id: 'algo2-ch2',
        title: "Chapitre 2 : Listes Chaînées Simples & Doubles",
        tag: 'Lecture Notes',
        description: 'Pointeurs, allocation dynamique, insertion, suppression, parcours et inversion de listes.',
        meta: '44 Pages • 3.2 MB',
        downloadUrl: 'https://example.com/resources/algo2/ch2-listes.pdf'
      },
      {
        id: 'algo2-ch3',
        title: "Chapitre 3 : Piles (Stacks) & Files (Queues)",
        tag: 'Full Syllabus',
        description: 'Implantation par tableaux et par pointeurs, applications : notation polonaise inverse et parcours.',
        meta: '38 Pages • 2.8 MB',
        downloadUrl: 'https://example.com/resources/algo2/ch3-piles.pdf'
      },
      {
        id: 'algo2-ch4',
        title: "Chapitre 4 : Arbres Binaires & Arbres Binaires de Recherche (ABR)",
        tag: 'PDF • Handout',
        description: 'Parcours préfixe, infixe, postfixe, recherche, insertion et suppression dans un ABR.',
        meta: '50 Pages • 4.1 MB',
        downloadUrl: 'https://example.com/resources/algo2/ch4-arbres.pdf'
      }
    ],
    exams: [
      {
        id: 'algo2-ex1',
        title: 'Examen Final - Algorithmique & Structures 2',
        year: '2023 - 2024',
        description: 'Conception d’algorithmes récursifs sur les ABR et gestion d’un système de file de priorité.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/algo2/examen-final-2024.pdf'
      },
      {
        id: 'algo2-ex2',
        title: 'Contrôle Continu 1 (Midterm)',
        year: '2023 - 2024',
        description: 'Évaluation sur l’implémentation de listes doublement chaînées et récursivité.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/algo2/cc1-2024.pdf'
      },
      {
        id: 'algo2-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve complète de synthèse avec code source C commenté.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/algo2/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'proba-1',
    slug: 'proba-1',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'Proba 1',
    titleAr: 'احتمالات 1',
    code: 'STAT-201',
    credits: '4 ECTS',
    iconType: 'dices',
    descriptionEn: "Combinatorics, probability spaces, conditional probability, Bayes' theorem, and discrete random variables.",
    descriptionAr: 'التحليل التوافقي، فضاءات الاحتمال، الاحتمال الشرطي، مبرهنة بايز والمتغيرات العشوائية المنفصلة.',
    channels: [
      {
        id: 'proba-statquest',
        title: 'StatQuest with Josh Starmer',
        category: 'STATISTICAL CLARITY',
        description: 'BAM! Crystal-clear, fun visual explanations of probability distributions, Bayes formula, and expected value.',
        url: 'https://www.youtube.com/@statquest',
        subscribers: '1.2M subscribers'
      },
      {
        id: 'proba-khan',
        title: 'Khan Academy - Probability',
        category: 'PERMUTATIONS & COMBINATIONS',
        description: 'Exhaustive foundational problems covering Venn diagrams, conditional independence, and coin-toss distributions.',
        url: 'https://www.youtube.com/@khanacademy',
        subscribers: '8.3M subscribers'
      },
      {
        id: 'proba-mit',
        title: 'MIT OCW - Probabilistic Systems',
        category: 'COLLEGE RIGOR',
        description: 'Professor John Tsitsiklis classic MIT course on probabilistic systems and random variables.',
        url: 'https://www.youtube.com/@mitocw',
        subscribers: '5.2M subscribers'
      }
    ],
    chapters: [
      {
        id: 'proba-ch1',
        title: "Chapitre 1 : Analyse Combinatoire",
        tag: 'PDF • Handout',
        description: 'Principe fondamental du comptage, p-listes, arrangements, permutations et combinaisons.',
        meta: '28 Pages • 1.9 MB',
        downloadUrl: 'https://example.com/resources/proba/ch1-combinatoire.pdf'
      },
      {
        id: 'proba-ch2',
        title: "Chapitre 2 : Espaces Probabilisés & Probabilité Conditionnelle",
        tag: 'Lecture Notes',
        description: 'Univers, tribus, axiomes de Kolmogorov, formule des probabilités totales et formule de Bayes.',
        meta: '36 Pages • 2.6 MB',
        downloadUrl: 'https://example.com/resources/proba/ch2-espaces.pdf'
      },
      {
        id: 'proba-ch3',
        title: "Chapitre 3 : Variables Aléatoires Discrètes à une Dimension",
        tag: 'Full Syllabus',
        description: 'Loi de probabilité, fonction de répartition, espérance mathématique, variance et écart-type.',
        meta: '42 Pages • 3.1 MB',
        downloadUrl: 'https://example.com/resources/proba/ch3-variables.pdf'
      },
      {
        id: 'proba-ch4',
        title: "Chapitre 4 : Lois Discrètes Usuelles",
        tag: 'PDF • Slides',
        description: 'Loi uniforme, de Bernoulli, binomiale, géométrique, hypergéométrique et de Poisson.',
        meta: '34 Slides • 2.4 MB',
        downloadUrl: 'https://example.com/resources/proba/ch4-lois.pdf'
      }
    ],
    exams: [
      {
        id: 'proba-ex1',
        title: 'Examen Final - Probabilités & Statistiques 1',
        year: '2023 - 2024',
        description: 'Épreuve terminale : modélisation de tirages d’urnes, test de Bayes et calculs d’espérances de lois discrètes.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/proba/examen-final-2024.pdf'
      },
      {
        id: 'proba-ex2',
        title: 'Contrôle Continu 1',
        year: '2023 - 2024',
        description: 'Exercices d’application directe sur le dénombrement et probabilités conditionnelles.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/proba/cc1-2024.pdf'
      },
      {
        id: 'proba-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Sujet officiel de seconde session avec barème et solution complète.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/proba/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'archi',
    slug: 'archi',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'Archi',
    titleAr: 'معمارية الحاسوب',
    code: 'CS-202',
    credits: '4 ECTS',
    iconType: 'cpu',
    descriptionEn: 'Von Neumann architecture, CPU datapaths, control units, assembly language, memory hierarchy, and caching.',
    descriptionAr: 'معمارية فون نيومان، مسار البيانات، وحدات التحكم، لغة التجميع (Assembly)، وهرمية الذاكرة.',
    channels: [
      {
        id: 'archi-neso',
        title: 'Neso Academy - Computer Organization',
        category: 'CPU PIPELINE',
        description: 'Clear animated series on instruction cycles, micro-operations, control unit design, and memory mapping.',
        url: 'https://www.youtube.com/@nesoacademy',
        subscribers: '2.9M subscribers'
      },
      {
        id: 'archi-ben',
        title: 'Ben Eater - Microarchitecture',
        category: 'HARDWARE ENGINEERING',
        description: 'Understanding ALU logic, flag registers, conditional jumps, and machine code micro-instructions.',
        url: 'https://www.youtube.com/@BenEater',
        subscribers: '1.3M subscribers'
      },
      {
        id: 'archi-freecodecamp',
        title: 'freeCodeCamp - Computer Architecture',
        category: 'DEEP DIVE',
        description: 'Comprehensive college curriculum course covering cache mapping, paging, and assembly programming.',
        url: 'https://www.youtube.com/@freecodecamp',
        subscribers: '10.2M subscribers'
      }
    ],
    chapters: [
      {
        id: 'archi-ch1',
        title: "Chapitre 1 : Modèle de Von Neumann & Structure Générale d'un Ordinateur",
        tag: 'PDF • Slides',
        description: 'Bus de données/adresses/contrôle, UAL, unité de contrôle, registres généraux (PC, IR, MAR, MBR).',
        meta: '36 Slides • 2.6 MB',
        downloadUrl: 'https://example.com/resources/archi/ch1-von-neumann.pdf'
      },
      {
        id: 'archi-ch2',
        title: "Chapitre 2 : Cycle d'Instruction & Modes d'Adressage",
        tag: 'Lecture Notes',
        description: 'Phases Fetch-Decode-Execute, adressage immédiat, direct, indirect, basé et indexé.',
        meta: '40 Pages • 3.0 MB',
        downloadUrl: 'https://example.com/resources/archi/ch2-instruction.pdf'
      },
      {
        id: 'archi-ch3',
        title: "Chapitre 3 : Hiérarchie Mémoire & Mémoire Cache",
        tag: 'Full Syllabus',
        description: 'Principe de localité spatiale et temporelle, cache L1/L2, correspondance directe, associative et politiques de remplacement.',
        meta: '44 Pages • 3.4 MB',
        downloadUrl: 'https://example.com/resources/archi/ch3-cache.pdf'
      },
      {
        id: 'archi-ch4',
        title: "Chapitre 4 : Introduction à la Programmation en Langage Assembleur (x86/MIPS)",
        tag: 'PDF • Handout',
        description: 'Jeu d’instructions, instructions arithmétiques, branchements conditionnels, pile d’appels et sous-programmes.',
        meta: '48 Pages • 3.8 MB',
        downloadUrl: 'https://example.com/resources/archi/ch4-assembleur.pdf'
      }
    ],
    exams: [
      {
        id: 'archi-ex1',
        title: 'Examen Final - Architecture des Ordinateurs',
        year: '2023 - 2024',
        description: 'Analyse d’un cycle d’instruction complet, calcul de performances de mémoire cache et programme assembleur.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/archi/examen-final-2024.pdf'
      },
      {
        id: 'archi-ex2',
        title: 'Contrôle Continu 1',
        year: '2023 - 2024',
        description: 'Évaluation sur les modes d’adressage et chronogrammes d’exécution d’instructions.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/archi/cc1-2024.pdf'
      },
      {
        id: 'archi-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Session de rattrapage avec corrigé détaillé sur les taux de défaut de cache.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/archi/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'lm',
    slug: 'lm',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'LM',
    titleAr: 'منطق رياضي',
    code: 'CS-203',
    credits: '3 ECTS',
    iconType: 'bot',
    descriptionEn: 'Propositional logic, truth tables, first-order predicate logic, formal proofs, deduction systems, and normal forms.',
    descriptionAr: 'منطق القضايا، جداول الحقيقة، منطق المحمولات، البراهين الصورية وأنظمة الاستنتاج.',
    channels: [
      {
        id: 'lm-trev',
        title: 'TrevTutor - Mathematical Logic',
        category: 'FORMAL REASONING',
        description: 'Step-by-step truth tables, logical equivalence proofs, natural deduction rules, and first-order quantifiers.',
        url: 'https://www.youtube.com/@TrevTutor',
        subscribers: '190K subscribers'
      },
      {
        id: 'lm-neso',
        title: 'Neso Academy - Discrete Mathematics',
        category: 'DISCRETE LOGIC',
        description: 'Comprehensive tutorials on predicate calculus, satisfiability, resolution refutation, and conjunctive normal form.',
        url: 'https://www.youtube.com/@nesoacademy',
        subscribers: '2.9M subscribers'
      },
      {
        id: 'lm-mit',
        title: 'MIT OCW - Mathematics for Computer Science',
        category: 'PROOFS & INDUCTION',
        description: 'MIT foundation course on mathematical induction, structural recursion, logic, and formal correctness.',
        url: 'https://www.youtube.com/@mitocw',
        subscribers: '5.2M subscribers'
      }
    ],
    chapters: [
      {
        id: 'lm-ch1',
        title: "Chapitre 1 : Logique des Propositions & Sémantique",
        tag: 'PDF • Slides',
        description: 'Connecteurs, tables de vérité, tautologies, antilogies, équivalences remarquables et satisfiabilité (SAT).',
        meta: '32 Slides • 2.2 MB',
        downloadUrl: 'https://example.com/resources/lm/ch1-propositions.pdf'
      },
      {
        id: 'lm-ch2',
        title: "Chapitre 2 : Formes Normales & Principe de Résolution",
        tag: 'Lecture Notes',
        description: 'Mise sous Forme Normale Conjonctive (FNC) et Disjonctive (FND), clauses de Horn, algorithme de Davis-Putnam.',
        meta: '38 Pages • 2.7 MB',
        downloadUrl: 'https://example.com/resources/lm/ch2-resolution.pdf'
      },
      {
        id: 'lm-ch3',
        title: "Chapitre 3 : Logique des Prédicats du Premier Ordre",
        tag: 'Full Syllabus',
        description: 'Termes, formules atomiques, quantificateurs universel et existentiel, variables libres/liées, interprétations et modèles.',
        meta: '44 Pages • 3.2 MB',
        downloadUrl: 'https://example.com/resources/lm/ch3-predicats.pdf'
      },
      {
        id: 'lm-ch4',
        title: "Chapitre 4 : Systèmes Formels de Déduction (Déduction Naturelle & Hilbert)",
        tag: 'PDF • Handout',
        description: 'Règles d’introduction et d’élimination, théorèmes de correction, de complétude et compacité.',
        meta: '36 Pages • 2.5 MB',
        downloadUrl: 'https://example.com/resources/lm/ch4-deduction.pdf'
      }
    ],
    exams: [
      {
        id: 'lm-ex1',
        title: 'Examen Final - Logique Mathématique',
        year: '2023 - 2024',
        description: 'Preuves par réfutation de résolution, skolemisation de formules de prédicats et déduction naturelle.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/lm/examen-final-2024.pdf'
      },
      {
        id: 'lm-ex2',
        title: 'Contrôle Continu 1',
        year: '2023 - 2024',
        description: 'Exercices sur la mise en forme normale FNC et validité de raisonnements propositionnels.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/lm/cc1-2024.pdf'
      },
      {
        id: 'lm-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve écrite de rattrapage avec solutions modèles pour toutes les démonstrations.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/lm/rattrapage-2023.pdf'
      }
    ]
  },

  {
    id: 'tco',
    slug: 'tco',
    semesterId: 'semester-2',
    semesterNumber: 2,
    title: 'TCO',
    titleAr: 'تقنيات التعبير والتواصل',
    code: 'HUM-201',
    credits: '3 ECTS',
    iconType: 'message',
    descriptionEn: 'Technical writing, academic presentations, professional communication, and digital collaboration methods.',
    descriptionAr: 'الكتابة التقنية، العروض التقديمية الأكاديمية، التواصل المهني وطرق التعاون الرقمي.',
    channels: [
      {
        id: 'tco-harvard',
        title: 'Harvard Business Review',
        category: 'PROFESSIONAL COMMUNICATION',
        description: 'Practical guides to public speaking, persuasive technical pitches, and collaborative team communication.',
        url: 'https://www.youtube.com/@HarvardBusinessReview',
        subscribers: '3.6M subscribers'
      },
      {
        id: 'tco-toastmasters',
        title: 'Toastmasters International',
        category: 'PUBLIC SPEAKING',
        description: 'Techniques for conquering stage fright, structuring spontaneous speeches, and body language mastery.',
        url: 'https://www.youtube.com/@ToastmastersInternational',
        subscribers: '120K subscribers'
      },
      {
        id: 'tco-stanford',
        title: 'Stanford Graduate School of Business',
        category: 'COMMUNICATION MASTERCLASS',
        description: 'Prof. Matt Abrahams legendary lectures: Think Fast, Talk Smart and spontaneous communication.',
        url: 'https://www.youtube.com/@stanfordgsb',
        subscribers: '2.1M subscribers'
      }
    ],
    chapters: [
      {
        id: 'tco-ch1',
        title: "Chapitre 1 : Principes de la Communication Interpersonnelle & Schémas de Shannon",
        tag: 'PDF • Slides',
        description: 'Émetteur, récepteur, canal, bruits, feedback, axiomes de Watzlawick et communication verbale/non verbale.',
        meta: '28 Slides • 1.8 MB',
        downloadUrl: 'https://example.com/resources/tco/ch1-principes.pdf'
      },
      {
        id: 'tco-ch2',
        title: "Chapitre 2 : Méthodologie de la Rédaction Technique & Scientifique",
        tag: 'Lecture Notes',
        description: 'Normes de citation, résumé de document, compte-rendu de TP, rapport de projet et bibliographie.',
        meta: '32 Pages • 2.2 MB',
        downloadUrl: 'https://example.com/resources/tco/ch2-redaction.pdf'
      },
      {
        id: 'tco-ch3',
        title: "Chapitre 3 : Techniques d'Expression Orale & Soutenance de Projet",
        tag: 'Full Syllabus',
        description: 'Gestion du trac, structure d’un diaporama percutant (Slides), gestion du temps et réponses aux questions.',
        meta: '36 Pages • 2.5 MB',
        downloadUrl: 'https://example.com/resources/tco/ch3-expression-orale.pdf'
      },
      {
        id: 'tco-ch4',
        title: "Chapitre 4 : Outils Collaboratifs & Communication en Entreprise",
        tag: 'PDF • Handout',
        description: 'Rédaction d’emails professionnels, CV, lettre de motivation et étiquette de réunion.',
        meta: '26 Pages • 1.7 MB',
        downloadUrl: 'https://example.com/resources/tco/ch4-collaboration.pdf'
      }
    ],
    exams: [
      {
        id: 'tco-ex1',
        title: 'Examen Final - Techniques de Communication',
        year: '2023 - 2024',
        description: 'Étude de cas d’entreprise : analyse des dysfonctionnements communicationnels et synthèse rédactionnelle.',
        session: 'Session: Normale',
        downloadUrl: 'https://example.com/resources/tco/examen-final-2024.pdf'
      },
      {
        id: 'tco-ex2',
        title: 'Évaluation Continue (Exposé Oral & Rapport)',
        year: '2023 - 2024',
        description: 'Grille d’évaluation pour la soutenance orale et le livrable écrit de synthèse.',
        session: 'Evaluation Écrite',
        downloadUrl: 'https://example.com/resources/tco/evaluation-continue.pdf'
      },
      {
        id: 'tco-ex3',
        title: 'Examen de Rattrapage',
        year: '2022 - 2023',
        description: 'Épreuve terminale de substitution avec corrigé type.',
        session: 'Session: Rattrapage',
        downloadUrl: 'https://example.com/resources/tco/rattrapage-2023.pdf'
      }
    ]
  }
];

// Helper functions for easy, safe querying
export function getSemesterById(id) {
  return semesters.find(s => s.id === id || s.slug === id);
}

export function getModulesBySemester(semesterId) {
  return modules.filter(m => m.semesterId === semesterId);
}

export function getModuleById(id) {
  return modules.find(m => m.id === id || m.slug === id);
}

export function searchModules(query) {
  if (!query || !query.trim()) return [];
  const q = query.trim().toLowerCase();
  return modules.filter(m => {
    return (
      m.title.toLowerCase().includes(q) ||
      m.titleAr.includes(q) ||
      m.code.toLowerCase().includes(q) ||
      m.descriptionEn.toLowerCase().includes(q) ||
      m.descriptionAr.includes(q) ||
      m.id.toLowerCase().includes(q) ||
      m.channels.some(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) ||
      m.chapters.some(ch => ch.title.toLowerCase().includes(q))
    );
  });
}
