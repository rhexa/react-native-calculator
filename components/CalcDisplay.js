import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './DarkText'

const Display = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text>{props.varinput}</Text>
            <Text>{props.varoutput}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        backgroundColor: '#2e2e2e',
        padding: 15
    }
})

export default Display