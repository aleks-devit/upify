import type {NextPage} from 'next'
import Head from 'next/head'
import Home from "../src/Home/Home";
import {GetServerSideProps} from "next";
import {checkAdmin} from "../src/helpers/checkToken";

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  if (checkAdmin(req.cookies.token) || !req.cookies.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

const HomePage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Description of the main indicators" />
      </Head>
      <Home/>
    </div>
  )
}



export default HomePage


