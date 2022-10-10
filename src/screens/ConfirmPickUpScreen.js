import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, parameters } from "../global/styles";
import React, { useState, useContext, useEffect } from "react";
import { Icon } from "react-native-elements";
import MapComponent from "../components/MapComponent";
import { OriginContext, DestinationContext } from "../contexts/contexts";

export default function ConfirmPickUpScreen({ navigation, route }) {
  const vehName = route.params.vehName;
  const vehImg = route.params.vehImg;
  const vehRent = route.params.vehRent;
  const vehNote = route.params.vehnote;
  const vehCharge = route.params.vehCharge;
  const vehNo = route.params.vehno;
  const riderNo = route.params.riderno;
  const [stopcost, setStopCost] = useState(vehCharge);

  const { origin, dispatchOrigin } = useContext(OriginContext);
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });
  const { destination, dispatchDestination } = useContext(DestinationContext);
  const [userDestination, setUserDestination] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });

  useEffect(() => {
    setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [origin, destination]);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.mapView}>
        <MapComponent
          userOrigin={userOrigin}
          userDestination={userDestination}
        />
      </View>

      <View
        style={{
          marginTop: 15,
          justifyContent: "space-around",
        }}
        flexDirection="row"
      >
        <View>
          <Image source={vehImg} style={{ width: 150, height: 100 }} />
        </View>
        <View
          style={{
            width: 120,

            backgroundColor: "skyblue",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "blue",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Vehicle No
          </Text>
          <Text style={{ fontSize: 10, color: "red" }}>{vehNo}</Text>
          <Text style={{ fontSize: 15, color: "blue", fontWeight: "bold" }}>
            Rider No
          </Text>
          <Text style={{ fontSize: 10, color: "red" }}>{riderNo}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 30, color: "blue" }}>{vehName}</Text>

          <Text style={{ color: "green" }}>{vehNote}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30, color: "red" }}>{stopcost}</Text>
        </View>
      </View>
      <View flexDirection="row" justifyContent="space-around">
        <TouchableOpacity
          onPress={() => {
            setStopCost((prevstate) => prevstate + 200);
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "skyblue",
            width: "40%",
            height: 60,

            marginTop: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 20 }}>Add Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (stopcost === vehCharge) {
              return;
            } else {
              setStopCost((prevstate) => prevstate - 200);
            }
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "skyblue",
            width: "40%",
            height: 60,

            marginTop: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 20 }}>Remove Stop</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FinalScreen");
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          backgroundColor: "skyblue",
          width: "90%",
          height: 60,
          marginLeft: 15,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
          Confirm Pickup
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
    backgroundColor: "white",
  },
  view1: {
    position: "absolute",
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },
  mapView: {
    height: "40%",
  },
  view2: {
    marginTop: 10,
    alignItems: "center",
  },
});
