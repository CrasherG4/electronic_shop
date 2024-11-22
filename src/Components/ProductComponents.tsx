import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../Screens/Productos';

interface Props {
  img: string;
  title: string;
  description: string;
  product: Product;
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ProductComponents = ({ img, title, description, product, changeStockProduct }: Props) => {

  // Función para cortar la descripción de los productos y que se muestren con tres puntos al final
  const cortarString = (): string => {
    const maxLargo: number = 160
    if (description.length > maxLargo) {
      return description.substring(0, maxLargo) + '...';
    }
    else {
      return description;
    }
  }

  //función agregar productos carrito
  const handleAddProduct = () => {
    //Actualizar stock
    changeStockProduct(product.id, 1);
  }

  return (
    <View style={styles.contAlPr}>
      <Image style={styles.imgAlPr} source={{uri: img}}/>
      <View style={styles.contextAlPr}>
        <Text style={styles.textAlPrT}>{title}</Text>
        <Text style={styles.textAlPrD}>{cortarString()}</Text>
      </View>
      <TouchableOpacity style={styles.conticonAlPr} onPress={handleAddProduct}>
          <Icon name='star' size={28} color={'white'} />
          <Text style={styles.textAdd}>Añadir</Text>
          <Icon name='star' size={28} color={'white'}/>
      </TouchableOpacity>
    </View>
  )
}