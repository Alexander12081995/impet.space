"use client";

import css from "./WhatAreWeDoing.module.css";

const developers = [
    { number: "1", title: "Developer", description: "C#, Java, Node.js, Python, JS" },
    { number: "2", title: "UX/UI Designer", description: "IOS, Android, Web-design, Product" },
    { number: "3", title: "Project Manager", description: "Jira, Asana, Trello, Notion" },
    {
        number: "4",
        title: "Mentor",
        description: "Опыт работы в IT 4 года+. Крепкий Lead проектов с хорошим бэкграундом",
    },
    {
        number: "5",
        title: "Business Analyst",
        description: "Помогать бизнесу достигать поставленных целей. Знать все аспекты IT.",
    },
    { number: "6", title: "QA Engineer", description: "Обеспечение качества работы продукта." },
    { number: "7", title: "Product Manager", description: "Аналитика и анализ конкурентов." },
];

export const WhatAreWeDoing = () => {
    return (
        <div className={css.container} id="what-doing">
            <div className={css.leftBlock}>
                <h2 className={css.title}>ЧТО МЫ ДЕЛАЕМ</h2>
                <div className={css.wrapperInvite}>
                    <div className={css.blockInvite}>
                        <p className={css.textJun}>
                            JUNIOR-СПЕЦИАЛИСТАМ ПОМОГАЕМ ПОЛУЧИТЬ ОПЫТ НА РЕАЛЬНОМ ПРОЕКТЕ ПОД РУКОВОДСТВОМ МЕНТОРОВ,
                            ЧТОБЫ УСКОРИТЬ ПОЛУЧЕНИЕ ПЕРВОГО ОФФЕРА
                        </p>
                        <div className={css.btn}>
                            <button className={css.button}>УЧАСТВОВАТЬ КАК JUNIOR</button>
                        </div>
                    </div>
                    <div className={css.blockInvite}>
                        <p className={css.textMentor}>
                            ОПЫТНЫМ СПЕЦИАЛИСТАМ МЫ ДАЕМ ВОЗМОЖНОСТЬ ПОЛУЧИТЬ ОПЫТ МЕНТОРИНГА, ПОДЕЛИТЬСЯ ЭКСПЕРТИЗОЙ И
                            РАЗВИВАТЬ СВОИ КОМПЕТЕНЦИИ.
                        </p>
                        <div className={css.btn}>
                            <button className={css.button}>УЧАСТВОВАТЬ КАК МЕНТОР</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ul className={css.developersBlock}>
                    {developers.map((item, index) => (
                        <li key={index} className={css.developer}>
                            <div className={css.number}>{item.number}</div>
                            <div>
                                <h3 className={css.titleDev}>{item.title}</h3>
                                <p className={css.text}>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
