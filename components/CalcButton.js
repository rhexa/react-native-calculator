import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Text from './DarkText'

const Button = (props) => {
    return (
        <TouchableOpacity
            style={{...styles.button, ...props.style}}
            onPress={props.onPress}
        >
            <Text style={styles.texts}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#2e2e2e",
        padding: 20,
        borderColor: '#5e5e5e',
        borderWidth: 0.2,
        // borderRadius: 5,
        justifyContent: 'center',
        flex: 1
    },
    texts: {
        fontSize: 40
    }
})

export default Button