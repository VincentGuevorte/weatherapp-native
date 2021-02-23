import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CurrentWeather({data}) {
    return (
        <View style={styles.header}>
            <View style={styles.current}>
                <Text style={styles.title}>{new Date(data.dt * 1000).toLocaleString("fr-FR", {weekday:"long", month: 'long', day: 'numeric'})}</Text>
                <Text style={styles.tempMax}>{data.temp.max.toFixed(1)}°C</Text>
                <Text style={styles.tempMin}>{data.temp.min.toFixed(1)}°C</Text>
            </View>
            <View>
                <Image
                    style={styles.weatherLogo}
                    source={{
                    uri: `https://www.openweathermap.org/img/w/${data.weather[0].icon}.png`,
                    }}
                />
                <Text style={styles.description}>{data.weather[0].description}</Text>
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    current: {
        paddingTop: 20,
        paddingLeft: 10,
    },
    description : {
        fontSize: 16,
        color: 'white',
        textAlign:'center',
        textTransform: 'capitalize'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#77B5FE',
        paddingTop: 50,
        paddingBottom: 50,
        width: '100%',
    },
    tempMax: {
        fontSize: 40,
        color: 'white',
        marginLeft: 10
    },
    tempMin: {
        fontSize: 20,
        color: 'white',
        opacity: 0.7,
        marginLeft: 10
    },
    title: {
        fontSize: 25,
        color: 'white',
        textTransform: 'capitalize'
    },
    weatherLogo: {
        width: 90,
        height: 90,
        marginRight: 10,
        paddingLeft: 10
      }
})