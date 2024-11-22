import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InputSaveCard } from './InputSaveCard';

interface Props {
  isVisible: boolean;
  setShowModalCard: () => void;
  setSaveCard: () => void;
}

export const CardSaveCard = ({ isVisible, setShowModalCard, setSaveCard }: Props) => {

  const btnGuardar = () => {
    setSaveCard();
    setShowModalCard();
  } 

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.modalCar}>
        <View style={styles.modalCarInfo}>
          <View style={styles.textAndExit}>
            <Text style={styles.h1Modal}>Tarjeta Crédito/Débito</Text>
            <Icon style={styles.iconCarExit} name='cancel' size={30} color={'#444444'} onPress={setShowModalCard}/>
          </View>
          <InputSaveCard placeholder='Número de tarjeta' name='numATarjeta'/>
          <InputSaveCard placeholder='Número de atrás' name='numBTarjeta'/>
          <InputSaveCard placeholder='MM/AA' name='fechaTarjeta' isNum={true}/>
          <InputSaveCard placeholder='Nombre del propietario' name='nameTarjeta'/>
          <TouchableOpacity style={{...styles.buyButtom, height: 44, width: '100%', marginTop: 10}} onPress={btnGuardar}>
            <Text style={styles.h1_txt}>Guardar Tarjeta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
