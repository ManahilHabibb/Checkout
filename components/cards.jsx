import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CheckButton from './checkbutton';

const Cards = ({ image, title, description, payment, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.payment}>{payment}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <CheckButton />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    width: 350,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  payment: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Cards;