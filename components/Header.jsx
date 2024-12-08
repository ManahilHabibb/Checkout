import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width * 0.9,
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 27,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800' ,
    color: 'black',
    marginRight: 27,
  },
});

export default Header;