import React from 'react'
import { Text } from 'react-native'

const BaseText = (props) => {
    return <Text style={{fontSize: 50, ...props.style}}>
    {props.children}
</Text>
} 


export default BaseText