import Layout from '../../components/layout'
import { getProductList } from '../../lib/github/user'
import styles from '../../styles/product/ItemList.module.css'


export default function ItemList({ allProduct }){
    
// ここでProductListの処理を書いても良い
    return(
        <Layout>
            <h3 className={styles.header }>開発コンテンツリスト</h3>
            <div className={ styles.cardLists }>
                { ProductList(allProduct) }
            </div>
        </Layout>
    );
}

// github pagesで動的取得は不可なのでstaticpropsで取得
export async function getStaticProps(context) {
    let allProduct = await getProductList()
    return {
        props: {
            allProduct
        }
    }
}

// export async function getServerSideProps(context) {
//     let allProduct = await getProductList()
//     return {
//         props: {
//             allProduct
//         }
//     }
// }

// プロダクト一覧表示用メソッド
export function ProductList( allProduct ){
    
    return(
        allProduct.map( product =>
            <a href={product.node.url} className={ styles.productURL } key={product}>
                <div className={ styles.card }>
                    <h4 className={ styles.repositoryName}>リポジトリ名: { product.node.name }</h4>
                    <div>説明: { product.node.description }</div>
                    <div >{product.node.url}</div>
                </div>
            </a>
        )
    )

    // for~in ではなく for~of
    // let list = []
    // for(let product of allProduct){
    //     list.push(<h4 className={ styles.repositoryName}>リポジトリ名: {product.node.name} </h4>)
    //     list.push(<div>説明: {product.node.description}</div>)
    //     list.push(<a href={product.node.url} className={ styles.productURL }>{product.node.url}</a>)
    // }
}