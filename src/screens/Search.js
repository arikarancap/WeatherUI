import React, { useState } from 'react';
import { Appbar, Title, TextInput, Button, Card } from 'react-native-paper';
import { View, Text, FlatList } from 'react-native';
import Header from './Header';
const Search = () => {
    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);
    const KEY = 'befeefb415b002da9c284a7e76c46c1e'
    const fetchCities = (text) => {
        setCity(text)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${KEY}`)
            .then(item => item.json())
            .then(CityData => {
                console.log(CityData.name);
                console.log(CityData)
                setCities(CityData);
            })
    }
    const search = () => {
        console.log('Map Started..')
        cities.map((city) => {
            console.log("Names...: ", city.name);
        })
    }
    return (
        <View>
            {/* <Header /> */}
            <Text style={{}} >Search Screen</Text>
            <TextInput
                label="city Name"
                theme={{ colors: { primary: '#00aaff' } }}
                value={city}
                onChangeText={(text) => fetchCities(text)}
                mode="outlined"
                style={{ margin: 20 }}
            />
            <Button
                icon="content-save"
                mode="contained"
                theme={{ colors: { primary: '#00aaff' } }}
                style={{ margin: 20 }}
                onPress={search}
            >
                Press Me
            </Button>
            <Text>{cities?.name} {cities?.visibility} {cities?.wind?.speed}</Text>
            <FlatList
                data={cities}
                renderItem={({ item }) => {
                    return (
                        <Card
                            style={{ margin: 2, padding: 12 }}
                        >
                            <Text>{item.name}</Text>
                        </Card>
                    )
                }}
                keyExtractor={item => item.name}
            />

        </View>
    );
};

export default Search;