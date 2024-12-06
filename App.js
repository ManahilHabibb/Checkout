import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cards from './components/Cards';
import OrderSummary from './components/OrderSummary';
import Header from './components/header';
const App = () => {
  const cardData = [
    {
      id: 1,
      image: require('./assets/1.png'),
      title: 'Florence Chair',
      description: '$45/mo.',
      payment: '$45/mo',
    },
    {
      id: 2,
      image: require('./assets/2.png'),
      title: 'Florence Chair',
      description: '$897',
      payment: '$39/mo',
    },
    {
      id: 3,
      image: require('./assets/3.png'),
      title: 'Harper Swivel Chair',
      description: '$800.',
      payment: '$28/mo',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      {cardData.map((data) => (
        <Cards
          key={data.id}
          image={data.image}
          title={data.title}
          description={data.description}
          payment={data.payment}
        />
      ))}
      <OrderSummary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

export default App;
