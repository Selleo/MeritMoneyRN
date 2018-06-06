import React, { Component } from 'react'

const defaultState = {
  authToken: 'hehe',
  user: {},
}

const defaultValues = {
  state: defaultState,
  setAuthToken: () => {},
}

const StoreContext = React.createContext(defaultValues)

export default class StoreProvider extends Component {
  state = defaultState

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
