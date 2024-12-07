import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Alert } from 'react-native';

const CheckButton = () => {
  const [count, setCount] = useState(0);

  // Fetch initial count from the database
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('https://your-api-url.com/get-count');
        if (!response.ok) {
          throw new Error('Failed to fetch count');
        }
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };

    fetchCount();
  }, []);

  // Increment and update the count in the database
  const increment = async () => {
    try {
      const newCount = count + 1;
      const response = await fetch('https://your-api-url.com/update-count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: newCount }),
      });

      if (!response.ok) {
        throw new Error('Failed to update count');
      }

      setCount(newCount);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Decrement and update the count in the database
  const decrement = async () => {
    try {
      if (count > 0) {
        const newCount = count - 1;
        const response = await fetch('https://your-api-url.com/update-count', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: newCount }),
        });

        if (!response.ok) {
          throw new Error('Failed to update count');
        }

        setCount(newCount);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
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
