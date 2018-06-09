import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

import Button from 'src/components/Button'
import StarRating from 'src/scenes/KudoBoard/StarRating'
import CommentInput from 'src/scenes/KudoBoard/CommentInput'

export default class CollapsibleContent extends PureComponent {
  state = {
    quantity: 1,
  }

  _handleTextChange = () => comment => this.setState({ comment })
  _handleQuantityChange = quantity => () => this.setState({ quantity })

  render() {
    const { comment, quantity } = this.state

    return (
      <View style={styles.container}>
        <StarRating quantity={quantity} setQuantity={this._handleQuantityChange} />
        <CommentInput handleChange={this._handleTextChange} value={comment} />
        <Button onPress={() => this.props.closeCollapsible(true)} text="GIVE KUDO" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
})
