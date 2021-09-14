import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './DarkText'

const Display = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
                <Text>{props.varinput}</Text>
            {/* <View style={styles.rows}>
            </View> */}
                <Text>{props.varoutput}</Text>
            {/* <View style={styles.rows}>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#2e2e2e',
        padding: 15
    },
    rows: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Display