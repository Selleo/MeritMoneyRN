import React, { Component } from 'react'
import { connect } from 'react-redux'

import createStackNavigation from './scenes/createStackNavigator'

export class AppContainer extends Component {
  render() {
    const { currentUser } = this.props
    const Navigation = createStackNavigation(currentUser)

    return (
      <Navigation />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

export default connect(mapStateToProps)(AppContainer)
