import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { mapStyle } from "../global/mapStyle";
import { Icon } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { colors, parameters } from "../global/styles";
import MapViewDirections from "react-native-maps-directions";
export default class MapComponent extends Component {
  constructor() {
    super();
    this._map = React.createRef(35);
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (this.props.userDestination.latitude !== null) {
        this._map.current.fitToCoordinates(
          [this.props.userOrigin, this.props.userDestination],
          {
            edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
            animated: true,
          }
        );
      }
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          ref={this._map}
          resizeMode="cover"
        >
          {this.props.userOrigin.latitude != null && (
            <MapView.Marker
              coordinate={this.props.userOrigin}
              anchor={{ x: 0.5, y: 0.5 }}
              colors="red"
            >
              <Image
                source={require("../../assets/location.png")}
                style={styles.markerOrigin2}
                resizeMode="cover"
              />
            </MapView.Marker>
          )}
          {this.props.userDestination.latitude != null && (
            <MapView.Marker
              coordinate={this.props.userDestination}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../assets/location.png")}
                style={styles.markerOrigin2}
                resizeMode="cover"
              />
            </MapView.Marker>
          )}

          {this.props.userDestination.latitude !== null && (
            <MapViewDirections
              origin={this.props.userOrigin}
              destination={this.props.userDestination}
              apikey="AIzaSyAFIdaoOBHN_fxtTUEDSsAik_qy20p6ucc"
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={true}
            />
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: { height: "100%", width: "100%" },

  markerWrapOrigin: {
    width: 40,
    height: 20,
  },
  markerOrigin: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },

  destination: {
    width: 20,
    height: 20,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },

  view1: {
    width: 7,
    height: 7,
    backgroundColor: colors.white,
  },
  markerDestination: {
    width: 16,
    height: 20,
  },

  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },

  car: {
    paddingTop: 0,
    width: 40,
    height: 20,
  },

  view2: {
    position: "absolute",
    top: 10,
    right: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 180,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },

  view4: {
    position: "absolute",
    top: 50,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },
  view7: {
    height: 50,
    width: 40,

    marginRight: 20,
  },

  location: {
    width: 20,
    height: 20,
    borderRadius: 9,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },

  view9: { width: 6, height: 6, borderRadius: 4, backgroundColor: "white" },
});
