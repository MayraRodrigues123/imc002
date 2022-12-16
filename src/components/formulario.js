import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Formulario = () => {
  return (
    <View>
        <View>
            <Text>Altura (m)</Text>
            <TextInput
            placeholder="1.72"
            keyboardType="numeric"
            />
            <Text>Peso (Kg)</Text>
            <TextInput
            placeholder="80.5"
            keyboardType="numeric"
            />
        </View>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({})