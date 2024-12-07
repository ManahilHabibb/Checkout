import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MyCards from './Cards';
import OrderSummary from './OrderSummary';
import Header from './Header';

const App = () => {
  const [totalPayment, setTotalPayment] = useState(0);

  const cardData = [
    { id: 1, image: require('./assets/1.png'), title: 'Florence Chair', description: '$45/mo.', payment: 45 },
    { id: 2, image: require('./assets/2.png'), title: 'Florence Sofa', description: '$39/mo.', payment: 39 },
    { id: 3, image: require('./assets/3.png'), title: 'Harper Chair', description: '$28/mo.', payment: 28 },
  ];

  const updateOrder = (amount) => {
    setTotalPayment((prev) => prev + amount);
  };

  return (
    <View style={styles.container}>
      <Header title="Rental Shop" />
      {cardData.map((data) => (
        <MyCards
          key={data.id}
          image={data.image}
          title={data.title}
          description={data.description}
          payment={data.payment}
          updateOrder={(count) => updateOrder(data.payment * count)}
        />
      ))}
      <OrderSummary totalPayment={totalPayment} />
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
