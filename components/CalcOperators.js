import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './DarkText'
import CalcButton from './CalcButton'

const Operators = (props) => {
    const onPress = (btn) => {
        props.onPress(btn)
    }
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <View style={styles.rows}>
                <CalcButton title={'+'} style={styles.buttons} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={'-'} style={styles.buttons} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={'x'} style={styles.buttons} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={':'} style={styles.buttons} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rows: {
        flex: 1,
        width: '100%',
    },
    buttons: {
        backgroundColor: '#5c5c5c',
        borderColor: '#9c9c9c'
    }
})

export default Operators