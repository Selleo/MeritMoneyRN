import React, { Component } from 'react'

import consumer from './hocs/consumer'
import AppNavigation from './navigators/AppNavigation'

export class App extends Component {
  render() {
    return <AppNavigation />
  }
}

export default consumer(App)
