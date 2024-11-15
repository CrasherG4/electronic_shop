import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavAll } from '../Components/NavAll';

export const Inicio = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.contAll}>
      <View style={styles.ui_uno} />
      <TouchableOpacity style={styles.navBack} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
        <Icon style={styles.iconBack} name={'close'} size={40} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.cabeceraInicio}>
        <View>
          <Text style={styles.h1_txt}>¡Bienvenido a EShop!</Text>
          <Text style={styles.h2_txt}>Calidad inmejorable por años.</Text>
          <Icon name='contacts' size={50} color={'#fff'} style={styles.iconProfile} />
        </View>
        <View style={styles.navRed}>
          <TouchableOpacity style={styles.iconNavRed} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Productos' }))}>
            <Icon name='shopping-bag' size={50} color={'#fff'} style={styles.iconCenterNavred} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconNavRed}>
            <Icon name='credit-card' size={50} color={'#fff'} style={styles.iconCenterNavred} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconNavRed}>
            <Icon name='help' size={50} color={'#fff'} style={styles.iconCenterNavred} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ui_dos}>
        <Text style={{...styles.h2_txt, color: '#000'}}>Carrito de la compra:</Text>
      </View>
      <View style={styles.areaCarrito}/>
      <NavAll/>
    </View>
  );
}
