import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Login } from '../Screens/Login';
import { Registro } from '../Screens/Registro';
import { Inicio } from '../Screens/Inicio';
import { Productos } from '../Screens/Productos';
import { AyudaYSoporte } from '../Screens/AyudaYSoporte';

export interface User{
  id: number;
  nombre: string;
  apellido: string;
  usuario: string;
  email: string;
  password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {

  const users: User[] = [
    {id: 1, nombre: 'Gabriel', apellido: 'Olmedo', usuario: 'CrasherG4', email: 'cgp4762@gmail.com', password: '123456'},
    {id: 2, nombre: 'Alex', apellido: 'Castillo', usuario: 'AlCa16', email: 'fc16@gmail.com', password: '86868686'},
  ]

  // hook useState: manipular el arreglo con la lista de usuarios
  const [listUsers, setListUsers] = useState<User[]>(users);

  //función para agregar nuevos usuarios al arreglo
  const handleAddUser = (user: User) => {
    //operador propagación ...: crea una copia del arreglo
    setListUsers([ ...listUsers, user ])
  }

  const [saveCard, setSaveCard] = useState<boolean>(false)

  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' options={{headerShown: false}} children={() => <Login users={listUsers}/>}/>
      <Stack.Screen name='Registro' options={{headerShown: false}} children={() => <Registro users={listUsers} handleAddUser={handleAddUser}/>}/>
      <Stack.Screen name='Inicio' options={{ headerShown: false }} children={() => <Inicio setSaveCard={() => setSaveCard(!saveCard)} saveCard={saveCard}/>}/>
      <Stack.Screen name='Productos' options={{ headerShown: false }} children={() => <Productos setSaveCard={() => setSaveCard(!saveCard)} saveCard={saveCard}/>} />
      <Stack.Screen name='AyudaYSoporte' options={{headerShown: false}} component={AyudaYSoporte}/>
    </Stack.Navigator>
  )
}
