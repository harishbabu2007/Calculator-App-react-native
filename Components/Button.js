import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ item, stateChanger, textChanger, equalfunc }) => {
  let styler = "a";

  const passEval = (button_text) => {
    stateChanger(button_text);
  };

  const preProccess = (button_text) => {
    switch (button_text) {
      case "AC":
        passEval("");
        break;
      case "%":
        passEval((prev) => {
          return prev + "%";
        });
        break;
      case "➗":
        passEval((prev) => {
          return prev + "/";
        });
        break;
      case "X":
        passEval((prev) => {
          return prev + "*";
        });
        break;
      case "-":
        passEval((prev) => {
          return prev + "-";
        });
        break;
      case "+":
        passEval((prev) => {
          return prev + "+";
        });
        break;
      case "=":
        equalfunc();
        break;
      case ".":
        passEval((prev) => {
          return prev + ".";
        });
        break;
      default:
        passEval((prev) => {
          return prev + button_text;
        });
        break;
    }
  };

  if (item.orange) {
    styler = styles.buttonOrange;
  } else {
    if (item?.big) {
      styler = styles.bigButton;
    } else {
      styler = styles.buttonGray;
    }
  }
  return (
    <TouchableOpacity onPress={() => preProccess(item.text)} style={styler}>
      <Text style={styles.calcText}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonGray: {
    backgroundColor: "#7F8C8D",
    padding: 20,
    borderRadius: 10000,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  buttonOrange: {
    backgroundColor: "#F5B041",
    padding: 20,
    borderRadius: 10000,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  calcText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  bigButton: {
    backgroundColor: "#7F8C8D",
    padding: 20,
    borderRadius: 10000,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
  },
});
