import Layout from '../../components/layout'
import { getProductList } from '../../lib/github/user'

export default function ItemList({ allProduct }){
    return(
        <Layout>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const allProduct = await getProductList()

    return {
        props: {
            allProduct
        }
    }
}