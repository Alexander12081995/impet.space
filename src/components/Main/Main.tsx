import { AboutUs } from "./AboutUs/AboutUs";
import { Counter } from "./Counter/Counter";
import { WhatAreWeDoing } from "./WhatAreWeDoing/WhatAreWeDoing";
import css from "./Main.module.css";
import { Motivation } from "@/components/Main/Motivation/Motivation";
import { PhotoBlock } from "@/components/Main/PhotoBlock/PhotoBlock";
import { Apply } from "@/components/Main/Apply/Apply";
import { Reviews } from "./Reviews/Reviews";

export const Main = ({ params }: { params: { locale: string } }) => {
    return (
        <div className={css.wrapper}>
            <AboutUs />
            <WhatAreWeDoing params={params} />
            <Motivation />
            <PhotoBlock />
            <Counter />
            <Reviews />
            <Apply />
        </div>
    );
};
