"use client";

import { useScopedI18n } from "@/locales/client";
import css from "./Footer.module.css";
import { Container } from "../common/layout/Container";

export const Footer = () => {

    const t = useScopedI18n("blocks.contact");

    return(
        <Container>
        <div className={css.block}>
            <div className={css.leftBlock}>
                <img src={"/image/logoFooter.png"} alt={"logo"}/>
            </div>

            <div className={css.rightBlock}>
                <p className={css.title}>{t("title")}</p>
                <p className={css.email}>impet.space@gmail.com</p>
            </div>
        </div>
        </Container>
    )






    // return (
    //     <div className={css.wrapper}>
    //         <div className={css.blockLeft}>
    //             <img className={css.logo} src={"/img/LogoGreen.svg"} alt="logo" />
    //             <div className={css.politicText}>
    //                 <p>@2023 IMPET </p>
    //                 <p> Политика конфидециальности</p>
    //             </div>
    //         </div>
    //         <div className={css.blockRight}>
    //             <h3 className={css.title}>Подпишись на наши новости</h3>
    //             <p className={css.text}>Получай рассылку и будь в курсе самых свежих новостей проектов и вакансий.</p>
    //             <div className={css.form}>
    //                 <div className={css.blockForm}>
    //                     <p className={css.textInput}>Email</p>
    //                     <input className={css.input} type="text" placeholder={"email"} />
    //                     <button className={css.btn}>ПОДПИСАТЬСЯ</button>
    //                     <p className={`${css.text} ${css.question}`}>
    //                         Остались вопросы? - Ответим. Нужен совет? - Проконсультируем.
    //                     </p>
    //                 </div>
    //                 <div className={css.blockForm}>
    //                     <p className={css.textInput}>Оставьте комментарий</p>
    //                     <input className={css.input} type="text" placeholder={"Оставить комментарий"} />
    //                     <button className={css.btn}>ОТПРАВИТЬ КОММЕНТАРИЙ</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};
