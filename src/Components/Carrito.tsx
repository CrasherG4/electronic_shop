import React from 'react'
import { Alert, FlatList, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { Car } from '../Screens/Productos';
import { CardCarrito } from './CardCarrito';

interface Props {
  car: Car[];
  setCar: (value: []) => void;
}

export const Carrito = ({ car, setCar }: Props) => {

  const totalPay = (): number => {
    let total: number = 0;
    car.forEach(product => {
      total += product.price * product.totalCantidad
    })
    return total;
  }

  console.log(car);

  return (
    <View style={styles.contAll}>
      <View>
        <FlatList data={car} renderItem={({ item }) => <CardCarrito carProduct={item}/>} keyExtractor={item => item.id.toString()} />
      </View>
    </View>
  )
}
