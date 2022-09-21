import { StyleSheet, Text, View, Dimensions } from "react-native";
import RootNavigator from "./src/navigations/RootNavigator";
import {
  OriginContextProvider,
  DestinationContextProvider,
} from "./src/contexts/contexts";

import React from "react";

const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
