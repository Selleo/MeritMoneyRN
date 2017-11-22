import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AsyncStorage, Text, View, StyleSheet, FlatList } from 'react-native'
import { Badge } from 'react-native-elements'

import { PRIMARY_COLOR } from '../../utils/variables'
import { actions as commentsActions } from '../../store/comments'

export class UserProfile extends Component {
  static propTypes = {
    myComments: PropTypes.array.isRequired,
    otherComments: PropTypes.array.isRequired,
    loadComments: PropTypes.func.isRequired,
  }

  static defaultProps = {
    myComments: [],
    otherComments: [],
    currentUser: {
      id: 1,
    },
  }

  savedComments = async () => {
    const [firstKey, secondKey] = await AsyncStorage.multiGet(['myComments', 'otherComments'])
    const [, myComments] = firstKey
    const [, otherComments] = secondKey

    return {
      myComments: JSON.parse(myComments),
      otherComments: JSON.parse(otherComments),
    }
  }

  componentWillMount = async () => {
    const comments = await this.savedComments()
    this.props.loadComments(comments)
  }

  renderComment = ({ item: { comment, value } }) => {
    return (
      <View style={styles.comment}>
        <Badge value={value} />
        <Text> {comment} </Text>
      </View>
    )
  }

  keyExtractor = (item, index) => `comment${index}`

  render() {
    const { myComments, otherComments } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Selleo team appreciate…</Text>
        <Text style={styles.section}>me for:</Text>
        <FlatList
          data={myComments}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderComment}
        />
        <Text style={styles.section}>my colleagues for:</Text>
        <FlatList
          data={otherComments}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderComment}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  comment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  header: {
    color: PRIMARY_COLOR,
    fontSize: 26,
  },
  section: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    margin: 10,
  },
})

const mapStateToProps = ({ comments }) => ({
  myComments: comments.myComments,
  otherComments: comments.otherComments,
})

const mapDispatchToProps = {
  loadComments: commentsActions.loadComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
