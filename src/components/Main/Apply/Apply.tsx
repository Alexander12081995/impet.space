"use client";

import { Container } from "@/components/common/layout/Container";
import css from "./Apply.module.css";
import { useScopedI18n } from "@/locales/client";

export const Apply = () => {

    const t = useScopedI18n("blocks.apply");

    return(
        <Container>
            <div className={css.block}>
                <p className={css.title}>{t("title")}</p>
                <div className={css.wrapperImg}>
                    <img src={"/image/men.png"} alt="men" className={css.img}/>
                    <p className={css.text}>{t("descriptionImg1")}</p>
                </div>
                <div className={css.wrapperImg}>
                    <img src={"/image/jun.png"} alt="men" className={css.img}/>
                    <p className={css.text}>{t("descriptionImg2")}</p>
                </div>
                <div className={css.wrapperImg}>
                    <img src={"/image/men.png"} alt="men" className={css.img}/>
                    <p className={css.text}>{t("descriptionImg3")}</p>
                </div>
            </div>
        </Container>
    )



    // return (
    //     <div className={css.wrapper}>
    //         <div className={css.blockContent}>
    //             <h2 className={css.title}>ПОДАТЬ ЗАЯВКУ</h2>
    //             <p className={css.text}>ВЫБЕРИТЕ РОЛЬ В КОТОРОЙ ХОТИТЕ ОФОРМИТЬ ЗАЯВКУ</p>
    //         </div>
    //         <div className={css.blockImg}>
    //             <div>
    //                 <img src="/img/employee.png" alt="Participant" />
    //             </div>
    //             <div>
    //                 <img src="/img/Ceo.png" alt="Сustomer" />
    //             </div>
    //         </div>
    //     </div>
    // );
};
