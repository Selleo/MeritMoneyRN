import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import {Badge} from 'react-native-elements'
import { PRIMARY_COLOR } from './utils/variables'

export default class Comments extends Component {
  static defaultProps = {
    myComments: [
      {comment: 'some long and fancy comment', value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
    ],
    otherComments: [
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
      {comment: 'some long and fancy comment',  value: 5},
    ],
    currentUser: {
      id: 1,
    }
  }

  renderComment = ({item: comment, index}) => {
   return (
     <View key={index} style={styles.comment}>
      { index === 0 &&
        <Text style={styles.section}>me for:</Text>
      }
      <Badge value={comment.value} />
      <Text> {comment.comment} </Text>
        { index === (this.props.myComments.length - 1) &&
          <Text style={styles.section}>my colleagues for:</Text>
        }
      </View>
    )
  }

  keyExtractor = (item, index) => `comment${index}`;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Selleo team appreciate…</Text>
        <FlatList
          data={[...this.props.myComments, ...this.props.otherComments]}
          renderItem={this.renderComment}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  comment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    color: PRIMARY_COLOR,
  },
  section: {
    fontSize: 20,
    color: PRIMARY_COLOR,
  }
})
