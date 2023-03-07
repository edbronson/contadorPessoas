import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      
      marginBottom: 20,
    },

    

    input: {
      height: 40,
      width: '80%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 10,
      
    },
    botao: {
      backgroundColor: '#008000',
      borderRadius: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 40,
      paddingRight: 40,
      marginTop: 20,
      
    },
    botaoTexto: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    resultado: {
      marginTop: 20,
      color: '#ff0000',
      fontSize: 24,
      fontWeight: 'bold',
    },
  });


  export {styles};