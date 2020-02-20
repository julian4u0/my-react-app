import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1  }}>
      <View style={{flex:1, backgroundColor: "cyan"}}>
        <Text>cyan</Text>
        <Image></Image>

      </View>
      <View style={{flex:2, backgroundColor: "blue"}}>
        <Text>blue</Text>
        
      </View>
      <View style={{flex:2, backgroundColor: "powderblue"}}>
        <Text>powderblue</Text>
      </View>
      <View style={{flex:2, backgroundColor: "grey"}}>
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
