import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderSummary = ({ totalPayment }) => (
  <View style={styles.checkout}>
    <Text style={styles.order}>Order Summary</Text>
    <View style={styles.summary}>
      <View style={styles.leftText}>
        <Text>Monthly furniture total</Text>
        <Text>Delivery and assembly</Text>
        <Text>Rental period</Text>
        <Text>Subtotal</Text>
      </View>
      <View style={styles.rightText}>
        <Text>${totalPayment}</Text>
        <Text>$199</Text>
        <Text>2 months</Text>
        <Text>${totalPayment + 199}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Rent</Text>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  order: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leftText: {
    flexDirection: 'column',
  },
  rightText: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#002DFF',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 8,
  },
});

export default OrderSummary;
