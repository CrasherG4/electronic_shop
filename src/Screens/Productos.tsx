import React, { useState } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { NavAll } from '../Components/NavAll';
import { CardProduct } from '../Components/CardProduct';
import { Carrito } from '../Components/Carrito';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

interface Props {
  setSaveCard: () => void;
  saveCard: boolean
}

export const Productos = ({ setSaveCard, saveCard }: Props) => {

  const navigation = useNavigation();

  const products: Product[] = [
    { id: 1, name: 'Z-Edge - Monitor curvo', price: 160, stock: 54, pathImage: 'https://m.media-amazon.com/images/I/71+xyPjtnjL._AC_SY355_.jpg', desc: 'Revolucione su juego y disfrute de la experiencia de juego ultra suave y fluida con la representación de fotogramas más rápida y un menor retraso de entrada gracias a la rápida frecuencia de actualización de 240 Hz y el tiempo de respuesta de 1 ms.' },
    { id: 2, name: 'UGreen', price: 27, stock: 7, pathImage: 'https://i.blogs.es/68fa54/baseus/1366_2000.jpg', desc: 'UGREEN Hub USB C, 6 En 1 Adaptador USB C a HDMI 4K, 3 Puertos USB 3.0, Lector Tarjeta SD TF, USB C Dock para Macbook Air M1 Macbook Pro 2020 2019 2018 DELL XPS 15, iPad Pro 2021 2020, Samsung S21 S20.' },
    { id: 3, name: 'Baseus Hub USB', price: 26, stock: 0, pathImage: 'https://i.blogs.es/68fa54/baseus/1366_2000.jpg', desc: 'Baseus Hub USB C Macbook Pro, Adaptador 7en 1 USB C Tipo C Macbook Pro 13’ a 3 Puertos USB 3.0,HDMI 4K Hub, Puerto PD 100W,Lector de Tarjetas SD/TF para MacBook Pro/Chromebook/XPS y USB CBaseus Hub USB C Macbook Pro, Adaptador 7en 1 USB C Tipo C Macbook Pro 13’’ a 3 Puertos USB 3.0,HDMI 4K Hub, Puerto PD 100W,Lector de Tarjetas SD/TF para MacBook Pro/Chromebook/XPS y USB C' },
    { id: 4, name: 'POWERADD', price: 41, stock: 25, pathImage: 'https://i.blogs.es/c56ea8/pow/1366_2000.jpg', desc: 'POWERADD EnergyCell II Batería Externa USB C 26800mAh con PD 30W Carga Rápida Power Bank con 2 Entrada y 3 Salida Cargador Portátil Móvil para Xiaomi Samsung Huawei iPhone iPad Macbook Tableta -Negro' },
    { id: 5, name: 'Krisdonia', price: 123, stock: 1, pathImage: 'https://i.blogs.es/9cae27/kris/1366_2000.jpg', desc: 'Krisdonia 25000mah Power Bank Batería Externa Cargador Portátil con Doble USB(Quick Charge 3.0)+DC Salida+Typo c Salida - Universal Power Pack Compatible para Laptops, Macbook, Smartphone y Tablet' },
    { id: 6, name: 'Verbatim Go Mini', price: 11, stock: 10, pathImage: 'https://i.blogs.es/74c872/go/1366_2000.jpg', desc: 'Verbatim 49020 - Ratón (USB, Óptico, Oficina, Ambidextro, Monótono, Cable)' },
    { id: 7, name: 'Logitech MX Master 3', price: 75, stock: 4, pathImage: 'https://i.blogs.es/b5b210/logitech-mx-master-3/1366_2000.jpg', desc: 'Logitech MX Master 3 Advanced Ratón Inalámbrico, Receptor USB, Bluetooth, 2.4GHz, Desplazamiento Rápido, Seguimiento 4K DPI en Cualquier Superficie, 7 Botones, Recarcable, PC, Mac, iPadOS, Negro' },
    { id: 8, name: 'SanDisk Extreme SSD portátil 1TB', price: 124, stock: 54, pathImage: 'https://i.blogs.es/b2a133/san/1366_2000.jpg', desc: 'SanDisk Extreme SSD portátil 1TB - hasta 550MB/s velocidad de lectura' },
    { id: 9, name: 'WD 1 TB My Passport WD 1 TB My Passport ', price: 61, stock: 7, pathImage: 'https://i.blogs.es/a62a79/captura-de-pantalla-2020-08-27-a-las-17.22.57/1366_2000.png', desc: 'WD My Passport WDBYVG0010BBK-WESN - Disco Duro Portátil, Negro (Black), 1TB' },
    { id: 10, name: 'GAOMON S620', price: 41, stock: 0, pathImage: 'https://i.blogs.es/77500c/gao/1366_2000.jpg', desc: 'GAOMON S620 6,5 x 4 Pulgadas OSU Tableta Gráfica 8192 Niveles Presión para Dibujar' },
    { id: 11, name: 'Wacom Intuos S Tableta Gráfica', price: 48, stock: 25, pathImage: 'https://i.blogs.es/971db8/wa/1366_2000.jpg', desc: 'Wacom Intuos S Tableta Gráfica – Tableta Gráfica Portátil para pintar, dibujar, editar photos con 1 software creativo incluido para descargar, óptima para la educación en línea y el teletrabajo, negra' },
    { id: 12, name: 'Casio FX-991SPX II', price: 40, stock: 1, pathImage: 'https://i.blogs.es/56eaf1/fx-991/1366_2000.jpg', desc: 'Casio FX-991SPX II - Calculadora científica, Recomendada para el curriculum español y portugués, 576 funciones, Solar y color gris /blanco' },
    { id: 13, name: 'Huawei MatePad New Edition', price: 207, stock: 10, pathImage: 'https://i.blogs.es/7c3c04/huawei-matepad-new/1366_2000.jpg', desc: 'HUAWEI MatePad 10.4 New Edition - Tablet de 10.4" con Pantalla FullHD (WiFi 6, RAM de 4GB, ROM de 128GB, EMUI 10.0, Huawei Mobile Services)' },
    { id: 14, name: 'iPad 2020', price: 394, stock: 4, pathImage: 'https://i.blogs.es/2211fd/ipad-2020-13-/1366_2000.jpg', desc: 'Apple iPad (de 10,2 Pulgadas, 8.ª generación, con Wi-Fi y 32 GB) - Plata (2020)' },
    { id: 15, name: 'Philips Pendrive', price: 12, stock: 4, pathImage: 'https://i.blogs.es/4266bc/phi/1366_2000.jpg', desc: 'Philips Pendrive USB 3.0 128 GB - Snow Edition (Orange)' },
    { id: 16, name: 'SanDisk Memoria Flash ', price: 20, stock: 4, pathImage: 'https://i.blogs.es/dc563f/san/1366_2000.jpg', desc: 'SanDisk Memoria Flash USB 128 GB para tu smartphone Android - Ultra Dual DriveType-C - USB 3.1, Black (SDDDC2-128G-G46)' },
  ]

  const [productState, setProductState] = useState(products)

  const [car, setCar] = useState<Car[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false)

  const [showModalCard, setShowModalCard] = useState<boolean>(false)

  const changeStockProduct = (idProduct: number, quantity: number) => {
    //Nuevo stock
    const updateStock = productState.map(product => product.id === idProduct
      ? { ...product, stock: product.stock - quantity }
      : product
    )
    //Actualizar productState
    setProductState(updateStock);

    //llamar función agregar carrito
    addProduct(idProduct, quantity)
  }

  const addProduct = (idProduct: number, totalCantidad: number) => {
    const product = productState.find(product => product.id === idProduct)

    if (!product) {
      return;
    }

    const productoExistente = car.findIndex(item => item.id === idProduct)

    if (productoExistente >= 0) {
      const carActualizado = [...car]
      carActualizado[productoExistente].totalCantidad += totalCantidad
      setCar(carActualizado)
    }
    else {
      const newProductCar: Car = {
        id: product.id,
        name: product.name,
        price: product.price,
        totalCantidad: totalCantidad
      }
      setCar([...car, newProductCar])
    }
  }

  return (
    <View style={styles.contAll}>
      <View style={styles.circuloUno}/>
      <View style={styles.circuloDos}/>
      <View style={styles.circuloTres}/>
      <View style={styles.circuloCuatro}/>
      <Text style={{...styles.h1_txtPr, color: 'white', alignSelf: 'center', marginTop: '10%', }}>Los mejores productos</Text>
      <Text style={{...styles.h1_txtPr, color: 'white', alignSelf: 'center'}}>a los mejores precios</Text>
      <Text style={{...styles.h2_txt, color: 'white', marginTop: 20, padding: 10, textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 0.2}}>Lo más destacado:</Text>
      <View style={styles.areaPr}>
        <FlatList data={productState} renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />} keyExtractor={item => item.id.toString()} />
      </View>
      {car.length != 0 ? (
          <TouchableOpacity style={styles.carPos} onPress={() => setShowModal(!showModal)}>
            <View style={styles.lengthIconCar}>
              <Text style={styles.textLengthIconCar}>{car.length}</Text>
            </View>
            <Icon name='shopping-cart' size={40} color={'#ff6b6b'} />
          </TouchableOpacity>
        ) : (
          <View style={styles.carPos}>
            <Icon name='shopping-cart' size={40} color={'#ff6b6b'} onPress={() => Alert.alert("No existen productos seleccionados", "Por favor selecciona un producto con el botón 'Añadir' antes de continuar.")} />
          </View>
        )}
      <Carrito isVisible={showModal} car={car} setShowModal={() => setShowModal(!showModal)} setCar={setCar} saveCard={saveCard} setSaveCard={setSaveCard}/>
      <NavAll/>
    </View>
  )
}
