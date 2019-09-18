

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
}from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.saveData}>
          <Text>Click me to save data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
          <Text>Click me to display data</Text>
        </TouchableOpacity>
      </View>
    );
  }
  saveData(){
    //let user = 'John Doe';

    let obj ={
      name: 'John Doe',
      email: 'john@doe.com',
      city: 'Rio de Janeiro',    
    }
   // AsyncStorage.setItem('user', user);
   AsyncStorage.setItem('user', JSON.stringify(obj));
  }

  displayData = async () => {
    try {
       let user = await AsyncStorage.getItem('user');
       let parsed = JSON.parse(user);
       //alert(user);
       alert(parsed.email);

    } catch (error) {
      alert(error);
    }
  }
  
}

   

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
});


