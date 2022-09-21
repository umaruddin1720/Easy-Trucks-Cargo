import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SectionList,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors, parameters } from "../global/styles";
import React, { useState, useContext, useEffect } from "react";
import { Icon } from "react-native-elements";
import MapComponent from "../components/MapComponent";
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { carTypeData } from "../global/data";

export default function ConfirmScreen({ navigation }) {
  const GOOGLE_MAPS_APIKEY = "AIzaSyCj8YZ8GNIPGabDp9JJwFY0sFIIpHcRQB8";

  const { origin, dispatchOrigin } = useContext(OriginContext);
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
    address: origin.address,
  });
  const { destination, dispatchDestination } = useContext(DestinationContext);
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
    address: destination.address,
  });
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [selectCar, setSelectCar] = useState("");
  const [carImg, setCarImg] = useState("");
  const [carRent, setCarRent] = useState("");
  const [carNote, setCarNote] = useState("");
  const [charges, setCharges] = useState();
  var price;

  console.log("selectCAr", selectCar);

  const fetchApiCall = async () => {
    fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userOrigin.address}&destinations=${userDestination.address}&key=${GOOGLE_MAPS_APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("dataa", data);
        const response = data?.rows[0].elements[0].distance?.text;
        const time = data?.rows[0].elements[0].duration?.text;
        price = data?.rows[0].elements[0].duration?.value;
        console.log("RESPONSE", time);
        console.log("RESPONSE", response);
        setDistance(response);
        setTime(time);
        return;
      });
  };

  console.log("distane of google", distance);
  const renderElement = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectCar(item.item.name);
          setCarImg(item.item.image);
          setCarRent(item.item.price);
          setCarNote(item.item.note);
          setCharges(parseInt(item.item.price) * parseInt(price));
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: colors.grey10,
          alignItems: "center",
          marginHorizontal: 5,
        }}
      >
        <View>
          <Image source={item.item.image} style={{ width: 80, height: 60 }} />
        </View>

        <View style={{ marginRight: 60 }}>
          <Text>{item.item.name}</Text>
          {/* <Text>{item.item.note}</Text> */}
          <Text>{item.item.weight}</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Text>{item.item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
    fetchApiCall();
  }, []);

  console.log("address of origin", userOrigin.address);
  console.log("userDistanition", userDestination.address);

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
      <View style={styles.view2}>
        <Text style={{ color: "red" }}> DISTANCE : {distance}</Text>
        <Text style={{ color: "red" }}>TIME : {time}</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <SectionList
          sections={carTypeData}
          keyExtractor={(item) => item.key}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
          renderItem={renderElement}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ConfirmPickUpScreen", {
              vehImg: carImg,
              vehName: selectCar,
              vehRent: carRent,
              vehnote: carNote,
              vehCharge: charges,
            });
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "black",
            width: "70%",
            height: 55,
            marginLeft: 15,
            marginBottom: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            {selectCar.length == 0 ? "Select Vehicle  " : selectCar}
          </Text>
        </TouchableOpacity>
        <Image
          source={carImg}
          style={{ width: 80, height: 60, marginLeft: 5 }}
        />
      </View>
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
    backgroundColor: colors.grey10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
  },
  view3: {
    marginTop: 20,
    marginLeft: 10,
  },
  text3: {
    fontSize: 20,
  },
  button: {
    width: 300,
    height: 300,
  },
  image1: {
    height: 30,
    width: 30,
  },
});
