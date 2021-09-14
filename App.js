import React, { useEffect, useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import CalcDisplay from './components/CalcDisplay'
import CalcNumbers from './components/CalcNumbers'
import CalcOperators from './components/CalcOperators'
import { sum, subtract, divide, multiply } from './utils/calculators'

export default function App () {
  const uuid = () => new Date().getTime().toString()
  const [sInput, setsInput] = useState()
  const [sOutput, setsOutput] = useState()
  const [isResult, setisResult] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [operator, setoperator] = useState()
  const [num1, setnum1] = useState()
  const [num2, setnum2] = useState()

  const onPressNumbers = (num) => {
    if (num === 'del') {
      setsInput(sInput.slice(0, -1))
      if (num2 && num2.length > 1) {
        setnum2(num2.slice(0, -1))
      } else {
        setnum2()
        setsOutput()
      }
      if (sInput.length === num1.length+1) {
        setoperator()
        setsOutput()
        setnum1()
      }
      return
    }
      
    if (num === 'clear') {
      setsInput()
      setsOutput()
      setoperator()
      setisResult(false)
      setnum1()
      setnum2()
      return
    } 

    if (isResult){
      if (!num2) setnum2(num)
      if (num2) setnum2(`${num2}${num}`)
    }

    if (!sInput) return setsInput(num)
    setsInput(`${sInput}${num}`)
  }

  const onPressOperators = (attr) => {
    setnum1(sInput)
    setoperator(attr)
    setisResult(true)
    setsInput(`${sInput}${attr}`)
  }

  const count = () => {
    let a = parseFloat(num1)
    let b = parseFloat(num2)
    if (operator === '+') return setsOutput(sum(a,b))
    if (operator === '-') return setsOutput(subtract(a,b))
    if (operator === 'x') return setsOutput(multiply(a,b))
    if (operator === ':') return setsOutput(divide(a,b))
  }

  useEffect(() => {
    if(isResult && num2) count()
  })

  return (
    <View style={styles.container}>
      <CalcDisplay
        varinput={sInput}
        varoutput={sOutput}
        style={styles.header} />
      <View style={styles.footer}>
        <CalcNumbers style={{ flex: 3 }} onPressNumbers={onPressNumbers} onPressCount={count} />
        <CalcOperators style={{ flex: 1 }} onPressOperators={onPressOperators} />
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
