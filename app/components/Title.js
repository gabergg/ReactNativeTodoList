import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
       <Text style={styles.text}>{children}</Text>
     </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
  },
})
