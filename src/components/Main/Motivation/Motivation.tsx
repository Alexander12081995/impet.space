"use client";

import { Container } from "@/components/common/layout/Container";
import css from "./Motivation.module.css";
import { useScopedI18n } from "@/locales/client";

export const Motivation = () => {

    const t = useScopedI18n("blocks.howWeWork");

    return (
        <Container>
            <div id="technologie" className={css.block}>
                <p className={css.title}>{t("title")}</p>
                <p className={css.text}>{t("text")}</p>
                <div className={css.blockImg}>
                    <div className={css.wrapperImg}>
                        <img src={"/image/it.png"} alt="IT" className={css.img}/>
                    </div>
                    <div className={css.wrapperImg}>
                        <img src={"/image/people.png"} alt="people" className={css.img}/>
                    </div>
                </div>
            </div>
        </Container>
    )

    // return (
    //     <div className={css.container} id="technologie">
    //         <div className={css.blockContent}>
    //             <h2 className={css.title}>ТЕХНОЛОГИИ</h2>
    //             <div>
    //                 <p className={css.contentText}>
    //                     МЫ СОЗДАЕМ ОБУЧАЕМ, МОТИВИРУЕМ, ЗНАКОМИМ И ОБЪЕДИНЯЕМ ТАЛАНТЫ ИЗ МИРА IT И БИЗНЕСА
    //                 </p>
    //                 <p className={css.text}>
    //                     Начни свой путь в мире IT вместе с нами. Мы работаем с основными восстребованными технологиями.
    //                 </p>
    //             </div>
    //         </div>
    //         <div className={css.blockImg}>
    //             <div>
    //                 <img src={"/img/Technologies1.png"} alt="It" />
    //             </div>
    //             <div>
    //                 <img src={"/img/Technologies2.png"} alt="People" />
    //             </div>
    //         </div>
    //     </div>
    // );
};
