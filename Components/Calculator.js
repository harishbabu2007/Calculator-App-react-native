import React, { useEffect, useState } from "react";
import Button from "./Button";
import { buttonData } from "./ButtonData";
import { StyleSheet, Text, View, FlatList } from "react-native";

const Calculator = () => {
  const [proccessedText, setProText] = useState("");
  const [currentText, setText] = useState("");

  const setIsEqual = () => {
    try {
      setText(eval(proccessedText));
    } catch {
      setText("Error");
    }
  };

  useEffect(() => {
    setText(proccessedText);
  }, [proccessedText]);

  return (
    <View style={styles.mainBackground}>
      <View style={styles.displayHolder}>
        <Text style={styles.displayText}>{currentText}</Text>
      </View>
      <View style={styles.buttonHolder}>
        <View style={styles.buttonRow}>
          <FlatList
            data={buttonData.slice(0, 3)}
            renderItem={({ item }) => (
              <Button
                item={item}
                stateChanger={setProText}
                equalfunc={setIsEqual}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
        <View style={styles.buttonRow}>
          <FlatList
            data={buttonData.slice(3, 7)}
            renderItem={({ item }) => (
              <Button
                item={item}
                stateChanger={setProText}
                equalfunc={setIsEqual}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>
        <View style={styles.buttonRow}>
          <FlatList
            data={buttonData.slice(7, 11)}
            renderItem={({ item }) => (
              <Button
                item={item}
                stateChanger={setProText}
                equalfunc={setIsEqual}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>
        <View style={styles.buttonRow}>
          <FlatList
            data={buttonData.slice(11, 15)}
            renderItem={({ item }) => (
              <Button
                item={item}
                stateChanger={setProText}
                equalfunc={setIsEqual}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>
        <View style={styles.buttonRow}>
          <FlatList
            data={buttonData.slice(15, 18)}
            renderItem={({ item }) => (
              <Button
                item={item}
                stateChanger={setProText}
                equalfunc={setIsEqual}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#111",
    height: "100%",
    width: "100%",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  buttonHolder: {
    flex: 3,
  },
  displayHolder: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
  displayText: {
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 50,
    color: "#fff",
  },
});
