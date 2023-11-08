"use client";

import { Container } from "@/components/common/layout/Container";
import css from "./PhotoBlock.module.css";

export const PhotoBlock = () => {
    return (
        <Container>
            <div className={css.wrapper}>
                <img src="/image/poster.png" alt="photo" />
            </div>
        </Container>
    );
};
