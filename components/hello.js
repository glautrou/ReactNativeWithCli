import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const Hello = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>
        Hello {name}, {count}
      </Text>
      <WebView
        originWhitelist={["*"]}
        source={{ html: "<h1>Hello world</h1>" }}
        style={{ marginTop: 20, width: 300, height: 100 }}
      />
    </>
  );
};

export default Hello;
