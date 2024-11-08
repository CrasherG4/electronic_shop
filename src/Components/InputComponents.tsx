import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../Theme/appTheme';

interface Props {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void;
  name: string;
  icon?: string;
  secureTextEntry?: boolean;
  isPss?: boolean;
  actionIcon?: () => void;
}

export const InputComponents = ({ placeholder, handleSetValues, name, secureTextEntry = false, isPss = false, actionIcon, icon}: Props) => {

  return (
    <View>
      {isPss && (
        <Icon style={styles.iconPassword} name={icon} size={30} color={'#e03333'} onPress={actionIcon}/>
      )}
      <TextInput
        placeholder= {placeholder}
        placeholderTextColor={'#444444'}
        keyboardType='default'
        onChangeText={(value) => handleSetValues(name, value)}
        secureTextEntry={secureTextEntry}
        style={styles.inputText}
      />
    </View>
  )
}