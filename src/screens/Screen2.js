import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const Screen2 = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag={`${item.id}`}
        source={{uri: item.image}}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
  descriptionContainer: {
    width: '80%',
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
});

export default Screen2;
