import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OrderSummary = ({ totalPayment, onRentPress }) => {
  const deliveryFee = 199;
  const rentalPeriod = 2;

  return (
    <View style={styles.checkout}>
      <Text style={styles.order}>Order Summary</Text>
      <View style={styles.summary}>
        <View style={styles.leftText}>
          <Text>Monthly furniture total</Text>
          <Text>Delivery and assembly</Text>
          <Text>Rental period</Text>
          <Text style={styles.subtotalText}>Subtotal</Text>
        </View>
        <View style={styles.rightText}>
          <Text>${totalPayment.toFixed(2)}</Text>
          <Text>${deliveryFee}</Text>
          <Text>{rentalPeriod} months</Text>

          <Text style={styles.subtotalText}>${(totalPayment + deliveryFee).toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRentPress}>
        <Text style={styles.buttonText}>Rent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkout: {
    width: width * 0.9,
    marginTop: 16,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 6,
    shadowColor: 'blue',
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
  subtotalText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#002DFF',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 8,
  },
});

export default OrderSummary;