import React from 'react'
import { Car } from '../Screens/Productos'
import { Text, View } from 'react-native';

interface Props {
  carProduct: Car;
}

export const CardCarrito = ({ carProduct }: Props) => {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  )
}
