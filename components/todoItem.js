import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const todoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={20} color='#333' />
                <Text style = {styles.itemText}>
                    {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item: {

        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
     },
    
    itemText: {
        marginLeft: 10,
        fontSize: 18,
    }
})

export default todoItem
