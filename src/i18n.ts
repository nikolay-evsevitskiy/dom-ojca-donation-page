import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            title: "Donation for the Dom Ojca Church",
            description: "Your contribution helps support our programs and mission.",
            accountName: "Requisites",
            recipient: "Recipient",
            accountNumber: "Account number",
            paymentName: "Payment name",
            donate: "Proceed to Payment",
            thanks: "Thank you for your support. May God bless you!",
            darkTheme: "Dark Theme",
            lightTheme: "Light Theme",
            copy: "copied",
        },
    },
    ru: {
        translation: {
            title: "Пожертвование для церкви Dom Ojca",
            description: "Ваш вклад помогает поддерживать наши программы и миссию.",
            accountName: "Реквизиты",
            recipient: "Получатель",
            accountNumber: "Номер счета получателя",
            paymentName: "Название платежа",
            donate: "Перейти к платежу",
            thanks: "Спасибо за вашу поддержку. Пусть Бог благословит вас!",
            darkTheme: "Темная тема",
            lightTheme: "Светлая тема",
            copy: "скопировано",
        },

    },
    pl: {
        translation: {
            title: "Darowizna dla kościoła Dom Ojca",
            description: "Twój wkład pomaga wspierać nasze programy i misję.",
            accountName: "Dane do przelewu",
            recipient: "Odbiorca",
            accountNumber: "Numer konta odbiorcy",
            paymentName: "Tytuł przelewu",
            donate: "Przejdź do płatności",
            thanks: "Dziękujemy za Twoje wsparcie. Niech Bóg Cię błogosławi!",
            darkTheme: "Ciemny motyw",
            lightTheme: "Jasny motyw",
            copy: "skopiowane",
        },

    },
    be: {
        translation: {
            title: "Ахвяраванне для царквы Dom Ojca",
            description: "Ваш уклад дапамагае падтрымліваць нашы праграмы і місію.",
            accountName: "Рэквізіты",
            recipient: "Атрымальнік",
            accountNumber: "Нумар рахунку атрымальніка",
            paymentName: "Назва плацяжу",
            donate: "Перайсці да плацяжу",
            thanks: "Дзякуй за вашу падтрымку. Няхай Бог вас дабраславіць!",
            darkTheme: "Цёмная тэма",
            lightTheme: "Светлая тэма",
            copy: "скапіяваны",
        },

    },
    uk: {
        translation: {
            title: "Пожертва для церкви Dom Ojca",
            description: "Ваш внесок допомагає підтримувати наші програми та місію.",
            accountName: "Реквізити",
            recipient: "Отримувач",
            accountNumber: "Номер рахунку отримувача",
            paymentName: "Назва платежу",
            donate: "Перейти до платежу",
            thanks: "Дякуємо за вашу підтримку. Нехай Бог вас благословить!",
            darkTheme: "Темна тема",
            lightTheme: "Світла тема",
            copy: "скопійований",
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
