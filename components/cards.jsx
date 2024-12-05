import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CheckButton from './CheckButton';

const Cards = ({ image, title, description, payment }) => (
  <View style={styles.container}>
    <View>
      <TouchableOpacity style={styles.card}>
        <Image source={image} style={{ width: 50, height: 50 }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.payment}>{payment}</Text>
      </TouchableOpacity>
    </View>
    <View>
      <CheckButton />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  payment: {
    fontSize: 16,
    color: '#666',
  },
});

export default Cards;