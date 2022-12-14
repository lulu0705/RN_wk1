import React from "react";
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity } from "react-native";

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <ImageBackground  style={styles.center} source={require('../image/header.png')} >

        <TouchableOpacity style={styles.leftButton} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.iconStyle} source={require('../image/left_nav.png')} />
        </TouchableOpacity>

        <Text style={styles.textStyle}>家</Text>

        <TouchableOpacity style={styles.rightButton} onPress={()=>{alert("you clicked me")}}>
        <Image style={styles.iconStyle} source={require('../image/right_nav.png')} />
        </TouchableOpacity>

        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    paddingTop: 10,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 90,
  },

  leftButton: {
    position: 'absolute',
    paddingTop: 10,
    left: (windowWidth/24),
  },

  rightButton: {
    position: 'absolute',
    paddingTop: 10,
    right: (windowWidth/24),
  },

  iconStyle: {
    width: 25,
    height: 25,
  },

});

export default Header;
