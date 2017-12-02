import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Animated, Dimensions, StyleSheet } from 'react-native'

export class AnimatedCollector extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    currentTab: PropTypes.string.isRequired,
    targetHeight: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { currentHeight: new Animated.Value(0) }
    this.createDimensionsListener()
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

  isPortrait = () => {
    const { height, width } = Dimensions.get('screen')
    return height >= width
  }

  dimensionsListener = () => {
    Dimensions.addEventListener('change', () => {
      this.setState({
        currentHeight: this.isPortrait()
          ? new Animated.Value(props.targetHeight)
          : new Animated.Value(props.targetHeight / 2),
      })
    })
  }

  animate = () => {
    const toValue = this.props.targetHeight / (this.isPortrait() ? 1 : 2)

    Animated.timing(this.state.currentHeight, {
      toValue,
      duration: 1000,
    }).start()
  }

  render() {
    const { currentHeight } = this.state

    return (
      <Animated.View style={[styles.container, { height: currentHeight }]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#888',
  },
})

const mapStateToProps = ({ currentTab }) => ({ currentTab })

export default connect(mapStateToProps)(AnimatedCollector)
