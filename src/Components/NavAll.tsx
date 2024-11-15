import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const NavAll = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.navRedAll}>
      <TouchableOpacity style={styles.touchIconNavAllSelect} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))}>
        <Icon name='home' size={40} color={'#FF4747'} style={styles.iconNavAllSelect} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchIconNavAll} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Productos' }))}>
        <Icon name='shopping-bag' size={40} color={'#fff'} style={styles.iconNavAll} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchIconNavAll} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))}>
        <Icon name='credit-card' size={40} color={'#fff'} style={styles.iconNavAll} />
      </TouchableOpacity>
    </View>
  )
}
