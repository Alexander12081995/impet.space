"use client";

import css from "./Header.module.css";
import Link from "next/link";

const navigation = [
    {
        text: "О НАС",
        href: "/#about-us",
    },
    {
        text: "ЧТО МЫ ДЕЛАЕМ",
        href: "/#what-doing",
    },
    {
        text: "ТЕХНОЛОГИИ",
        href: "/#technologie",
    },
    {
        text: "СКОЛЬКО НАС",
        href: "/#counter",
    },
];

export const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.leftBlock}>
                <div className={css.groupLogo}>
                    <img src={"/img/logo.svg"} alt="logo" />
                    <button className={css.button}>ПОДАТЬ ЗАЯВКУ</button>
                </div>
                <p className={css.title}>ТВОРИ УЧИСЬ СОЗДАВАЙ</p>
            </div>
            <div className={css.rightBlock}>
                <ul className={css.groupNav}>
                    {navigation.map((item, index) => (
                        <li key={index} className={css.nav}>
                            <Link href={item.href} className={css.link}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={css.leftBlockGreen}>
                    <div className={css.groupLogo}>
                        <img src={"/img/logo.svg"} alt="logo" />
                        <button className={css.button}>ПОДАТЬ ЗАЯВКУ</button>
                    </div>
                    <p className={css.title}>ТВОРИ УЧИСЬ СОЗДАВАЙ</p>
                </div>
                <div className={css.img}>
                    <img src={"/img/headerImg.png"} alt="img" />
                </div>
            </div>
        </div>
    );
};
