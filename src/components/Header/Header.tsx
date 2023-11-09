"use client";

import Image from "next/image";
import css from "./Header.module.css";
import Link from "next/link";
import LocalSwitcher from "../common/LocalSwitcher/LocalSwitcher";
import { useScopedI18n } from "@/locales/client";

export const Header = ({params}: {params: {locale: string}}) => {

    const t = useScopedI18n("header")

    const navigation = [
        {
            text: t("nav.weAre"),
            href: `${params.locale}/#aboutUs`,
        },
        {
            text: t("nav.give"),
            href: `${params.locale}/#what-doing`,
        },
        {
            text: t("nav.work"),
            href: `${params.locale}/#technologie`
        }
    ];

    return (
            <div className={css.container}>
            <div className={css.leftBlock}>
                <div className={css.groupLogo}>
                    <div>
                        <Image src={"/image/logo.svg"} alt="logo" width={129} height={80} />
                        <p className={css.logoTitle}>{t("title")}</p>
                    </div>
                    <div>
                        <LocalSwitcher/>
                    </div>
                </div>
                <p className={css.title}>{t("subTitle")}</p>
            </div>
            <div className={css.rightBlock}>
                <ul className={css.groupNav}>
                    {navigation.map((item, index) => (
                            <Link href={item.href} className={css.link} key={index}>
                                {item.text}
                            </Link>
                    ))}
                </ul>
                <div className={css.leftBlockGreen}>
                <div className={css.groupLogo}>
                    <div>
                    <img src={"/image/logo.svg"} alt="logo" />
                        <p className={css.logoTitle}>{t("title")}</p>
                    </div>
                    <div>
                        <LocalSwitcher/>
                    </div>
                </div>
                    <p className={css.title}>{t("subTitle")}</p>
                </div>
                <div className={css.img}>
                    <img src={"/image/headerImg.png"} alt="img" />
                </div>
            </div>
        </div>
    );
};
