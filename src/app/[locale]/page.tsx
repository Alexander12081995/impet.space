"use client"

import { Header } from "@/components/Header/Header";
import css from "./page.module.css";
import { Main } from "@/components/Main/Main";
import { Footer } from "@/components/Footer/Footer";
import { I18nProviderClient } from "@/locales/client";

export default function Home({params} : {params: {locale: string}}) {

    return (

        <I18nProviderClient locale={params.locale}>
            <div className={css.container}>
                <Header params={params}/>
                <Main />
                <Footer />
            </div>
        </I18nProviderClient>
        
    );
}
