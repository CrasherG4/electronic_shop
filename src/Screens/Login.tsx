import React, { useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { User } from '../nav/StackNavigator'
import { styles } from '../Theme/appTheme'
import { InputComponents } from '../Components/InputComponents';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// interfaz formulario
interface FormLogin{
  email: string;
  password: string;
}

// interfaz usuario
interface Props{
  users: User[];
}

export const Login = ({ users }: Props) => {

  // Navegación
  const navigation = useNavigation();

  // Estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  })

  // Actualiza el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  }

  // Permite iniciar sesión
  const handleSignIn = () => {
    if(!formLogin.email || !formLogin.password) {
      // Mensajes de alerta
      Alert.alert(
        "Error",
        "Por favor, completar todos los campos!"
      );
      return;
    }
    // Validadndo si el correo y contraseña existe
    if(!verifyUser()){
      Alert.alert(
        "Error",
        "Correo y/o contraseña incorrecta!"
      );
      return;
    }
    
    Alert.alert(
      "Cuenta comprobada",
      "Entrando en la aplicación..."
    )
    const foundUser = users.find(user => user.email === formLogin.email);
    console.log(foundUser);
   
    //Permitir la navegación al usuario si ha ingresado los datos correctamente
    navigation.dispatch(CommonActions.navigate({ 
      name: 'Inicio'
    }));
  }

  // Verifica el correo y contraseña
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];    
    return existUser;
  }

  // Cambia el icono
  // (Sigue siendo bastante rudimentario pero aún sirve)
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

  // Mostrar usuarios que se encuentran en la app
  const mostrarUsuarios = () => {
    const usuariosInfo = users.map(user => `Email: ${user.email}\nContraseña: ${user.password}`).join('\n\n');
    Alert.alert(
      "Usuarios:",
      usuariosInfo
    )
  }

  return (
    <View style={styles.contAll}>
      <View style={styles.circuloUno}/>
      <View style={styles.circuloDos}/>
      <View style={styles.circuloTres}/>
      <View style={styles.circuloCuatro}/>
      <View style={styles.logoLR}>
        <View>
          <Image style={styles.imgLogoLR} source={require('../img/Logos/LogoTomateYBlanco.png')}/>
        </View>
        <Text style={styles.textLogoES}>Electronic Shop</Text>
      </View>
      <View style={styles.inputComponent}>
        <InputComponents placeholder='Correo' handleSetValues={handleSetValues} name='email'/>
        <InputComponents placeholder='Contraseña' handleSetValues={handleSetValues} name='password' secureTextEntry={hiddenPassword} actionIcon={() => changeIcon()} isPss={true} icon={icon}/>
        <View style={styles.checkForm}>
          <TouchableOpacity style={styles.btnLogIn} onPress={() => handleSignIn()}>
            <Icon style={styles.iconAccess} name={'check'} size={40} color={'#000'}/>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btnRegLog} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
          <Text style={styles.textLogReg}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.touchMostrarUsuarios} onPress={() => mostrarUsuarios()}>
        <Text style={styles.btnMostrarUsuarios}>Nuestros Usuarios</Text>
      </TouchableOpacity>
    </View>
  )
}