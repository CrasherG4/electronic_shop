import React, { useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { User } from '../nav/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styles } from '../Theme/appTheme';
import { InputComponents } from '../Components/InputComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  users: User[];
  handleAddUser: (user: User) => void;
}

// Formulario Registro
interface FormRegister {
  nombre: string;
  apellido: string;
  usuario: string;
  email: string;
  password: string;
}


export const Registro = ({ users, handleAddUser }: Props) => {

  const navigation = useNavigation();

  // Formulario
  const [formRegister, setFormRegister] = useState<FormRegister>({
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    password: ''
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [icon, setIcon] = useState('visibility')

  const changeIcon = () => {
    setHiddenPassword(!hiddenPassword)

    if (icon === 'visibility') {
      setIcon('lock')
    }
    else {
      (icon === 'lock')
      setIcon('visibility')
    }
  }

  // Cambiar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }

  const handleSignInUp = () => {
    if (!formRegister.nombre || !formRegister.apellido || !formRegister.usuario || !formRegister.email || !formRegister.password) {
      Alert.alert(
        "Campos incompletos",
        "Por favor, completa todos los campos anteriores."
      )
      return;
    }

    // Verificar usuarios
    const verifyUser = (): User => {
      const existUser = users.filter(user => user.email === formRegister.email)[0]
      return existUser;
    }

    //Comprobar que no exista el usuario
    if (verifyUser() != null) {
      Alert.alert(
        "Este usuario ya existe",
        "El correo utilizado ya está registrado"
      )
      return;
    }

    //General el nuevo usuario
    const getIdUsers = users.map(user => user.id);
    const getNewId = Math.max(...getIdUsers) + 1;
    const newUser: User = {
      id: getNewId,
      nombre: formRegister.nombre,
      apellido: formRegister.apellido,
      usuario: formRegister.usuario,
      email: formRegister.email,
      password: formRegister.password
    }

    handleAddUser(newUser);

    Alert.alert(
      "¡Completado!",
      "Tu registro se ha completado de forma exitosa"
    ),
      navigation.goBack();

    console.log(formRegister);
  }

  return (
      <View style={styles.contAll}>
      <View style={{...styles.circuloUno, backgroundColor: '#2E3192'}}/>
      <View style={{...styles.circuloDos, backgroundColor: '#2E3192'}}/>
      <View style={{...styles.circuloTres, backgroundColor: '#2E3192'}}/>
      <View style={{...styles.circuloCuatro, backgroundColor: '#2E3192'}}/>
      <TouchableOpacity style={styles.navBack} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
        <Icon style={styles.iconBack} name={'close'} size={40} color={'#000'}/>
      </TouchableOpacity>
      <View style={{...styles.logoLR, paddingTop: '10%'}}>
        <View>
          <Image style={styles.imgLogoLR} source={require('../img/Logos/LogoTomateYBlanco.png')}/>
        </View>
        <Text  style={styles.textLogoES}>Electronic Shop</Text>
      </View>
      <View style={styles.inputComponent}>
      <InputComponents placeholder='Nombre' handleSetValues={handleSetValues} name='nombre' />
        <InputComponents placeholder='Apellido' handleSetValues={handleSetValues} name='apellido' />
        <InputComponents placeholder='Usuario' handleSetValues={handleSetValues} name='usuario' />
        <InputComponents placeholder='Correo' handleSetValues={handleSetValues} name='email' />
        <InputComponents placeholder='Contraseña' handleSetValues={handleSetValues} name='password' secureTextEntry={hiddenPassword} actionIcon={() => changeIcon()} isPss={true} icon={icon} />
        <View style={{...styles.checkForm, top: '40%'}}>
          <TouchableOpacity style={{...styles.btnLogIn, backgroundColor: '#004A80'}} onPress={() => handleSignInUp()}>
            <Icon style={styles.iconAccess} name={'check'} size={40} color={'#000'}/>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}
