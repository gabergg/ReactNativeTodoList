import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  boxSmall: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'orange',
  },
})

export default class List extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
      </ScrollView>
    )
  }
}
