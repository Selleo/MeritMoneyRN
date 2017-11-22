import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import createStackNavigation from './scenes/createStackNavigator'

export class AppContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
  }

  render() {
    const { currentUser } = this.props
    const Navigation = createStackNavigation(currentUser)

    return <Navigation />
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
})

export default connect(mapStateToProps)(AppContainer)
