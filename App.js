import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Read from './screens/ReadStory';
import Write from './screens/WriteStory';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


export default function App() {
  return(
    <AppContainer/>
  )
}

var TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:Write},
  ReadStory:{screen:Read}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      if(navigation.state.routeName==='WriteStory'){
        return(
          <Image style={{width:40, height:40}} source={require ('./assets/write.png') }/>
        )
      }

      else if(navigation.state.routeName==='ReadStory'){
       return(
         <Image style={{width:40, height:40}} source={require ('./assets/read.png') }/>
       )
     }

    }
  })
})

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
