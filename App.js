import React, { useState } from "react";
import { View, StyleSheet, Alert, Dimensions } from "react-native";
import MyCards from "./components/cards";
import OrderSummary from "./components/orderSummary";
import Header from "./components/Header";
import { cardData } from "./cardData.js";

// Firebase URL configuration
const FIREBASE_URL = "https://task-02-72a4d-default-rtdb.firebaseio.com/";

const App = () => {
  const saveToFirebase = async (items, totalPayment) => {
    try {
      const response = await fetch(`${FIREBASE_URL}/checkout.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items,
          totalPayment: totalPayment,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data.");
      }

      Alert.alert("Success", "Items saved successfully!", [{ text: "OK" }]);
    } catch (error) {
      Alert.alert("Error", "Failed to save items: " + error.message, [
        { text: "OK" },
      ]);
    }
  };

  const [totalPayment, setTotalPayment] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const updateOrder = (item, count) => {
    const existingItemIndex = selectedItems.findIndex((i) => i.id === item.id);

    let updatedItems = [...selectedItems];

    if (existingItemIndex > -1) {
      if (count === 0) {
        // Remove item if count is 0
        updatedItems = updatedItems.filter((i) => i.id !== item.id);
      } else {
        // Update existing item's count
        updatedItems[existingItemIndex] = { ...item, count };
      }
    } else if (count > 0) {
      // Add new item
      updatedItems.push({ ...item, count });
    }

    setSelectedItems(updatedItems);

    // Recalculate total payment
    const newTotalPayment = updatedItems.reduce(
      (total, item) => total + item.payment * item.count,
      0
    );
    setTotalPayment(newTotalPayment);
  };

  const handleRent = () => {
    // Save selected items to Firebase
    if (selectedItems.length > 0) {
      saveToFirebase(selectedItems, totalPayment);
    } else {
      Alert.alert("No Items", "Please select at least one item to rent", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Rental Shop" onBackPress={() => {}} />
      {cardData.map((data) => (
        <MyCards
          key={data.id}
          image={data.image}
          title={data.title}
          description={data.description}
          payment={data.payment}
          updateOrder={(count) => updateOrder(data, count)}
        />
      ))}
      <OrderSummary totalPayment={totalPayment} onRentPress={handleRent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
});

export default App;
