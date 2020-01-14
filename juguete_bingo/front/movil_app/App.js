// import React from 'react';
// import Navigator from './routes';

// export default function App() {
//   return (
//     <Navigator/>
//   );
// }

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

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

        <View style={styles.body}>
          <View style={styles.b_style}>
            <Text>B</Text>
            {/* <TextInput value="69" editable={false}/>
            <TextInput value="69" editable={false}/>
            <TextInput value="69" editable={false}/>
            <TextInput value="69" editable={false}/>
            <TextInput value="69" editable={false}/> */}
          </View>
          <View style={styles.b_style}>
            <Text>I</Text>
          </View>
          {/* <View style={styles.i_style}>
            <Text>I</Text>
          </View>          
          <View style={styles.n_style}>
            <Text>N</Text>
          </View>          
          <View style={styles.g_style}>
            <Text>G</Text>
          </View>          
          <View style={styles.o_style}>
            <Text>O</Text>
          </View> */}
        </View>
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
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: "center"
  },
  b_style: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  // i_style: {
  //   backgroundColor: 'yellow',
  //   height: 100,
  //   width: 100,
  // },
  // n_style: {
  //   backgroundColor: 'green',
  //   height: 100,
  //   width: 100,
  // },
  // g_style: {
  //   backgroundColor: 'blue',
  //   height: 100,
  //   width: 100,
  // },
  // o_style: {
  //   backgroundColor: 'orange',
  //   height: 100,
  //   width: 100,
  // },
});

export default Home;
