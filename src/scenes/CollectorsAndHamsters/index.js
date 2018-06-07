import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import Button from 'src/components/Button'
import TextGradient from 'src/components/TextGradient'
import AvatarsList from './AvatarsList'

export default class Comments extends Component {
  state = {
    type: 'collectors',
  }

  _selected = type => !(this.state.type === type)
  _selectFilter = type => () => this.setState({ type })

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TextGradient style={styles.header}>TOP</TextGradient>
          </View>
          <View style={styles.filterContainers}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._selectFilter('collectors')}
                outline={this._selected('collectors')}
                text="COLLECTORS"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._selectFilter('hamsters')}
                outline={this._selected('hamsters')}
                text="HAMSTERS"
              />
            </View>
          </View>
          <View style={styles.userList}>
            <AvatarsList />
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
    paddingTop: 70,
  },
  userList: {
    flex: 3,
  },
  filterContainers: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  header: {
    fontSize: 30,
  },
})
