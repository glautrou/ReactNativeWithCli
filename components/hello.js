import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const Hello = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <Text>
      Hello {name}, {count}
    </Text>
  );
};

export default Hello;
