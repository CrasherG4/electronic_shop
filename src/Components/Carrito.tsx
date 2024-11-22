import React, { useState } from 'react'
import { Alert, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { Car } from '../Screens/Inicio';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardSaveCard } from './CardSaveCard';

interface Props {
  isVisible: boolean;
  car: Car[];
  setShowModal: () => void;
  setCar: (value: []) => void;
  setSaveCard: () => void;
  saveCard: boolean;
}

export const Carrito = ({ isVisible, car, setShowModal, setCar, setSaveCard, saveCard }: Props) => {

  const totalPay = (): number => {
    //acumulador
    let total: number = 0;
    car.forEach(product => {
      total += product.price * product.totalCantidad
    })
    return total;
  }

  //función enviar la compra
  const handleSendInfo = () => {
    const productInfo = car.map(product => `Producto: ${product.name}\nCantidad: ${product.totalCantidad}`).join('\n\n');
    Alert.alert(
      "¡Compra exitosa!",
      `${productInfo}`
    )
    //Cerrar el modal
    setShowModal()
    setCar([]);
  }

  //Borrar la info del carrito
  const trashCar = () => {
    setCar([]);
    Alert.alert("Eliminación completa", "Se han eliminado todos los productos del carrito de compras.")
    setShowModal();
  }

  const [showModalCard, setShowModalCard] = useState<boolean>(false)

  const comTarjeta = () => {
    if (saveCard == true) {
      handleSendInfo();
    }
    else {
      setShowModalCard(!showModalCard);
    }
  }

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.modalCar}>
        <View style={styles.modalCarInfo}>
          <View style={styles.textAndExit}>
            <Text style={styles.h1Modal}>Carrito de compras</Text>
            <Icon style={styles.iconCarExit} name='cancel' size={30} color={'#444444'} onPress={setShowModal}/>
          </View>
          <View style={styles.headerTableName}>
            <View style={{...styles.listModal, width: '42%', marginLeft: 5}}>
              <Text style={styles.textModalUno}>Producto</Text>
            </View>
            <View style={styles.listModal}>
              <Text style={{ ...styles.textModalUno, marginRight: 10 }}>Precio</Text>
              <Text style={{ ...styles.textModalUno, marginRight: 10 }}>Cantidad</Text>
              <Text style={{ ...styles.textModalUno, marginRight: 10 }}>Total</Text>
            </View>
          </View>
          <View style={styles.areaFlatListCar}>
            <FlatList data={car} renderItem={({ item }) =>
              <View style={{...styles.headerTable, backgroundColor: '#ffeaea',}}>
                <Text style={{...styles.textListModal, width: '46%', alignSelf: 'center', paddingLeft: 5}}>{item.name}</Text>
                <View style={{...styles.listModal, gap: 35}}>
                  <Text style={{...styles.textListModal, width: 40}}>{item.price}</Text>
                  <Text style={{...styles.textListModal, width: 10}}>{item.totalCantidad}</Text>
                  <Text style={{...styles.textListModal, width: 40}}>{item.price * item.totalCantidad}</Text>
                </View>
              </View>
            } keyExtractor={item => item.id.toString()} />
          </View>
          <View style={styles.trashBuyButtoms}>
            <TouchableOpacity style={styles.trashButtom} onPress={trashCar}>
              <Icon name='cancel' size={24} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButtom} onPress={comTarjeta}>
              <Text style={styles.textBuyModal}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CardSaveCard isVisible={showModalCard} setShowModalCard={() => setShowModalCard(!showModalCard)} setSaveCard={setSaveCard}/>
    </Modal>
  )
}