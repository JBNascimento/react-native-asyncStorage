

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
          <Text>Click me to dusplay data</Text>
        </TouchableOpacity>
      </View>
    );
  }
  saveData(){
    let user = 'John Doe';
    AsyncStorage.setItem('user', user);
  }

  displayData = async () => {
    try {
       let user = await AsyncStorage.getItem('user');
       alert(user);

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


