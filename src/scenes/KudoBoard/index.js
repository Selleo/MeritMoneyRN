import React, { Component } from 'react'
import { Platform, TextInput, ScrollView, View, StyleSheet } from 'react-native'

import consumer from 'src/hocs/consumer'
import TextGradient from 'src/components/TextGradient'
import { secondary, greenFaded } from 'src/styles/colors'
import UserList from './UserList'

export class KudoBoard extends Component {
  state = {
    type: 'yours',
  }

  componentDidMount = () => {
    this._navListener = this.props.navigation.addListener('willBlur', () =>
      this.scrollView.scrollTo({ x: 0, animated: true }),
    )
  }

  componentWillUnmount = () => {
    this._navListener.remove()
  }

  _handleSearch = name => this.setState({ name })
  _animateAvatar = ({ nativeEvent: { contentOffset: { y } } }) => {
    const animationValue = y > 20 ? 0 : 1

    if (this.props.avatarAnimationValue !== animationValue) {
      this.props.setAvatarAnimationValue(animationValue)
    }
  }

  render() {
    return (
      <ScrollView
        onScroll={this._animateAvatar}
        ref={ref => (this.scrollView = ref)}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <TextGradient style={styles.header}>KUDO BOARD</TextGradient>
          <View style={styles.searchContainer}>
            <TextInput
              onChangeText={this._handleSearch}
              placeholder="Search by name"
              placeholderTextColor={greenFaded}
              style={styles.search}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.usersContainer}>
            <UserList />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default consumer(KudoBoard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
  usersContainer: {
    flex: 3,
    width: '100%',
  },
  searchContainer: {
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    paddingVertical: 30,
  },
  search: {
    ...Platform.select({
      android: {
        marginLeft: 15,
      },
    }),
    backgroundColor: secondary,
    color: greenFaded,
    fontSize: 18,
    height: 50,
    borderRadius: 25,
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 30,
  },
})
