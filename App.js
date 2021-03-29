import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView,
  StyleSheet, 
} from 'react-native';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import ForecastWeather from './components/ForecastWeather';
import CurrentWeather from './components/CurrentWeather';


export default function App() {
  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/onecall?lat=50.633333&lon=3.066667&lang=fr&exclude=minutely,hourly,alerts&units=metric&appid=0dca169c24a65db9c76f6688bbca8884')
    .then(res =>{
      setData(res.data);
    })
  }, [])

  const [data, setData] = useState([]);

  if(data.daily == null) {
    return(<AppLoading/>) 
  }
  else 
  {
    return (
      <SafeAreaView style={styles.container}>
        <CurrentWeather data={data.daily[0]}/>
        <ForecastWeather data={data.daily}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});