import React, { Component } from 'react'

const defaultValues = {
  state: {
    user: {},
  },
}

const StoreContext = React.createContext(defaultValues)

export default class StoreProvider extends Component {
  state = {
    authToken: '',
    user: {},
  }

  _setAuthToken = authToken => this.setState({ authToken })

  render() {
    const value = {
      setAuthToken: this._setAuthToken,
      state: this.state,
    }

    return <StoreContext.Provider value={value}>{this.props.children}</StoreContext.Provider>
  }
}

export const Consumer = StoreContext.Consumer
