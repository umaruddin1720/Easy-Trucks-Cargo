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
  const [vehNo, setVehNo] = useState("");
  const [riderNo, setRiderNo] = useState("");
  const [charges, setCharges] = useState();

  const [finalPrice, setFinalPrice] = useState(0);
  console.log("finalPrice", finalPrice);

  console.log("selectCAr", carTypeData);

  const fetchApiCall = async () => {
    fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userOrigin.address}&destinations=${userDestination.address}&key=${GOOGLE_MAPS_APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("dataa", data);
        const response = data?.rows[0].elements[0].distance?.text;
        const time = data?.rows[0].elements[0].duration?.text;
        let price = data?.rows[0].elements[0].duration?.value;
        console.log("RESPONSE", price);

        setFinalPrice(price);

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
          setVehNo(item.item.vehicleNo);
          setRiderNo(item.item.riderNo);
          setCarImg(item.item.image);
          setCarRent(item.item.price);
          setCarNote(item.item.note);
          setCharges(Math.floor(item.item.price * parseInt(finalPrice)));
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 5,
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
          alignItems: "center",
          marginHorizontal: 5,
        }}
      >
        <View>
          <Image source={item.item.image} style={{ width: 80, height: 60 }} />
        </View>

        <View style={{ marginRight: 40 }}>
          <Text style={{ color: "blue", fontSize: 20 }}>{item.item.name}</Text>
          <Text
            style={{
              color: "purple",
              fontWeight: "bold",
            }}
          >
            Charges {"-->"}
          </Text>
          <Text style={{ color: "green", fontSize: 12 }}>
            {item.item.weight}
          </Text>
        </View>
        <View
          style={{
            marginRight: 10,
          }}
        >
          <Text style={{ color: "purple", fontSize: 20, fontWeight: "bold" }}>
            {Math.floor(item.item.price * parseInt(finalPrice))}
          </Text>
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
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                fontSize: 25,
                color: "brown",
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          )}
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
              vehno: vehNo,
              riderno: riderNo,
              vehCharge: charges,
            });
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "skyblue",
            width: "70%",
            height: 55,
            marginLeft: 15,
            marginBottom: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            {selectCar.length === 0 ? "Select Vehicle" : selectCar}
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
