import '../styles/globals.css'
import Layout from "../components/layout/layout";
import {appWithTranslation, useTranslation} from 'next-i18next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function MyApp({Component, pageProps}) {

    const { t, i18n } = useTranslation('common')

    return (
            <Layout t={t} i18n={i18n}>
                <Component {...pageProps} />
            </Layout>
    )
}

export default appWithTranslation(MyApp)


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'home',
            ])),
        },
    }
}
