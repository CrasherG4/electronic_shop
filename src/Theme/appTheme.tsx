import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
  contAll: {
    flex: 1,
    backgroundColor: 'white'
  },
  contAll4All: {
    flex: 1
  },
  contCardPr: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
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
  // Inicio
  imgInicioView:{
    marginBottom: 15,
    backgroundColor: '#000000',
    borderRadius: 6,
    justifyContent: 'center'
  },
  imgInicio: {
    width: '100%',
    height: 120,
    borderRadius: 6, 
    opacity: 0.5
  },
  textInicio: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 20,
  },
  textImgInicio: {
    position: 'absolute',
    fontSize: 34,
    fontWeight: '700',
    alignSelf: 'center',
    color: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.2
  },
  // Nav Inferior
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
    height: '32%',
    backgroundColor: '#FF4747',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ui_dos: {
    height: '100%',
    marginTop: '12%',
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
    fontWeight: '600',
  },
  navRed: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: '6%', 
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
  
  // Navegación de abajo
  navRedAll: {
    position: 'absolute',
    width: '50%',
    height: '6%',
    backgroundColor: '#FF4747',
    borderRadius: 16,
    bottom: '1%',
    alignSelf: 'center',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
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
  },
  // Muestra de productos
  h1_txtPr: {
    color: "#fff",
    fontSize: 24,
    fontWeight: '800',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.2
  },
  contAlPr: {
    padding: 4,
    margin: 4,
    width: '90%',
    height: 500,
    borderRadius: 10,
    flexDirection: 'column',
    gap: 6,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#ff6b6b'
  },
  areaPr: {
    backgroundColor: '#ffeaea',
    padding: 10,
    width: '84%',
    height: '82%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  imgAlPr: {
    marginTop: 4,
    width: '95%',
    height: '60%',
    borderRadius: 6,
    backgroundColor: '#ff6b6b'
  },
  contextAlPr: {
    width: '92%',
    height: '100%',
    flexDirection: 'column'
  },
  textAlPrT: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800'
  },
  textAlPrD: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify'
  },
  conticonAlPr: {
    position: 'absolute',
    backgroundColor: '#ff6b6b',
    width: '100%',
    height: 40,
    bottom: 10,
    flexDirection: 'row',
    gap: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAdd: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: 'white'
  },
  iconAdd: {
    color: 'white',
  },
  securityView: {
    height: 60,
    width: '100%',
    backgroundColor: '#ead9d9',
    marginBottom: 3
  },
  // Modal Car
  modalCar: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalCarInfo: {
    backgroundColor: 'white',
    width: '90%',
    height: '60%',
    borderRadius: 8,
    padding: 20,
    gap: 20
  },
  textAndExit: {
    flexDirection: 'row',
  },
  h1Modal: {
    color: '#444444',
    fontSize: 24,
    fontWeight: '600'
  },
  lengthIconCar: {
    zIndex: 1,
    width: 26,
    height:26,
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#ff6b6b',
    alignItems: 'center',
  },
  textLengthIconCar:{
    fontSize: 16,
    fontWeight: '900',
  },
  carPos: {
    position: 'absolute',
    right: 20,
    top: 50
  },
  iconCarExit: {
    position: 'absolute',
    right: 0,
  },
  textModalUno: {
    color: '#444444',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center'
  },
  headerTable: {
    height: 60,
    flexDirection: 'row',
    gap: 20,
    marginTop: 5,
    borderRadius: 6
  },
  headerTableName: {
    height: 20,
    flexDirection: 'row',
    gap: 20,
    marginLeft: 10,
    marginRight: 10
  },
  listModal: {
    flexDirection: 'row',
  },
  textListModal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444444',
    alignSelf: 'center',
  },
  areaFlatListCar: {
    alignItems: 'center',
    width: '100%',
    height: '70%'
  },
  trashBuyButtoms: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    gap: 4
  },
  trashButtom: {
    width: '15%',
    height: '100%',
    backgroundColor: '#ff6b6b',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyButtom: {
    width: '85%',
    height: '100%',
    backgroundColor: '#ff6b6b',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBuyModal: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },
  helpAndSuport: {
    flex:1,
    padding: 20,
    marginTop: '5%'
  }
})