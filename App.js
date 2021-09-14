import React, { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import CalcDisplay from './components/CalcDisplay'
import CalcNumbers from './components/CalcNumbers'
import CalcOperators from './components/CalcOperators'
import { sum, subtract, divide, multiply } from './utils/calculators'

export default function App () {
  const uuid = () => new Date().getTime().toString()
  const [sInput, setsInput] = useState('12 + 10')
  const [sOutput, setsOutput] = useState('result')



  return (
    <View style={styles.container}>
      <CalcDisplay
        varinput={sInput}
        varoutput={sOutput}
        style={styles.header} />
      <View style={styles.footer}>
        <CalcNumbers style={{ flex: 3 }} />
        <CalcOperators style={{ flex: 1 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#5e5e5e'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    margin: 0
  }
})
