"use client"

import css from "./Motivation.module.css";

export const Motivation = () => {
    return(
        <div className={css.container}  id="technologie">
            <div className={css.blockContent}>
                <h2 className={css.title}>ТЕХНОЛОГИИ</h2>
                <div>
                    <p className={css.contentText}>МЫ СОЗДАЕМ ОБУЧАЕМ, МОТИВИРУЕМ, ЗНАКОМИМ И ОБЪЕДИНЯЕМ ТАЛАНТЫ ИЗ МИРА IT И БИЗНЕСА</p>
                    <p className={css.text}>Начни свой путь в мире IT вместе с нами. Мы работаем с основными восстребованными технологиями.</p>
                </div>
            </div>
            <div className={css.blockImg}>
                <div>
                    <img src={"/img/Technologies1.png"} alt="It"/>
                </div>
                <div>
                    <img src={"/img/Technologies2.png"} alt="People"/>
                </div>
            </div>
        </div>
    )
}