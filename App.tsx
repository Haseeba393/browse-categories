import React from "react";
import { BrowseCategories } from "./src/screens";
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <BrowseCategories />
    </SafeAreaView>
  );
};

export default App;
