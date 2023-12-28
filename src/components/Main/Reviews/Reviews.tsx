"use client";

import React, { useState } from "react";
import css from "./reviews.module.css";
import { Container } from "@/components/common/layout/Container";
import { reviews } from "@/data/reviews";

export const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNextComment = () => {
        if (currentIndex < reviews[0].reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevComment = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <Container>
            <div className={css.wrapper}>
                <p className={css.title}>ОТЗЫВЫ</p>
                <ul>
                    {reviews.map(({ id, mentor, review, reviews }) => (
                        <li key={id} className={css.reviews}>
                            <div className={css.leftBlock}>
                                <p className={css.review}>
                                    {review.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <p className={css.mentor}>
                                    {mentor.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>

                            <div className={css.listReviews}>
                                <div className={css.reviewJunBlock}>
                                    <img
                                        src="/image/buttonLeft.svg"
                                        alt="arrow left"
                                        className={css.arrow}
                                        onClick={handlePrevComment}
                                    />
                                    <div>
                                        <p className={css.reviewJun}>
                                            {reviews[currentIndex].review.split("\n").map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <p className={css.junior}>
                                            {reviews[currentIndex].junior.split("\n").map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                    <img
                                        src="/image/buttonRight.svg"
                                        alt="arrow right"
                                        className={css.arrow}
                                        onClick={handleNextComment}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};
