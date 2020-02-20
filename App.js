import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection:"row"}}>
      <View style={{flex:1, backgroundColor: "cyan"}}>
        <Text>Hola</Text>

      </View>
      <View style={{flex:2, backgroundColor: "blue"}}>
        <Text>Hola</Text>
        
      </View>
      <View style={{flex:4, backgroundColor: "powderblue"}}>
        <Text>Hola</Text>
      </View>
      <View style={{flex:8, backgroundColor: "grey"}}>
        <Text>Hola</Text>
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
