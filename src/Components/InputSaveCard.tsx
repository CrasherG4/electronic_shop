import React, { useState } from 'react'
import { Keyboard, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../Theme/appTheme';

interface Props {
  placeholder: string;
  name: string;
  isNum?: boolean
}

export const InputSaveCard = ({ placeholder, name, isNum = false }: Props) => {
  return (
    <View>
      <TextInput
        placeholder= {placeholder}
        placeholderTextColor={'#444444'}
        keyboardType={isNum ? 'numeric' : 'default'}
        style={styles.inputText}
      />
    </View>
  )
}
