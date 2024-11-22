import React, { useState } from 'react'
import { Product } from '../Screens/Productos';
import { View } from 'react-native';
import { styles } from '../Theme/appTheme';
import { ProductComponents } from './ProductComponents';

interface Props {
  product: Product;
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProduct = ({ product, changeStockProduct }: Props) => {

  return (
    <View style={styles.contCardPr}>
      <ProductComponents img={product.pathImage} title={product.name} description={product.desc} product={product} changeStockProduct={changeStockProduct}/>
      <View style={styles.securityView}/>
    </View>
  )
}