import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CheckButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <View style={styles.checkout}>
      <TouchableOpacity style={styles.decrement} onPress={decrement}>
        <Text style={styles.decrementText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.number}>{count}</Text>
      <TouchableOpacity style={styles.increment} onPress={increment}>
        <Text style={styles.incrementText}>+</Text>
      </TouchableOpacity>
    </View>
  );
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
