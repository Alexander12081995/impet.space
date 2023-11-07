"use client";

import { useScopedI18n } from "@/locales/client";
import css from "./AboutUs.module.css";
import { Container } from "@/components/common/layout/Container";

export const AboutUs = () => {

    const t = useScopedI18n("blocks.aboutUs");

    return (
        <Container>
            <div className={css.block} id="aboutUs">
                <p className={css.title}>{t("title")}</p>
                <div className={css.leftBlock}>
                    <p>{t("text")}</p>
                    <p>{t("subText")}</p>
                </div>

                <div className={css.rightBlock}>
                    <div className={css.image}>
                        <img src={"/image/mentoring.png"} alt="mentoring" className={css.img}/>
                        <p className={css.description}>{t("descriptionImg1")}</p>
                    </div>
                    <div className={css.image}>
                        <img src={"/image/itProject.jpg"} alt="itProject" className={`${css.img} ${css.opacity}`}/>
                        <p className={css.description}>{t("descriptionImg2")}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
