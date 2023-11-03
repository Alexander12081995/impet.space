"use client";

import css from "./Technologies.module.css";

export const Technologies = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.blockArrow}>
                <button className={css.btnArrow}>
                    <img src="/img/Arrow 1.svg" alt="previous" />
                </button>
                <button className={css.btnArrow}>
                    <img src="/img/Arrow 2.svg" alt="previous" />
                </button>
            </div>
            <span className={css.line}></span>
            <div className={css.content}>
                <h3 className={css.title}>C#</h3>
                <p className={css.text}>
                    Основные задачи разработчика С# — это создание, тестирование и усовершенствование программного
                    обеспечения. Список обязанностей может различаться в зависимости от проекта, требований работодателя
                    и грейда программиста.
                </p>
            </div>
            <span className={css.line}></span>
            <div className={css.content}>
                <h3 className={css.title}>JAVA</h3>
                <p className={css.text}>
                    Ключевой навык любого разработчика, в том числе, на языке Java – умение писать чистый код. Чем чище
                    код, тем легче другим разработчикам в нём разбираться и вносить изменения.
                </p>
            </div>
            <span className={css.line}></span>
            <div className={css.content}>
                <h3 className={css.title}>NODE.JS</h3>
                <p className={css.text}>
                    Разработчик Node.js ответственен за создание логической части веб-приложения через серверную с
                    помощью JavaScript и смежных инструментов (CoffeeScript, IcedCoffeeScript).
                </p>
            </div>
            <span className={css.line}></span>
            <div className={css.content}>
                <h3 className={css.title}>Python</h3>
                <p className={css.text}>
                    Один из популярных языков программирования. По данным популярного среди программистов ресурса
                    Stackoverflow, Python входит в тройку самых популярных и востребованных языков на протяжении 5
                    последних лет.
                </p>
            </div>
        </div>
    );
};
