import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './DarkText'
import CalcButton from './CalcButton'

const Numbers = (props) => {
    const onPress = (btn) => {
        props.onPress(btn)
    }
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <View style={styles.rows}>
                <CalcButton title={'.'} />
                <CalcButton title={0} />
                <CalcButton title={'='} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={1} />
                <CalcButton title={2} />
                <CalcButton title={3} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={4} />
                <CalcButton title={5} />
                <CalcButton title={6} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={7} />
                <CalcButton title={8} />
                <CalcButton title={9} />
            </View>
            <View style={styles.rows}>
                <CalcButton title={'C'} />
                <CalcButton title={'<--'} />
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