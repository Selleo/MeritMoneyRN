import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { blueDark, secondaryLight, primary, greenFaded } from 'src/styles/colors'
export default class CommentInput extends Component {
  render() {
    return (
      <LinearGradient
        colors={[secondaryLight, primary]}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.textContainer} />
        <TextInput
          multiline
          onChangeText={this.props.handleCommentUpdate}
          placeholder="I'd like to add a kudo because..."
          placeholderTextColor={greenFaded}
          style={styles.kudoCommentInput}
          underlineColorAndroid="transparent"
        />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  kudoCommentInput: {
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 16,
    height: 80,
    paddingHorizontal: 15,
    width: 280,
    zIndex: 3,
    color: greenFaded,
  },
  textContainer: {
    backgroundColor: blueDark,
    alignSelf: 'center',
    borderRadius: 10,
    height: 75,
    position: 'absolute',
    top: 2.5,
    width: 275,
    zIndex: 2,
  },
  linearGradient: {
    borderRadius: 10,
    zIndex: 1,
    marginVertical: 15,
  },
})
