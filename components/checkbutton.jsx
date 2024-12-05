import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CheckButton = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.checkout}>
      
      {/* Decrement */}
      <TouchableOpacity style={styles.decrement} onPress={() => setCount(count - 1)}>
        <Text style={styles.decrementText}>-</Text>
      </TouchableOpacity>

      {/* Number */}
      <Text style={styles.number}>{count}</Text>

      {/* Increment */}
      <TouchableOpacity style={styles.increment} onPress={() => setCount(count + 1)}>
        <Text style={styles.incrementText}>+</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  checkout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  decrement: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  increment: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incrementText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CheckButton;