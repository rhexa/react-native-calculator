import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './DarkText'
import CalcButton from './CalcButton'

const Numbers = (props) => {
    const onPressNumbers = (btn) => {
        props.onPressNumbers(btn)
    }
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <View style={styles.rows}>
                <CalcButton title={'.'} onPress={() => props.onPressNumbers('.')} />
                <CalcButton title={0} onPress={() => props.onPressNumbers(0)} />
                <CalcButton title={'='} onPress={() => props.onPressCount()} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={1} onPress={() => props.onPressNumbers(1)} />
                <CalcButton title={2} onPress={() => props.onPressNumbers(2)} />
                <CalcButton title={3} onPress={() => props.onPressNumbers(3)} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={4} onPress={() => props.onPressNumbers(4)} />
                <CalcButton title={5} onPress={() => props.onPressNumbers(5)} />
                <CalcButton title={6} onPress={() => props.onPressNumbers(6)} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={7} onPress={() => props.onPressNumbers(7)} />
                <CalcButton title={8} onPress={() => props.onPressNumbers(8)} />
                <CalcButton title={9} onPress={() => props.onPressNumbers(9)} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={'C'} onPress={() => props.onPressNumbers('clear')} />
                <CalcButton title={'<--'} onPress={() => props.onPressNumbers('del')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rows: {
        flexDirection: 'row',
        flex: 1
    }
})

export default Numbers