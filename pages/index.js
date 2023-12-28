import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>introduction</title>
        <script>
        setTimeout("location.href='introduction'",2000);
      </script>
      </Head>
    </Layout>
  )
}
