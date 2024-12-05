import { Text, View, StyleSheet } from 'react-native';
import Cards from './components/cards';
import OrderSummary from './components/orderSummary';

function App() {
  return (
    <View style={styles.container}>
      <Cards />
      <OrderSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;