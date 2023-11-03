"use client";

import Image from "next/image";
import css from "./Header.module.css";
import Link from "next/link";

const navigation = [
    {
        text: "ЧТО МЫ ДЕЛАЕМ",
        href: "/#what-doing",
    },
    {
        text: "КАК МЫ РАБОТАЕМ",
        href: "/#technologie",
    },
];

export const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.leftBlock}>
                <div className={css.groupLogo}>
                    <Image src={"/img/logo.svg"} alt="logo" width={129} height={80} />
                    <p className={css.logoTitle}>We realize your idea</p>
                </div>
                <p className={css.title}>LEARN DEVELOP CREATE</p>
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
                        <p className={css.logoTitle}>We realize your idea</p>
                    </div>
                    <p className={css.title}>LEARN DEVELOP CREATE</p>
                </div>
                <div className={css.img}>
                    <img src={"/img/headerImg.png"} alt="img" />
                </div>
            </div>
        </div>
    );
};
