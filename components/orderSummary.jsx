import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const OrderSummary = () => (
  <View style={styles.checkout}>
    <Text style={styles.order}>Order Summary</Text>
    <View style={styles.summary}>
      <View style={styles.lefttext}>
        <Text>Monthly furniture total</Text>
        <Text>Delivery and assembly</Text>
        <Text>Rental period</Text>
        <Text>Subtotal</Text>
      </View>
      <View style={styles.righttext}>
        <Text>$123/mo</Text>
        <Text>$199</Text>
        <Text>2 months</Text>
        <Text>$322</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Rent</Text>
      <FontAwesome name="shopping-cart" size={24} color="#FFF" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  checkout: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  order: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lefttext: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  righttext: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#002DFF',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 8,
  },
});

export default OrderSummary;