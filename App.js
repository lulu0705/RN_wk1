import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./Screens/components/Header";
import AlbumList from "./Screens/components/AlbumList";
import ContentMain from "./Screens/components/ContentMain";
import AppBar from "./Screens/components/AppBar";
import ButtomTabs from "./Screens/components/ButtomTabs";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <ContentMain/>
      <ButtomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default App;
