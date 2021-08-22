import {ApolloError} from "apollo-client";

const errorMessage = (error: ApolloError) => {
  return (error.graphQLErrors && error?.graphQLErrors[0]?.message) || 'Ooooops something went wrong...'
}

export default errorMessage