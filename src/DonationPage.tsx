import React, {useState} from "react";
import {Button, Card, CardContent} from "@mui/material";
import {Banknote, Copy, Moon, Sun} from "lucide-react";
import {motion} from "framer-motion";

interface BankAccountDetails {
    accountName: string;
    iban: string;
    swift: string;
}

const DonationPage: React.FC = () => {
    const [theme, setTheme] = useState<string>("light");
    const [language, setLanguage] = useState<string>("ru");

    const bankAccountDetails: BankAccountDetails = {
        accountName: "Parafia Dom Ojca",
        iban: "PL12 3456 7890 1234 5678 9012 3456",
        swift: "SWIFT1234",
    };

    const copyToClipboard = (text: string): void => {
        navigator.clipboard.writeText(text);
        alert("Данные скопированы в буфер обмена");
    };

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setLanguage(event.target.value);
    };

    return (
        <div
            className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"} flex flex-col items-center py-10`}>
            <div className="flex justify-between items-center w-full max-w-lg mb-6 px-4">
                <button
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <Moon className="w-5 h-5"/> : <Sun className="w-5 h-5"/>}
                    {theme === "light" ? "Темная тема" : "Светлая тема"}
                </button>

                <select
                    value={language}
                    onChange={changeLanguage}
                    className="border rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                    <option value="ru">Русский</option>
                    <option value="pl">Polski</option>
                    <option value="be">Беларуская</option>
                </select>
            </div>

            <motion.div
                className="text-center mb-8"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Пожертвование для церкви Dom Ojca</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Ваш вклад помогает поддерживать наши программы и
                    миссию.</p>
            </motion.div>

            <Card className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-2xl">
                <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Детали банковского
                        счета</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-600 dark:text-gray-400">Название счета:</span>
                            <span className="text-gray-800 dark:text-gray-200">{bankAccountDetails.accountName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-600 dark:text-gray-400">IBAN:</span>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800 dark:text-gray-200">{bankAccountDetails.iban}</span>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => copyToClipboard(bankAccountDetails.iban)}
                                >
                                    <Copy className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-600 dark:text-gray-400">SWIFT:</span>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800 dark:text-gray-200">{bankAccountDetails.swift}</span>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => copyToClipboard(bankAccountDetails.swift)}
                                >
                                    <Copy className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button variant="outlined" className="w-full">
                            <Banknote className="w-5 h-5 mr-2"/>
                            Перейти к платежу
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <footer className="mt-10 text-center text-gray-500 dark:text-gray-400">
                <p>Спасибо за вашу поддержку. Пусть Бог благословит вас!</p>
            </footer>
        </div>
    );
};

export default DonationPage;
