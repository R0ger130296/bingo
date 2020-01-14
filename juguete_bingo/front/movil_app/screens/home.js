import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_principal}>
          <TextInput
            style={styles.bola_principal}
            value="69"
            editable={false}
          />
        </View>
        <View style={styles.container_secundarias}>
          <TextInput
            style={styles.bola_secundaria}
            value="26"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="57"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="83"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="90"
            editable={false}
          />
        </View>
        <View style={styles.body}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  container_principal: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  bola_principal: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 100,
    position: "absolute",
    top: 25,
    color: "black",
    textAlign: "center",
    fontSize: 100
  },
  container_secundarias: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  bola_secundaria: {
    backgroundColor: "black",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 50,
    color: "white",
    textAlign: "center",
    fontSize: 50
  },
  body: {
    flex: 2.2,
    height: 100
  }
});

export default Home;
