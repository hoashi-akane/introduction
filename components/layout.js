import Head from 'next/head'
import styles from '../components/Layout.module.css'

export const siteTitle = '自己紹介'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="description"
                    cotext="自己紹介兼ポートフォリオ紹介ページです。 "
                />
                <meta
                    name="og:title" context={siteTitle}
                />
            </Head>
            <header className={styles.header}>
                <h2>
                    Introductoin
                </h2>
            </header>
            <main>{children}</main>
        </div>
    )
}