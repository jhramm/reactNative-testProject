import { useEffect, useState } from "react";
import React, { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native";
import { ProductsInterface } from './Interfaces/ProductsInterface';

export default function Products() {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const getData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <View style={styles.background}>
        <Text style={styles.text}>All products</Text>
      </View>
      <ScrollView>
        {products.map((item) => {
          return (
            <View key={item.id} style={styles.productContainer}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.image}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>Price: £{item.price}</Text>
              <Text style={styles.description}>Description: {item.description}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  productContainer: {
    flexDirection: "column",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "space-between"
  },
  image: {
    width: 200,
    height: 200,
    margin: "auto",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
    color: "#888"
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  }


})
