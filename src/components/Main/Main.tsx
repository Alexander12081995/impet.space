"use client";

import { AboutUs } from "./AboutUs/AboutUs";
import { Counter } from "./Counter/Counter";
import { WhatAreWeDoing } from "./WhatAreWeDoing/WhatAreWeDoing";
import { Technologies } from "@/components/Main/Technologies/Technologies";
import css from "./Main.module.css";
import { Motivation } from "@/components/Main/Motivation/Motivation";
import { PhotoBlock } from "@/components/Main/PhotoBlock/PhotoBlock";
import { Apply } from "@/components/Main/Apply/Apply";
import { Contact } from "@/components/Main/Contact/Contact";

export const Main = () => {
    return (
        <div className={css.wrapper}>
            <AboutUs />
            <WhatAreWeDoing />
            <Counter />
            <Motivation />
            <Technologies />
            <PhotoBlock />
            <Apply />
            <Contact />
        </div>
    );
};
