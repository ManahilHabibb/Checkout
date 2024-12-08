import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CheckButton = ({ count, setCount, updateOrder }) => {
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateOrder(newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateOrder(newCount);
    }
  };

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
    marginRight: 19,
  },
  decrement: {
    width: 30,
    height: 30,
    borderRadius: 5,
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
    borderRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

  },
  incrementText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CheckButton;