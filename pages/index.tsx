import type {NextPage} from 'next'
import {useQuery, gql} from "@apollo/client";
import Head from 'next/head'
import Home from "../src/Home/Home";
import {initializeApollo} from "apollo-client"
import {query} from "express";

const MyQuery = gql`
  query MyQuery {
  name
  }
`

const HomePage: NextPage = (props) => {
  const {data, loading, error} = useQuery(MyQuery)
  console.log( props.initializeApolloState.ROOT_QUERY)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Description of the main indicators" />
      </Head>
      <Home>

      </Home>
    </div>
  )
}

export async function getStaticProps() {
const apolloClient = initializeApollo()

  await apolloClient.query({
    query: MyQuery
  })

  return {
  props: {
    initializeApolloState: apolloClient.cache.extract()
  }
  }
}

export default HomePage
