import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import Button from 'src/components/Button'
import TextGradient from 'src/components/TextGradient'
import CommentsList from './CommentsList'

export default class Comments extends Component {
  state = {
    type: 'yours',
  }

  _selected = type => !(this.state.type === type)
  _selectFilter = type => () => this.setState({ type })

  _animateAvatar = ({ nativeEvent: { contentOffset: { y } } }) => {
    const animationValue = y > 30 ? 0 : 1
    this.avatar.animate(animationValue)
  }

  render() {
    return (
      <ScrollView onScroll={this._animateAvatar} scrollEventThrottle={16}>
        <View style={styles.container}>
          <View>
            <TextGradient style={styles.header}>COMMENTS</TextGradient>
          </View>
          <View style={styles.filterContainers}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._selectFilter('yours')}
                outline={this._selected('yours')}
                text="YOURS"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._selectFilter('all')}
                outline={this._selected('all')}
                text="ALL"
              />
            </View>
          </View>
          <View style={styles.commentsContainer}>
            <CommentsList />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentsContainer: {
    flex: 3,
    width: '100%',
  },
  filterContainers: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  header: {
    fontSize: 30,
  },
})
