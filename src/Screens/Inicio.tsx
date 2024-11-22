import React, { useState } from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavAll } from '../Components/NavAll';
import { CardSaveCard } from '../Components/CardSaveCard';

export interface Car {
  id: number;
  name: string;
  price: number;
  totalCantidad: number;
}

interface Props {
  setSaveCard: () => void;
  saveCard: boolean;
}

export const Inicio = ({ setSaveCard, saveCard }: Props) => {

  const navigation = useNavigation();

  const [showModalCard, setShowModalCard] = useState<boolean>(false)

  return (
    <View style={styles.contAll}>
      <View style={{...styles.circuloTres, backgroundColor: '#ffbaba'}}/>
      <View style={{...styles.circuloCuatro, backgroundColor: '#ffbaba'}}/>
      <View style={styles.ui_uno} />
      <TouchableOpacity style={styles.navBack} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
        <Icon style={styles.iconBack} name={'close'} size={40} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.cabeceraInicio}>
        <View>
          <Text style={styles.h1_txt}>¡Bienvenido a EShop!</Text>
          <Text style={styles.h2_txt}>Calidad inmejorable por años.</Text>
          <Icon name='contacts' size={50} color={'#fff'} style={styles.iconProfile} />
        </View>
        <View style={styles.navRed}>
          <TouchableOpacity style={styles.iconNavRed} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Productos' }))}>
            <Icon name='shopping-bag' size={50} color={'#fff'} style={styles.iconCenterNavred} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconNavRed}>
            <Icon name='credit-card' size={50} color={'#fff'} style={styles.iconCenterNavred} onPress={() => setShowModalCard(!showModalCard)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconNavRed} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'AyudaYSoporte' }))}>
            <Icon name='help' size={50} color={'#fff'} style={styles.iconCenterNavred} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ui_dos}>
        <Text style={{...styles.h2_txt, color: '#000', fontSize: 28}}>Productos EShop</Text>
        <Text style={styles.textInicio}>Para poder realizar las compras presione el icono "<Icon name='shopping-bag' size={24} color={'#444444'} />" y encontrará información sobre los productos.</Text>
        <View style={styles.imgInicioView}>
          <Image style={styles.imgInicio} source={{uri: 'https://futcardsfifa.com/app/uploads/2022/04/decoracion-habitacion-gamer-scaled.jpeg'}}/>
          <Text style={styles.textImgInicio}>Periféricos</Text>
        </View>
        <View style={styles.imgInicioView}>
          <Image style={styles.imgInicio} source={{uri: 'https://t4.ftcdn.net/jpg/03/82/73/53/360_F_382735345_8i5SyAT7IH8aUB3mYVJ0TWfuJod7dtoc.webp'}}/>
          <Text style={styles.textImgInicio}>Entretenimiento</Text>
        </View>
        <View style={styles.imgInicioView}>
          <Image style={styles.imgInicio} source={{uri: 'https://img.freepik.com/fotos-premium/dormitorio-luces-led-ambiente-moderno-moda-ia-generativa_431161-1058.jpg'}}/>
          <Text style={styles.textImgInicio}>Electrodomésticos</Text>
        </View>
      </View>
      <CardSaveCard isVisible={showModalCard} setShowModalCard={() => setShowModalCard(!showModalCard)} setSaveCard={setSaveCard}/>
      <NavAll/>
    </View>
  );
}
