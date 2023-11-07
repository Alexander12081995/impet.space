"use client";

import { Container } from "@/components/common/layout/Container";
import css from "./WhatAreWeDoing.module.css";
import { useScopedI18n } from "@/locales/client";

const developers = [
    { number: "1", title: "Developers", description: "C#, Java, Node.js, Python, JS" },
    { number: "2", title: "UX/UI Designers", description: "IOS, Android, Web-design, Product" },
    { number: "3", title: "Project Managers", description: "Jira, Asana, Trello, Notion" },
    {
        number: "4",
        title: "Mentors",
        // description: "Опыт работы в IT 4 года+. Крепкий Lead проектов с хорошим бэкграундом",
    },
    {
        number: "5",
        title: "Business Analysts",
        // description: "Помогать бизнесу достигать поставленных целей. Знать все аспекты IT.",
    },
    { number: "6", title: "QA Engineers", /*description: "Обеспечение качества работы продукта."*/ },
    { number: "7", title: "Product Managers", /*description: "Аналитика и анализ конкурентов."*/ },
    { number: "8", title: "DevOps", /*description: "Аналитика и анализ конкурентов."*/ },
];


export const WhatAreWeDoing = () => {

    const t = useScopedI18n("blocks.whatAreWeDoing");

    return (
        <div id="what-doing">
            <Container>
                <div className={css.block}>
                    <div className={css.leftBlock}>
                        <p>{t("title")}</p>
                        <p className={css.text1}>{t("textJun")}</p>
                        <button className={css.btn}>{t("btnJun")}</button>
                        <p className={css.text1}>{t("textMent")}</p>
                        <button className={css.btn}>{t("btnMent")}</button>
                    </div>
    
                    <ul className={css.rightBlock}>
                        {developers.map(({number, title, description}) => (
                            <li key={number} className={css.developer}>
                                <div className={css.number}>
                                    {number}
                                </div>
                                <div className={css.blockInfo}>
                                    <p className={css.title}>{title}</p>
                                    <p className={css.description}>{description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}