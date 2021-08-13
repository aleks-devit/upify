import type {NextPage} from "next";
import Head from 'next/head'
import Layout from "../../src/Layout/Layout";

const Dashboard: NextPage = () => {
  return(
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Description of the main indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Dashboard
      </Layout>
    </>
  )
}

export default Dashboard
