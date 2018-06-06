import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Button from 'src/components/Button'
import TextGradient from 'src/components/TextGradient'
import CommentsList from './CommentsList'

export default class Comments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextGradient style={styles.header}>COMMENTS</TextGradient>
        </View>
        <View style={styles.filterContainers}>
          <View style={styles.buttonContainer}>
            <Button text="YOURS" />
          </View>
          <View style={styles.buttonContainer}>
            <Button outline text="ALL" />
          </View>
        </View>
        <View style={styles.commentsContainer}>
          <CommentsList />
        </View>
      </View>
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
