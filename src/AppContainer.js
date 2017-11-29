import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { API_URL } from 'react-native-dotenv'

import currentUserQuery from './graphql/currentUserQuery'
import App from './scenes'
import store from '../src/store/configureStore'

const httpLink = createHttpLink({
  uri: API_URL,
})

const authLink = async () => {
  const idToken = await AsyncStorage.getItem('idToken')

  return setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: idToken && `Bearer ${idToken}`,
    },
  }))
}

const client = async () => {
  const link = await authLink()

  return new ApolloClient({
    link: link.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export class AppContainer extends Component {
  state = {}

  componentWillMount = async () => {
    this.setState({ apolloClient: await client() })
  }

  render() {
    const { apolloClient } = this.state
    if (!apolloClient) return null

    apolloClient
      .query({
        query: currentUserQuery,
      })
      .then(({ data: { currentUser } }) => {
        store.dispatch({
          type: 'SET_CURRENT_USER',
          payload: currentUser,
        })
      })

    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    )
  }
}

export default AppContainer
