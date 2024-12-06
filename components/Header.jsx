import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;