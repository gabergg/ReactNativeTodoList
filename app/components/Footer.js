import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Footer extends Component {
  render() {
    const {children} = this.props
    const {onPressItem} = this.props

    return (
        <TouchableOpacity style={styles.footer} onPress={() => onPressItem()}>
          <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    padding: 15,
  },
  text: {
    textAlign: 'center',
    color: 'red',
  },
})
