import React from 'react';
import {StatusBar, Text, View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Movie = ({title, year, icon_name, poster}) => {
  return (
    <View>
        <Image source={poster} style={{width: 400, height:500}} />
        <Icon name={icon_name} size={18}> <Text>{title} {year}</Text></Icon>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView>
        <StatusBar hidden={true}/>
      <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require('./img/doctor-sleep.jpg')}/>
      <Movie title="Alien Romulus" year="2024" icon_name="baby" poster={require('./img/midway.jpg')}/>
    </ScrollView>
  );
}
export default App;
