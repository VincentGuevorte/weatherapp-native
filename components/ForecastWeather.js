import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function ForecastWeather({data}) {
  return (
    <ScrollView  style={styles.listContainer}>  
      {data.slice(1,7).map(item => {
        return (
          <View key={uuidv4()} style={styles.forecast}>
            <Image
              style={styles.weatherLogo}
              source={{
              uri: `https://www.openweathermap.org/img/w/${item.weather[0].icon}.png`,
              }}
            />
            <View style={styles.weatherInfosContainer}>
              <Text style={styles.weatherInfosContent}>{new Date(item.dt * 1000).toLocaleString("fr-FR", {weekday:"long", month: 'long', day: 'numeric'})}</Text>
              <Text  style={{flex:1, textTransform: 'capitalize'}}>{item.weather[0].description}</Text>
            </View>
            <View style={styles.weatherTemp}>
              <Text style={{fontSize: 20}}>
                {item.temp.max.toFixed(1)}°C
              </Text>
              <Text>
                {item.temp.min.toFixed(1)}°C
              </Text>  
            </View>    
          </View> 
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  forecast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(128, 128, 128, 0.5)',
},
  listContainer: {
    flex:1,
    width: '100%',
  },
  weatherInfosContainer: {
    flex:3, 
    marginLeft: 20,
    flexDirection:'column',
  },
  weatherInfosContent: {
    flex:1, 
    fontSize: 20
  },
  weatherLogo: {
    width: 60,
    height: 60,
    padding: 10,
    marginLeft: 10
  },
  weatherTemp: {
    flex: 1, 
    textAlign:'right', 
    flexDirection: 'column', 
    marginRight: 20
  }
})