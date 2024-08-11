// translations.js

const languageSelector = document.getElementById('language-selector');

const loadTranslations = async (language) => {
    try {
        const response = await fetch(`./locales/${language}.json`);
        const translations = await response.json();
        return translations;
    } catch (error) {
        console.error("Error loading translations:", error);
        return {};
    }
};

const applyTranslations = (translations) => {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = key.split('.').reduce((o, i) => o[i], translations);
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });
};

const init = async () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const translations = await loadTranslations(savedLanguage);
    applyTranslations(translations);
    if (languageSelector) {
        languageSelector.value = savedLanguage;
        languageSelector.addEventListener('change', async (event) => {
            const selectedLanguage = event.target.value;
            const translations = await loadTranslations(selectedLanguage);
            applyTranslations(translations);
            localStorage.setItem('language', selectedLanguage);
        });
    }
};

document.addEventListener('DOMContentLoaded', init);
