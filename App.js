import {Text,View,StyleSheet} from 'react-native'

function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}></Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
  },
   text: {
     fontSize: 20,
     fontWeight: 'bold',
  },
})
export default App;
