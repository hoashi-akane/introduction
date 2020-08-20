import Head from 'next/head'
import styles from '../styles/Introduction.module.css'
import Layout from '../components/layout'

export default function Introduction(){
    return(
        <Layout>
            <Head>
                <title>自己紹介</title>
            </Head>
            <h4 className={styles.profileTitle}>自己紹介</h4>
            <div className={styles.profile}>
                <span className={styles.inlinePc}>２１卒情報系専門学校３年生　　</span>
                <span className={styles.inlinePc}>Webアプリケーション・スマホアプリの開発をしています。</span>
                <br></br>
                <span className={styles.inlinePc}>メインPC：ThinkPad X1 Carbon(6Gen)　　</span>
                <span className={styles.inlinePc}>メインOS：Linux(Elementary OS)</span>
            </div>

            <div className={styles.profile}>
            </div>
        </Layout>
    )
}