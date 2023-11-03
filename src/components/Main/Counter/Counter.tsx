"use client";

import css from "./Counter.module.css";

export const Counter = () => {
    return (
        <div className={css.container} id="counter">
            <div className={css.leftBlock}>
                <div className={css.textBlock}>
                    <div>
                        <h2 className={css.title}>СКОЛЬКО НАС?</h2>
                    </div>
                    <div>
                        <p className={css.text}>
                            Наше сообщество стремительно растет и развивается. Наша команда это целеустремленные,
                            доброжелательные и активные люди, которые стремятся улучшить мир через идеи.
                        </p>
                    </div>
                </div>
                <div className={css.imgBlock}>
                    <img className={css.img} src={"/img/statistic.png"} alt="statistic" />
                </div>
            </div>

            <div className={css.blockRight}>
                <img className={css.img} src={"/img/comands.png"} alt="comands" />
            </div>
        </div>
    );
};
