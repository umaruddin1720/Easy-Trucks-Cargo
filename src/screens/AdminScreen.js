import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import { carTypeData } from "../global/data";

const renderElement = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 5,
      }}
    >
      <Image source={item.data[0].image} style={{ width: 100, height: 70 }} />
      <Image source={item.data[1].image} style={{ width: 100, height: 70 }} />
    </View>
  );
};

const AdminScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeading}>ADMIN PANEL</Text>
      </View>

      <View style={styles.vechicalContainer}>
        <Text style={styles.vechicalName}>Vechical Images</Text>
        <FlatList
          nestedScrollEnabled
          data={carTypeData}
          renderItem={renderElement}
        />
        <Text style={styles.vechicalName}>Vechical Number</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 15,
          }}
        >
          <View>
            <Text>{"1)"} D-3176</Text>
            <Text style={{ marginTop: 15 }}>{"2)"} Bu-269</Text>
          </View>
          <View>
            <Text>{"  3)"} DN-916</Text>
            <Text style={{ marginTop: 15 }}>{"4)"} R-9406</Text>
          </View>

          <View>
            <Text>{"  5)"} SR-2701</Text>
            <Text style={{ marginTop: 15 }}>{"  6)"}LR-8791</Text>
          </View>
        </View>
        <Text style={styles.vechicalName}>Rider Names</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 15,
          }}
        >
          <View>
            <Text>{"1)"} Noor Muhammad</Text>
            <Text style={{ marginTop: 15 }}>{"2)"} Ghulam Server</Text>
          </View>
          <View>
            <Text>{"  3)"} Inam khan</Text>
            <Text style={{ marginTop: 15 }}>{"4)"} Ikram Ullah</Text>
          </View>

          <View>
            <Text>{"  5)"} Shamshad khan</Text>
            <Text style={{ marginTop: 15 }}>{"  6)"} Nadeem Gul</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
  },
  mainHeading: {
    fontSize: 35,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  vechicalContainer: {
    marginTop: 10,
  },
  vechicalName: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "green",
    textDecorationLine: "underline",
  },
});

export default AdminScreen;
