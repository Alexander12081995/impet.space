"use client"

import { Container } from "@/components/common/layout/Container";
import css from "./Counter.module.css";
import { useScopedI18n } from "@/locales/client";

const teams = [
    {team: "JUNIORS", count: "145+"},
    {team: "MENTORS", count: "43+"},
    {team: "TEAMS", count: "8"},
    {team: "PROJECTS", count: "5"},
]

export const Counter = () => {

    const t = useScopedI18n("blocks.counter");

    return(
        <Container>
            <div className={css.block}>
                <div className={css.leftBlock}>
                    <div className={css.groupText}>
                        <p>{t("title")}</p>
                        <p className={css.text}>{t("text")}</p>
                    </div>

                    <ul className={css.groupCount}>
                        {teams.map(({team, count}) => (
                            <li key={team} className={css.team}>
                                <p className={css.teamName}>{team}</p>
                                <div className={css.img}>
                                    <img src={"/image/countImg.svg"} alt={"countTeam"}/>
                                </div>
                                <p className={css.countTeam}>{count}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={css.wrapperImg}>
                    <img src={"/image/banner.png"} alt="banner"/>
                </div>
            </div>
        </Container>
    )

    // return (
    //     <div className={css.container} >
    //         <div className={css.leftBlock}>
    //             <div className={css.textBlock}>
    //                 <div>
    //                     <h2 className={css.title}>СКОЛЬКО НАС?</h2>
    //                 </div>
    //                 <div>
    //                     <p className={css.text}>
    //                         Наше сообщество стремительно растет и развивается. Наша команда это целеустремленные,
    //                         доброжелательные и активные люди, которые стремятся улучшить мир через идеи.
    //                     </p>
    //                 </div>
    //             </div>
    //             <div className={css.imgBlock}>
    //                 <img className={css.img} src={"/img/statistic.png"} alt="statistic" />
    //             </div>
    //         </div>

    //         <div className={css.blockRight}>
    //             <img className={css.img} src={"/img/comands.png"} alt="comands" />
    //         </div>
    //     </div>
    // );
};
