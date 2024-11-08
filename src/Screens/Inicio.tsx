import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Inicio = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.contAll}>
      <TouchableOpacity style={styles.navBack} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
        <Icon style={{...styles.iconBack, color: '#000'}} name={'close'} size={40} color={'#000'}/>
      </TouchableOpacity>
      <Text style={styles.textoInicio_BORRAR}>🔧 Pantalla de Inicio en desarrollo 🔧</Text>
    </View>
  )
}
