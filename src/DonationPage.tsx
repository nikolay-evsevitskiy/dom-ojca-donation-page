import React, {useState} from "react";
import {Card, CardContent} from "./common/components";
import Button from "./common/button";
import {Copy, Moon, Sun} from "lucide-react";
import {motion} from "framer-motion";
import "./DonationPage.css";
import {useTranslation} from "react-i18next";
import lightLogo from "./logo/Dom_ojca_light.png";
import darkLogo from "./logo/Dom_ojca_dark.png";


interface BankAccountDetails {
    accountName: string;
    iban: string;
    swift: string;
}


const DonationPage: React.FC = () => {
    const [theme, setTheme] = useState<string>("light");
    const {t, i18n} = useTranslation<string>();

    const bankAccountDetails: BankAccountDetails = {
        accountName: `Kościoł Chrześcijański "Dom Ojca" we Wrocławiu`,
        iban: "9625 2530 0008 2056 1056 5283 0001",
        swift: "dziesięcina",
    };


    const copyToClipboard = (text: string): void => {
        navigator.clipboard.writeText(text);
        // @ts-ignore
        alert(t("copy"));
    };

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        document.body.className = theme === "light" ? "dark" : "light";
    };

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        i18n.changeLanguage(event.target.value);
    };


    return (
        <div className={`donation-page ${theme}`}>
            <div className="header">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === "light" ? <Moon/> : <Sun/>}
                    {theme === "light" ?
                        // @ts-ignore
                        t("darkTheme") :
                        // @ts-ignore
                        t("lightTheme")}
                </button>

                <select value={i18n.language} onChange={changeLanguage} className="language-select">
                    <option value="en">English</option>
                    <option value="uk">Українська</option>
                    <option value="ru">Русский</option>
                    <option value="pl">Polski</option>
                    <option value="be">Беларуская</option>
                </select>
            </div>

            <img src={theme === "light" ? darkLogo : lightLogo} alt="Dom Ojca Logo" className="logo-img"/>

            <motion.div
                className="title-section"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <h1>{
                    // @ts-ignore
                    t("title")
                }</h1>
                <p>{
                    // @ts-ignore
                    t("description")
                }</p>
            </motion.div>

            <Card className="card">
                <CardContent>
                    <h2>{
                        // @ts-ignore
                        t("accountName")
                    }</h2>
                    <div className="account-details">
                        <div>
                            <span>{
                                // @ts-ignore
                                t("recipient")
                            }:</span>
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
                            <span>{
                                // @ts-ignore
                                t("accountNumber")
                            }:</span>
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
                            <span>{
                                // @ts-ignore
                                t("paymentName")
                            }:</span>
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
                <p>{
                    // @ts-ignore
                    t("thanks")
                }</p>
            </footer>
        </div>
    );
};

export default DonationPage;
