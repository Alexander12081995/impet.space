"use client"

import React from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import css from "./localSwitcher.module.css";

const LocalSwitcher = () => {
    const changeLocale = useChangeLocale();
    const currentLocale = useCurrentLocale();
    return(
            <div className={css.blockBtn}>
                <button onClick={() => changeLocale("en")} className={css.btn}>
                    EN
                </button>
                <button onClick={() => changeLocale("ru")} className={css.btn}>
                    RU
                </button>
            </div>
    );
}

export default LocalSwitcher;