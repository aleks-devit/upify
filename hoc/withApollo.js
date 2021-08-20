import withApollo from 'next-with-apollo';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';


export default withApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      request: operation => {
        operation.setContext({
          headers
        })
      },
      fetchOptions: {
        credentials: 'include'
      },
      uri: 'http://localhost:3001/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);


