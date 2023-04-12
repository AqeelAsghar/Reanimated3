import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {dummyData} from '../constants';

const CityItem = ({city, navigation}) => (
  <TouchableOpacity
    style={styles.cityItem}
    onPress={() => navigation.navigate('Screen2', {item: city})}>
    <Animated.Image
      sharedTransitionTag={`${city.id}`}
      source={{uri: city.image}}
      style={styles.cityImage}
    />
    <Text style={styles.cityName}>{city.name}</Text>
  </TouchableOpacity>
);

const App = ({navigation}) => {
  return (
    <Animated.FlatList
      data={dummyData.cities}
      ListHeaderComponent={
        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            React Native Reanimation 3
          </Text>
        </View>
      }
      contentContainerStyle={{
        marginTop: 30,
        paddingBottom: 30,
        backgroundColor: '#e6e6e6',
      }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({item}) => <CityItem city={item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  cityItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    margin: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cityImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  cityName: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default App;
