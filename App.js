import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default class hw extends Component {
  constructor() {
    super();
    this.state ={ 
      nombre : '',
      identificacion : '',
      salario : ''
    }
  }

  mostrar(){
    alert(this.state.nombre)
  }
  limpiar(){
    this.setState({nombre : ''})
  }
  render(){
    return (
      <View style={{ flex:1 }}>
        <View style={{flex:3, backgroundColor: "cyan"}}>
          <Text>cyan</Text>
          <Image source={{uri: 'https://i.ytimg.com/vi/68ugkg9RePc/hqdefault.jpg'}} style={{width: "80%", height: "70%"}}/>
  
        </View>
        <View style={{flex:3, backgroundColor: "blue"}}>
          <Text>blue</Text>
          <TextInput 
          placeholder="Nombre" 
          style={{backgroundColor: "white", height:30, width: 100}} 
          value={this.state.nombre}
          onChangeText={(nombre) =>  this.setState({nombre})}
          />
          <TextInput 
          placeholder="identificacion" 
          style={{backgroundColor: "white", height:30, width: 100}} 
          value={this.state.identificacion}
          onChangeText={(identificacion) =>  this.setState({identificacion})}
          />
          <TextInput 
          placeholder="salario" 
          style={{backgroundColor: "white", height:30, width: 100}} 
          value={this.state.salario}
          onChangeText={(salario) =>  this.setState({salario})}
          />
          <Button 
          title="Enviar"
          onPress={() => this.mostrar()}
          />
          <Button 
          title="Limpiar"
          onPress={() => this.limpiar()}
          />
          <Image source={require('./assets/ahaha.jpg')} style={{width: "20%", height: "20%"}}/>
          
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
