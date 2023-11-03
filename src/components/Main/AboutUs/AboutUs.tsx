"use client";

import css from "./AboutUs.module.css";

export const AboutUs = () => {
    return (
        <div className={css.wrapper} id="about-us">
            <div className={css.container}>
                <div className={css.blockAbout}>
                    <h2 className={css.title}>О НАС</h2>
                    <p className={css.text}>
                        МЫ - ГРУППА IT-ЭНТУЗИАСТОВ, объединённых целью дать практические знания junior-специалистам и
                        ускорить получение ими первого оффера
                    </p>
                </div>

                <div className={css.blockImg} id={"aboutUs"}>
                    <div>
                        <img src={"/img/Mentoring.png"} alt="mentoring" />
                    </div>
                    <div>
                        <img src={"/img/IT.png"} alt="IT" />
                    </div>
                </div>
            </div>
        </div>
    );
};
