import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'

export class AnimatedCollector extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    currentTab: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    targetHeight: PropTypes.number.isRequired,
  }

  state = {
    currentHeight: new Animated.Value(0),
  }

  componentDidUpdate = prevProps => {
    const prevTab = prevProps.currentTab
    const { currentTab } = this.props

    if (prevTab && prevTab !== currentTab && currentTab === 'CollectorsAndHamsters') {
      this.animate()
    }

    if (prevTab === 'CollectorsAndHamsters' && currentTab !== 'CollectorsAndHamsters') {
      this.setState({ currentHeight: new Animated.Value(0) })
    }
  }

  animate = () => {
    Animated.timing(this.state.currentHeight, {
      toValue: this.props.targetHeight,
      duration: 1000,
    }).start()
  }

  render() {
    const { currentHeight } = this.state

    return (
      <Animated.View
        style={{
          ...this.props.style,
          height: currentHeight,
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

const mapStateToProps = ({ currentTab }) => ({ currentTab })

export default connect(mapStateToProps)(AnimatedCollector)
