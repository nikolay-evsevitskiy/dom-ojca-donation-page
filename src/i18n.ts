import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            title: "Donation for the Dom Ojca Church",
            description: "Your contribution helps support our programs and mission.",
            accountName: "Account Name",
            iban: "IBAN",
            swift: "SWIFT",
            copy: "Copy",
            donate: "Proceed to Payment",
            thanks: "Thank you for your support. May God bless you!",
            darkTheme: "Dark Theme",
            lightTheme: "Light Theme",
        },
    },
    ru: {
        translation: {
            title: "Пожертвование для церкви Dom Ojca",
            description: "Ваш вклад помогает поддерживать наши программы и миссию.",
            accountName: "Название счета",
            iban: "IBAN",
            swift: "SWIFT",
            copy: "Копировать",
            donate: "Перейти к платежу",
            thanks: "Спасибо за вашу поддержку. Пусть Бог благословит вас!",
            darkTheme: "Темная тема",
            lightTheme: "Светлая тема",
        },
    },
    // Добавьте другие языки (uk, pl, be) здесь.
};

i18n
    .use(LanguageDetector) // Автоопределение языка
    .use(initReactI18next) // Инициализация react-i18next
    .init({
        resources,
        fallbackLng: "en", // Язык по умолчанию
        interpolation: {
            escapeValue: false, // React уже экранирует HTML
        },
    });

export default i18n;
