import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Carrito } from '../Components/Carrito';
import { styles } from '../Theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { NavAll } from '../Components/NavAll';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
  desc: string;
}

export interface Car {
  id: number;
  name: string;
  price: number;
  totalCantidad: number;
}

export const Productos = () => {

  const navigation = useNavigation();

  const [car, setCar] = useState<Car[]>([]);

  const carrrito: Car[] = [
    {id: 1, name: 'uno', price: 12, totalCantidad: 4},
    {id: 2, name: 'dos', price: 2, totalCantidad: 2}
  ]

  return (
    <View style={styles.contAll}>
      <Text style={{...styles.h1_txt, color: '#444444', alignSelf: 'center', marginTop: '10%'}}>Los mejores productos</Text>
      <Text style={{...styles.h1_txt, color: '#444444', alignSelf: 'center'}}>a los mejores precios</Text>
      <Text style={{...styles.h2_txt, color: '#444444', marginTop: 20, padding: 10}}>Lo más destacado:</Text>
      <View style={styles.areaCarrito}/>
      <Carrito car={car} setCar={setCar}/>
      <NavAll/>
    </View>
  )
}
