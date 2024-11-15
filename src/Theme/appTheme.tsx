import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
  contAll: {
    flex: 1,
    backgroundColor: 'white'
  },
  circuloUno: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: '#FF4747',
    position: 'absolute',
    top: -100,
    left: -170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  circuloDos: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: '#e03333',
    position: 'absolute',
    top: -220,
    left: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  circuloTres: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: '#FF4747',
    position: 'absolute',
    bottom: -120,
    right: -170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  circuloCuatro: {
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: '#e03333',
    position: 'absolute',
    bottom: -240,
    right: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 9,
  },
  logoLR: {
    paddingTop: '50%',
    alignContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  textLogoES: {
    fontWeight: '500',
    fontSize: 30,
    color: 'black',
  },
  imgLogoLR: {
    width: 140,
    height: 140,
  },
  inputComponent: {
    marginTop: 40,
    backgroundColor: 'white',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginRight: 80,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: '#ebebeb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  inputText: {
    fontSize: 28,
    color: '#000',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
  },
  iconPassword: {
    position: 'absolute',
    right: 40,
    zIndex: 1,
    marginTop: 25,
  },
  checkForm: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: '28%',
    right: -40,
  },
  btnLogIn: {
    backgroundColor: '#FF4747',
    width: 70,
    height: 70,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5
  },
  iconAccess: {
    position: 'absolute',
    alignSelf: 'center',
    top: '22%',
    color: 'white'
  },
  touchMostrarUsuarios: {
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
  btnMostrarUsuarios: {
    color: '#FF4747',
    fontSize: 16,
    fontWeight: '400',
  },
  btnRegLog: {
    marginTop: '25%',
    width: 140,
    left: 0,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5
  },
  textLogReg: {
    color: '#004A80',
    fontSize: 20,
    fontWeight: '600',
    padding: 15,
  },
  navBack: {
    width: '15%',
    marginTop: '10%',
    marginLeft: '2%'
  },
  iconBack: {
    color: 'white',
    padding: 10
  },
  ui_uno: {
    width: '100%',
    height: '35%',
    backgroundColor: '#FF4747',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ui_dos: {
    height: 50,
    marginTop: '15%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  cabeceraInicio: {
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  h1_txt: {
    color: "#fff",
    fontSize: 24,
    fontWeight: '800'
  },
  h2_txt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: '600'
  },
  navRed: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: '10%', 
    gap: 50 
  },
  iconNavRed: {
    height: 80,
    width: 80,
    backgroundColor: '#FF4747',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconCenterNavred: {
    color: 'white'
  },
  iconProfile: {
    color: 'white',
    position: 'absolute',
    right: 40,
    top: 4 
  },
  txtNavRed: {
    flex:1,
    position: 'absolute',
    bottom: 0
  },
  // Carrito
  areaCarrito: {
    padding: 10,
    backgroundColor: '#dadada',
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 8
  },
  // Navegación de abajo
  navRedAll: {
    position: 'absolute',
    width: '50%',
    height: '6%',
    backgroundColor: '#FF4747',
    borderRadius: 16,
    bottom: '2%',
    alignSelf: 'center',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  touchIconNavAll: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchIconNavAllSelect: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  iconNavAllSelect: {
    color: '#FF4747'
  },
  iconNavAll: {
    color: '#fff'
  }
})