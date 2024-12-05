import react from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const CheckoutItem = () =>(
  return (
    <View style={styles.checkout}>
      
      {/* Decrement */}
      <TouchableOpacity style={styles.decrement}>

      </TouchableOpacity>

      {/* Number */}
      <Text style={styles.number}></Text>

      {/* Increment */}
      <TouchableOpacity style={styles.increment}>

      </TouchableOpacity>

    </View>
  )
);