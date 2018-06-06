import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Icon from 'src/components/Icon'
import { yellow, greenFaded, greenFadedOpacity } from 'src/styles/colors'

export default class Comment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.avatar} />
          <View>
            <View style={styles.kudosContainer}>
              <Icon color={yellow} name="star-full2" size={15} style={styles.kudo} />
              <Icon color={yellow} name="star-full2" size={15} style={styles.kudo} />
              <Icon color={yellow} name="star-full2" size={15} style={styles.kudo} />
              <Icon color={yellow} name="star-empty3" size={15} style={styles.kudo} />
              <Icon color={yellow} name="star-empty3" size={15} style={styles.kudo} />
            </View>
            <Text style={styles.kudoInfo}> this week</Text>
          </View>
          <View style={styles.avatar} />
        </View>
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.comment}>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: greenFadedOpacity,
    paddingHorizontal: 20,
  },
  avatar: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kudosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 50,
  },
  kudoInfo: {
    textAlign: 'center',
    fontSize: 16,
    color: greenFaded,
  },
  kudo: {
    paddingHorizontal: 4,
  },
  comment: {
    color: greenFaded,
    fontSize: 16,
    lineHeight: 20,
    paddingTop: 5,
    textAlign: 'left',
  },
})
