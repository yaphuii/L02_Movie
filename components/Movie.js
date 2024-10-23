import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Movie = ({title, year, icon_name, poster}) => {
    return (
        <View>
            <Image source={poster} style={{width: 400, height:500}} />
            <Icon name={icon_name} size={18}> <Text>{title} {year}</Text></Icon>
        </View>
    );
}

export default Movie;
