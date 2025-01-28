import React, {useState} from "react";
import {Card, CardContent} from "./common/components";
import Button from "./common/button";
import {Copy, Moon, Sun} from "lucide-react";
import {motion} from "framer-motion";
import "./DonationPage.css";

interface BankAccountDetails {
    accountName: string;
    iban: string;
    swift: string;
}


const DonationPage: React.FC = () => {
    const [theme, setTheme] = useState<string>("light");
    const [language, setLanguage] = useState<string>("ru");

    const bankAccountDetails: BankAccountDetails = {
        accountName: `Kościoł Chrześcijański "Dom Ojca" we Wrocławiu`,
        iban: "9625 2530 0008 2056 1056 5283 0001",
        swift: "dziesięcina",
    };


    const copyToClipboard = (text: string): void => {
        navigator.clipboard.writeText(text);
        alert("Данные скопированы в буфер обмена");
    };

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        document.body.className = theme === "light" ? "dark" : "light";
    };

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setLanguage(event.target.value);
    };

    return (
        <div className={`donation-page ${theme}`}>
            <div className="header">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === "light" ? <Moon/> : <Sun/>}
                    {theme === "light" ? "Темная тема" : "Светлая тема"}
                </button>

                <select value={language} onChange={changeLanguage} className="language-select">
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                    <option value="ru">Русский</option>
                    <option value="pl">Polski</option>
                    <option value="be">Беларуская</option>
                </select>
            </div>

            <motion.div
                className="title-section"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <h1>Пожертвование для церкви Dom Ojca</h1>
                <p>Ваш вклад помогает поддерживать наши программы и миссию.</p>
            </motion.div>

            <Card className="card">
                <CardContent>
                    <h2>Реквезиты</h2>
                    <div className="account-details">
                        <div>
                            <span>Получатель:</span>
                            <span>{bankAccountDetails.accountName}</span>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(bankAccountDetails.accountName)}
                            >
                                <Copy/>
                            </Button>
                        </div>
                        <div>
                            <span>Номер счета получателя:</span>
                            <div className="iban">
                                <span>{bankAccountDetails.iban}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => copyToClipboard(bankAccountDetails.iban)}
                                >
                                    <Copy/>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <span>Название:</span>
                            <div className="swift">
                                <span>{bankAccountDetails.swift}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => copyToClipboard(bankAccountDetails.swift)}
                                >
                                    <Copy/>
                                </Button>
                            </div>
                        </div>
                    </div>

                </CardContent>
            </Card>

            <footer>
                <p>Спасибо за вашу поддержку. Пусть Бог благословит вас!</p>
            </footer>
        </div>
    );
};

export default DonationPage;
