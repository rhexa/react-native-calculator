import React from 'react'
import { Text } from 'react-native'

const BaseText = (props) => {
    return (
        <Text style={{ color: '#fff', fontSize: 60, ...props.style }}>
            {props.children}
        </Text>
    )
}


export default BaseText