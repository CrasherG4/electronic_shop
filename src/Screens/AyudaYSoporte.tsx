import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const AyudaYSoporte = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.contAll4All}>
      <View style={{ ...styles.circuloUno, backgroundColor: '#2E3192', opacity: 0.2 }} />
      <View style={{ ...styles.circuloDos, backgroundColor: '#2E3192', opacity: 0.2 }} />
      <View style={{ ...styles.circuloTres, backgroundColor: '#2E3192', opacity: 0.2 }} />
      <View style={{ ...styles.circuloCuatro, backgroundColor: '#2E3192', opacity: 0.2 }} />
      <TouchableOpacity style={styles.navBack} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))}>
        <Icon style={styles.iconBack} name={'close'} size={40} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.helpAndSuport}>
        <Text style={{ ...styles.h2_txt, color: '#000', fontSize: 28 }}>Cómo obtener ayuda:</Text>
        <Text style={styles.textInicio}>- Asistencia en Línea: Utiliza nuestra función de chat en vivo disponible 24/7 para obtener asistencia inmediata de uno de nuestros especialistas.</Text>
        <Text style={styles.textInicio}>- Soporte por Correo Electrónico: Si prefieres, puedes enviar un correo electrónico a "cgp4762@gmail.com" y nuestro equipo se pondrá en contacto contigo lo antes posible.</Text>
        <Text style={{ ...styles.h2_txt, color: '#000', fontSize: 28 }}>Características del Soporte:</Text>
        <Text style={styles.textInicio}>- Guías y Tutoriales: Accede a guías detalladas y videos tutoriales para aprovechar al máximo todas las funciones de nuestra aplicación.</Text>
        <Text style={styles.textInicio}>- Actualizaciones y Notificaciones: Mantente informado sobre las últimas actualizaciones y mejoras que estamos implementando.</Text>
      </View>
    </View>
  )
}
