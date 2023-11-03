"use client";

import css from "./Contact.module.css";

export const Contact = () => {
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>КОНТАКТЫ</h2>
            <div className={css.blockContact}>
                <a className={css.mail} href="">
                    impet.space@gmail.com
                </a>
                <div className={css.blockIcon}>
                    <button className={css.btn}>
                        <img src="/icon/telegram.svg" alt="Telegram" />
                        <p className={css.textBtn}>Telegram</p>
                    </button>
                    <button className={css.btn}>
                        <img src="/icon/linkedin.svg" alt="Linkedin" />
                        <p className={css.textBtn}>LinkedIn</p>
                    </button>
                    <button className={css.btn}>
                        <img src="/icon/instagram.svg" alt="Instagram" />
                        <p className={css.textBtn}>Instagram</p>
                    </button>
                </div>
            </div>
        </div>
    );
};
