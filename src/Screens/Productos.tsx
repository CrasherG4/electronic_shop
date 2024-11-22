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
    { id: 3, name: 'Baseus Hub USB', price: 5.00, stock: 0, pathImage: 'https://i.blogs.es/68fa54/baseus/1366_2000.jpg', desc: 'Baseus Hub USB C Macbook Pro, Adaptador 7en 1 USB C Tipo C Macbook Pro 13’ a 3 Puertos USB 3.0,HDMI 4K Hub, Puerto PD 100W,Lector de Tarjetas SD/TF para MacBook Pro/Chromebook/XPS y USB CBaseus Hub USB C Macbook Pro, Adaptador 7en 1 USB C Tipo C Macbook Pro 13’’ a 3 Puertos USB 3.0,HDMI 4K Hub, Puerto PD 100W,Lector de Tarjetas SD/TF para MacBook Pro/Chromebook/XPS y USB C' },
    { id: 4, name: 'POWERADD', price: 2.40, stock: 25, pathImage: 'https://i.blogs.es/c56ea8/pow/1366_2000.jpg', desc: 'POWERADD EnergyCell II Batería Externa USB C 26800mAh con PD 30W Carga Rápida Power Bank con 2 Entrada y 3 Salida Cargador Portátil Móvil para Xiaomi Samsung Huawei iPhone iPad Macbook Tableta -Negro' },
    { id: 5, name: 'Yuqi - Yuqi1', price: 2.40, stock: 1, pathImage: 'https://i.scdn.co/image/ab67616d0000b2736f99ccfe83f1eabd15ad3a14', desc: 'Sòng Yǔqí, más conocida como Yuqi, es una cantante, compositora, rapera y bailarina china. En 2018, debutó como integrante de I-DLE y en 2019 se convirtió en coanfitriona del programa chino, Keep Running.' },
    { id: 6, name: '(여자) 아이들 - I Sway', price: 2.40, stock: 10, pathImage: 'https://i.scdn.co/image/ab67616d0000b27366f7b6431ebb26c9b557a96b', desc: 'I Sway es el séptimo EP del grupo femenino surcoreano (G)I-dle. Fue lanzado por Cube Entertainment y distribuido por Kakao M el 8 de julio de 2024. El miniálbum contiene cuatro pistas, incluido su sencillo principal titulado «Klaxon».' },
    { id: 7, name: '(여자) 아이들 - 2', price: 5.00, stock: 4, pathImage: 'https://i.scdn.co/image/ab67616d0000b27342281601a5a3f882ea77741e', desc: '2 es el segundo álbum de estudio del grupo femenino surcoreano (G)I-dle, que fue lanzado el 29 de enero de 2024 por Cube Entertainment. El álbum contiene ocho pistas, incluyendo su sencillo de prelanzamiento llamado «Wife» y su sencillo principal titulado «Super Lady».' },
    { id: 8, name: '(여자) 아이들 - I Never Die', price: 1.80, stock: 54, pathImage: 'https://i.scdn.co/image/ab67616d0000b273c7b6b2976e38a802eebff046', desc: 'I Never Die es el primer álbum de estudio del grupo femenino surcoreano (G)I-dle, que fue lanzado el 14 de marzo de 2022 por Cube Entertainment. El álbum contiene nueve pistas, incluyendo su sencillo principal titulado «Tomboy».' },
    { id: 9, name: 'MMM - Reality in Black', price: 1.30, stock: 7, pathImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Mamamoo_-_Reality_in_Black.png', desc: 'Reality in Black (estilizado como reality in BLACK) es el segundo álbum de estudio del grupo surcoreano Mamamoo. Fue lanzado el 14 de noviembre de 2019 por la discográfica Rainbow Bridge World y distribuido por Kakao M.' },
    { id: 10, name: 'The Weeknd - Dawn FM', price: 5.00, stock: 0, pathImage: 'https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d', desc: 'Dawn FM es el quinto álbum de estudio del cantautor canadiense The Weeknd lanzado el 7 de enero de 2022 por XO y Republic Records. Dawn FM cuenta con apariciones especiales de Tyler, the Creator, Lil Wayne y Jim Carrey.' },
    { id: 11, name: 'Vexento - TSM', price: 2.40, stock: 25, pathImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/09/87/5a/09875ad2-d91b-4199-8b21-29694089e110/5057302120863_cover.jpg/1200x1200bb.jpg', desc: 'Alexander M. llamado por su nombre artistico Vexento es un DJ y productor de musica electronica de 21 años, conocido por crear musica sin coprygth, volviendose altamente famoso en Facebook y Youtube, reconocido por sus exitos como Pixel Party o Masked Heroes, entre otros.' },
    { id: 12, name: 'Yuqi - Yuqi1', price: 2.40, stock: 1, pathImage: 'https://i.scdn.co/image/ab67616d0000b2736f99ccfe83f1eabd15ad3a14', desc: 'Sòng Yǔqí, más conocida como Yuqi, es una cantante, compositora, rapera y bailarina china. En 2018, debutó como integrante de I-DLE y en 2019 se convirtió en coanfitriona del programa chino, Keep Running.' },
    { id: 13, name: '(여자) 아이들 - I Sway', price: 2.40, stock: 10, pathImage: 'https://i.scdn.co/image/ab67616d0000b27366f7b6431ebb26c9b557a96b', desc: 'I Sway es el séptimo EP del grupo femenino surcoreano (G)I-dle. Fue lanzado por Cube Entertainment y distribuido por Kakao M el 8 de julio de 2024. El miniálbum contiene cuatro pistas, incluido su sencillo principal titulado «Klaxon».' },
    { id: 14, name: '(여자) 아이들 - 2', price: 5.00, stock: 4, pathImage: 'https://i.scdn.co/image/ab67616d0000b27342281601a5a3f882ea77741e', desc: '2 es el segundo álbum de estudio del grupo femenino surcoreano (G)I-dle, que fue lanzado el 29 de enero de 2024 por Cube Entertainment. El álbum contiene ocho pistas, incluyendo su sencillo de prelanzamiento llamado «Wife» y su sencillo principal titulado «Super Lady».' },
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
