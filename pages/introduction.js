import Head from 'next/head'
import styles from '../styles/Introduction.module.css'
import Layout from '../components/layout'
import Link from 'next/link'

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

            <h4 className={styles.profileTitle}>経験・実績</h4>
            <div>
                <ul className={styles.unorderList}>
                    <li>ヤフー株式会社主催Hack-U 2019 Fukuoka : ヤフー賞</li>
                    <li>アスクル株式会社 : インターンシップ(5日間)</li>
                    <li>Triple Four株式会社 : アルバイト(6ヶ月)</li>
                </ul>
            </div>

            <h4 className={styles.profileTitle}>各種リンク</h4>
            <div className={styles.profile + " "+ styles.btnList}>
                <a href="https://github.com/hoashi-akane" className={styles.btn + " "+ styles.svgBtn}>
                    <svg>
                        <rect x="2" y="2" rx="2" fill="none" width="200" height="50"></rect>
                    </svg>
                    <span>GitHub</span>
                </a>
                {/* Linkの子はaタグでくくる。SEO的に＆子要素は１つしか指定できない?ため */}
                <Link href="product/list">
                    <a className={styles.btn + " "+ styles.svgBtn}>
                        <svg>
                            <rect x="2" y="2" rx="2" fill="none" width="200" height="50"></rect>
                        </svg>
                        <span>開発コンテンツ</span>
                    </a>
                </Link>
                <a href="#" className={styles.btn + " "+ styles.svgBtn}>
                    <svg>
                        <rect x="2" y="2" rx="2" fill="none" width="200" height="50"></rect>
                    </svg>
                    <span>今後やりたいこと</span>
                </a>
            </div>

        </Layout>
    )
}