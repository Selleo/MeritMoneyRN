import React, { Component } from 'react'
import {
  Platform,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native'

import consumer from 'src/hocs/consumer'
import TextGradient from 'src/components/TextGradient'
import { secondary, greenFaded } from 'src/styles/colors'
import Icon from 'src/components/Icon'
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
      <ScrollView onScroll={this._animateAvatar} ref={ref => (this.scrollView = ref)}>
        <View style={styles.container}>
          <TextGradient style={styles.header}>KUDO BOARD</TextGradient>

          <TouchableWithoutFeedback onPress={() => this.input.focus()}>
            <View style={styles.searchContainer}>
              <Icon color={greenFaded} name="search" size={20} style={styles.searchIcon} />
              <TextInput
                onChangeText={this._handleSearch}
                placeholder="Search by name"
                placeholderTextColor={greenFaded}
                ref={ref => (this.input = ref)}
                style={styles.search}
                underlineColorAndroid="transparent"
              />
            </View>
          </TouchableWithoutFeedback>

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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 70,
  },
  usersContainer: {
    flex: 3,
    width: '100%',
  },
  searchContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    marginVertical: 30,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    backgroundColor: secondary,
    borderRadius: 25,
  },
  search: {
    backgroundColor: 'transparent',
    color: greenFaded,
    flex: 1,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 15,
    ...Platform.select({
      android: {
        marginLeft: 15,
      },
    }),
  },
  searchIcon: {
    paddingLeft: 20,
  },
  header: {
    fontSize: 30,
  },
})
