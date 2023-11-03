"use client";

import css from "./Apply.module.css";

export const Apply = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.blockContent}>
                <h2 className={css.title}>ПОДАТЬ ЗАЯВКУ</h2>
                <p className={css.text}>ВЫБЕРИТЕ РОЛЬ В КОТОРОЙ ХОТИТЕ ОФОРМИТЬ ЗАЯВКУ</p>
            </div>
            <div className={css.blockImg}>
                <div>
                    <img src="/img/employee.png" alt="Participant" />
                </div>
                <div>
                    <img src="/img/Ceo.png" alt="Сustomer" />
                </div>
            </div>
        </div>
    );
};
