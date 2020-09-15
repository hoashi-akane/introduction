import Layout from '../../components/layout'
import { getProductList } from '../../lib/github/user'


export default function ItemList({ allProduct }){
    
// ここでProductListの処理を書いても良い
    return(
        <Layout>
            { ProductList(allProduct) }
        </Layout>
    );
}

export async function getServerSideProps(context) {
    let allProduct = await getProductList()
    return {
        props: {
            allProduct
        }
    }
}

export function ProductList(allProduct){
    let list = []
// for~in ではなく for~of
    for(let product of allProduct){
        list.push(<li>リポジトリ名: {product.node.name} </li>)
        list.push(<li>説明: {product.node.description} </li>)
        list.push(<a href={product.node.url}>{product.node.url}</a>)
    }
    return(list)
}