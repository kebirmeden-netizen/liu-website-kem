// Language toggler (EN <-> FR) using data-i18n attributes
(function(){
    // French translations map (keys used in data-i18n)
    const TRANSLATIONS_FR = {
        /* navigation */
        'nav.home': 'Accueil',
        'nav.students': 'Étudiants',
        'nav.professors': 'Professeurs',
        'nav.courses': 'Cours',
        'nav.content': 'Contenu',
        'nav.schedule': 'Emploi du temps',
        'brand': 'LIU university',

        /* hero */
        'hero.title': 'Bienvenue à LIU university',
        'hero.subtitle': "Votre porte d'entrée vers une éducation de qualité",
        'cta.getStarted': 'Commencer',

        /* features */
        'feature.1.title': 'Professeurs experts',
        'feature.1.desc': "Apprenez auprès d'enseignants hautement qualifiés avec des années d'expérience",
        'feature.2.title': 'Cours complets',
        'feature.2.desc': "Explorez une large gamme de cours adaptés à vos besoins",
        'feature.3.title': 'Éducation de qualité',
        'feature.3.desc': "Accédez à du contenu pédagogique de haute qualité et des ressources",

        /* about */
        'about.p1': "LIU university est un établissement d'enseignement de premier plan dédié à fournir une éducation de qualité aux étudiants du monde entier.",
        'about.p2': "Avec une équipe de professeurs dévoués et une offre de cours complète, nous assurons à chaque étudiant la meilleure expérience d'apprentissage possible.",
        'about.title': 'À propos de notre école',

        /* pages */
        'page.courses.h1': 'Nos Cours',
        'page.courses.p': 'Découvrez nos offres de cours',
        'page.students.h1': 'Étudiants',
        'page.professors.h1': 'Professeurs',
        'page.content.h1': 'Contenu éducatif',
        'page.schedule.h1': 'Emploi du temps',
        'page.schedule.notice': "Vous devez être un étudiant inscrit à LIU university pour accéder à l'emploi du temps complet et vous inscrire aux cours.",
        'page.schedule.enrollPrompt': "Si vous n'êtes pas encore étudiant, veuillez vous inscrire d'abord.",

        /* courses (titles & descriptions) */
        'course.cs101.title': 'Développement Web',
        'course.cs101.desc': "Apprenez HTML, CSS, JavaScript et les frameworks web modernes.",
        'course.cs202.title': 'Intelligence Artificielle',
        'course.cs202.desc': "Maîtrisez les algorithmes d'apprentissage automatique et les applications d'IA.",
        'course.cs203.title': 'Science des données',
        'course.cs203.desc': "Analysez des données et créez des insights avec Python et R.",
        'course.math301.title': 'Mathématiques avancées',
        'course.math301.desc': "Explorez le calcul, l'algèbre et l'analyse mathématique.",
        'course.backend.title': 'Programmation Backend',
        'course.backend.desc': "Apprenez les langages et outils essentiels pour le développement backend.",
        'course.enroll': "S'inscrire",

        /* enroll / form */
        'enroll.title': "Inscription au cours",
        'enroll.subtitle': "Rejoignez nos cours et commencez votre apprentissage",
        'enroll.fullName.label': 'Nom complet *',
        'enroll.email.label': 'Adresse e-mail *',
        'enroll.phone.label': 'Numéro de téléphone *',
        'enroll.course.label': 'Sélectionner le cours *',
        'enroll.education.label': 'Niveau d\'études actuel *',
        'enroll.experience.label': 'Expérience précédente (Facultatif)',
        'enroll.message.label': 'Pourquoi voulez-vous vous inscrire? *',
        'enroll.submit': 'Soumettre l\'inscription',

        /* content resources (titles & descriptions) */
        'content.note1.title': 'Introduction au développement Web',
        'content.note1.desc': 'Notes de cours complètes sur les fondamentaux HTML, CSS et JavaScript.',
        'content.note2.title': 'Machine Learning avancé',
        'content.note2.desc': "Notes approfondies sur les réseaux neuronaux et l'apprentissage profond.",
        'content.note3.title': 'Calcul et Analyse',
        'content.note3.desc': 'Théorie mathématique complète et techniques de résolution de problèmes.',

        'content.video1.title': 'Introduction au C++',
        'content.video1.desc': "Vidéo courte sur les bases du C++.",
        'content.video2.title': 'HTML et CSS',
        'content.video2.desc': "Tout ce que vous devez savoir sur le développement web.",
        'content.video3.title': 'Mathématiques discrètes',
        'content.video3.desc': "Cours complet sur les mathématiques discrètes.",

        'content.assign1.title': 'Projet Web 1',
        'content.assign1.desc': 'Une collection de projets HTML et CSS pour pratiquer.',
        'content.assign2.title': 'Ensemble d\'exercices Machine Learning',
        'content.assign2.desc': 'Exercices pratiques avec jeux de données et défis de codage.',
        'content.assign3.title': 'Banque de problèmes de mathématiques',
        'content.assign3.desc': '300+ problèmes avec solutions couvrant tout le calcul.',

        'content.book1.title': 'Web Design et Fondamentaux du développement',
        'content.book1.desc': 'Référence essentielle pour les pratiques modernes de développement web.',
        'content.book2.title': 'Réseaux informatiques',
        'content.book2.desc': 'Introduction aux concepts de réseau informatique.',
        'content.book3.title': 'Le manuel de la Science des données',
        'content.book3.desc': 'Ressource complète pour l\'analyse et la visualisation des données.',
        'content.download': 'Accéder / Télécharger',

        /* schedule table headers */
        'table.course': 'Cours',
        'table.day': 'Jour',
        'table.time': 'Heure',
        'table.instructor': 'Enseignant',

        /* chat */
        'chat.title': 'Contactez LIU University',
        'chat.send': 'Envoyer le message',

        /* footer */
        'footer.copy': '© 2025 LIU university'
    };

    // Utility: save original text/placeholder to data-en so we can restore
    function saveOriginal(el){
        if(!el) return;
        if(el.dataset.en) return;
        if(el.placeholder !== undefined && el.placeholder) el.dataset.enPlaceholder = el.placeholder;
        if(el.value !== undefined && el.tagName === 'INPUT' && el.value) el.dataset.enValue = el.value;
        const text = el.textContent && el.textContent.trim();
        if(text) el.dataset.en = text;
    }

    // Apply translations for given language
    function applyLang(lang){
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            saveOriginal(el);
            if(lang === 'fr'){
                // prefer translations map
                if(TRANSLATIONS_FR[key]){
                    // if element expects placeholder
                    if(el.dataset.i18nPlaceholder === 'true'){
                        el.placeholder = TRANSLATIONS_FR[key];
                    } else {
                        el.textContent = TRANSLATIONS_FR[key];
                    }
                }
            } else {
                // restore
                if(el.dataset.en) el.textContent = el.dataset.en;
                if(el.dataset.enPlaceholder) el.placeholder = el.dataset.enPlaceholder;
                if(el.dataset.enValue) el.value = el.dataset.enValue;
            }
        });

        // Special: update buttons with class .enroll-btn and .submit-btn too (for elements that may not have data-i18n)
        document.querySelectorAll('.enroll-btn').forEach(b => {
            saveOriginal(b);
            if(lang === 'fr') b.textContent = TRANSLATIONS_FR['course.enroll'] || b.dataset.en || b.textContent;
            else if(b.dataset.en) b.textContent = b.dataset.en;
        });
        document.querySelectorAll('.submit-btn').forEach(b => {
            saveOriginal(b);
            if(lang === 'fr') b.textContent = TRANSLATIONS_FR['enroll.submit'] || b.dataset.en || b.textContent;
            else if(b.dataset.en) b.textContent = b.dataset.en;
        });

        // chat button label and visual for accessibility and clarity
        // Update every language toggle on the page (supports multiple instances)
        const toggles = Array.from(document.querySelectorAll('.lang-toggle'));
        const actionLang = (lang === 'fr') ? 'en' : 'fr';
        const ariaText = (actionLang === 'en') ? 'Basculer la langue en anglais' : 'Basculer la langue en français';
        const titleText = (actionLang === 'en') ? 'Switch to English' : 'Switch to Français';
        const badgeLabel = actionLang === 'en' ? 'EN' : 'FR';
        // Use a simple emoji flag for clarity: US flag when action is EN, FR flag when action is FR
        const flagMarkup = (actionLang === 'en')
            ? '<span class="flag-pill" aria-hidden="true"><span class="flag-wrap">🇺🇸</span></span>'
            : '<span class="flag-pill" aria-hidden="true"><span class="flag-wrap">🇫🇷</span></span>';
        const badgeMarkup = '<span class="lang-badge">' + badgeLabel + '</span>';

        toggles.forEach(langBtn => {
            try {
                langBtn.setAttribute('aria-label', ariaText);
                langBtn.setAttribute('title', titleText);
                // preserve focusability and role
                langBtn.setAttribute('role', 'button');
                langBtn.setAttribute('tabindex', '0');
                langBtn.dataset.currentLang = lang;
                // update inner markup
                langBtn.innerHTML = flagMarkup + badgeMarkup;
            } catch (e) {
                // ignore and continue
            }
        });

        // debug: confirm applyLang executed and what language was applied
        if (window && window.console && window.console.debug) {
            console.debug('[lang.js] applyLang executed — applied:', lang, 'toggles:', toggles.length, 'badge shows action:', badgeLabel);
        }

        localStorage.setItem('siteLang', lang);
        // mark document language and reveal page
        try{
            document.documentElement.lang = (lang === 'fr') ? 'fr' : 'en';
            document.body.classList.remove('no-flash');
            document.body.classList.add('lang-ready');
        }catch(e){}
    }

    // Toggle language
    function toggleLang(){
        const current = localStorage.getItem('siteLang') || 'en';
        applyLang(current === 'en' ? 'fr' : 'en');
    }

    document.addEventListener('DOMContentLoaded', function(){
        // Save originals for all elements with data-i18n
        document.querySelectorAll('[data-i18n], .enroll-btn, .submit-btn').forEach(saveOriginal);

        // Initialize language from storage or browser preference
        const stored = localStorage.getItem('siteLang') || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
        applyLang(stored);

        // attach toggle handlers to all language toggles (click + keyboard)
        const toggles = Array.from(document.querySelectorAll('.lang-toggle'));
        toggles.forEach(t => {
            // ensure only one listener
            t.removeEventListener('click', toggleLang);
            t.addEventListener('click', toggleLang);
            // keyboard: Enter / Space
            t.addEventListener('keydown', function(e){
                if(e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar'){
                    e.preventDefault();
                    toggleLang();
                }
            });
        });
    });

})();
