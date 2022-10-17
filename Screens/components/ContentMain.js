import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from "react-native";

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windoheight = Dimensions.get('window').height;
import * as Progress from 'react-native-progress';

const ContentMain = () => {
  return (
    <ScrollView>
    <View style={styles.cardContainerStyle}>
    
    <View style={[styles.thumbnailContainerStyle ]}>
    <View style={styles.iconContentStyle}>
    <Image  source={require('../image/life_icon.png')} />
    <Image  source={require('../image/level_icon.png')} />
      </View>
      <View style={styles.headerContentStyle}>
      <Progress.Bar style={styles.BarStyle} progress={0.4} width={90} height={10} color={'#FF9090'} />
      <Progress.Bar style={styles.BarStyle} progress={0.6} width={90} height={10} color={'#E1BF68'} />
      </View>
    </View>

    <View style={styles.cardSectionStyle}>
    <ImageBackground  style={styles.windowImage} source={require('../image/window.png')} >
      </ImageBackground>
    
</View>

    <View style={styles.cardStageStyle}>
    <ImageBackground  style={styles.stageImage} source={require('../image/stageone.png')} >
      </ImageBackground>
    </View>
    
    <View style={styles.cardplantStyle}>
    <Image style={styles.plantImage} source={require('../image/plant.png')} />
    </View>
  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingTop:15,
  },

  iconContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingTop: 10,
  },


  BarStyle: {
    borderWidth: 0,
    backgroundColor:"#ECECEC",
  },










  cardContainerStyle: {
    marginRight: 5,
    height:600,
  },
  cardSectionStyle: {
    height:200,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',    
    marginLeft: 120,
    marginTop:80,
  },
  windowImage: {
    height: "100%",
    width: "100%",
    paddingStart: 30,
  },

  stageImage: {
    height: "100%",
    width: "100%",
  },

  cardStageStyle: {
    height:170,
    width:windowWidth,
    justifyContent: 'center',
    alignItems: 'center',    
    marginTop:50,
  },

  cardplantStyle: {
    height:300,
    width:windowWidth,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: (windoheight/4),
    position: 'absolute',
    paddingLeft:0,
  },

  plantImage: {
    height: 180,
    width: 180,  
  }
});

export default ContentMain;
