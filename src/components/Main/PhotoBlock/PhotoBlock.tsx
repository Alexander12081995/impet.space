"use client";

import css from "./PhotoBlock.module.css";

export const PhotoBlock = () => {
    return (
        <div className={css.wrapper}>
            <img src="/img/PhotoBlock.png" alt="photo" />
        </div>
    );
};
