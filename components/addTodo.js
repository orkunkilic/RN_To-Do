import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    const submitAndDelete = () => {
        submitHandler(text)
        setText('')
    }

    return (
        <View>
            <TextInput
                style={styles.input} 
                placeholder='new todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress = {() => submitAndDelete() }  title='add todo' color='coral' />
        </View>
    )
}

const styles= StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo
