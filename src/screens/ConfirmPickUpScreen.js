import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
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

  console.log("vehCharges", vehCharge);

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

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image source={vehImg} style={{ width: 100, height: 80 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <View>
          <Text style={{ fontSize: 30 }}>{vehName}</Text>

          <Text>{vehNote}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>{vehRent}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FinalScreen");
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          backgroundColor: "black",
          width: "90%",
          height: 65,
          marginLeft: 15,
          marginTop: 40,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Confirm Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
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
