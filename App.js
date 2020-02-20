import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1  }}>
      <View style={{flex:3, backgroundColor: "cyan"}}>
        <Text>cyan</Text>
        <Image source={{uri: 'https://i.ytimg.com/vi/68ugkg9RePc/hqdefault.jpg'}} style={{width: "80%", height: "70%"}}/>

      </View>
      <View style={{flex:3, backgroundColor: "blue"}}>
        <Text>blue</Text>
        <Image source={require('./assets/ahaha.jpg')} style={{width: "80%", height: "70%"}}/>
        
      </View>
      <View style={{flex:1, backgroundColor: "powderblue"}}>
        <Text>powderblue</Text>
      </View>
      <View style={{flex:1, backgroundColor: "grey"}}>
        <Text>grey</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
