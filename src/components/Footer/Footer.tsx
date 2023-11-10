"use client";

import { useScopedI18n } from "@/locales/client";
import css from "./Footer.module.css";
import { Container } from "../common/layout/Container";

export const Footer = () => {
    const t = useScopedI18n("blocks.contact");

    return (
        <Container>
            <div className={css.block} id={"footer"}>
                <div className={css.leftBlock}>
                    <img src={"/image/logoFooter.png"} alt={"logo"} />
                </div>

                <div className={css.rightBlock}>
                    <p className={css.title}>{t("title")}</p>
                    <p className={css.email}>impet.space@gmail.com</p>
                </div>
            </div>
        </Container>
    );
};
