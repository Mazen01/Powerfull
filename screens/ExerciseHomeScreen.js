import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constants';

let exercises = [

  {
    title: 'Fitness Exercises',
    image: require('../assets/Exercise2.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of       exercises',
    duration: '10-20 MIN Course',
  },
  
];

let yogas = [
   
  {
    title: 'Yoga',
    image: require('../assets/Exercise4.png'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
];


let meditations = [
  {
    title: 'Meditation',
    image: require('../assets/Exercise3.png'),
    subTitle:
      'Live happier and healthier by learning the practices of              meditation and mindfulness',
    duration: '3-10 MIN Course',
  },
];


let diets = [
  {
    title: 'Diet Plans',
    image: require('../assets/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning healthy                             diet routines',
    duration: '5-20 MIN Course',
  },
];

const ExerciseHomeScreen = ({navigation}) => {

  
  
  const ExerciseItem = ({exercise}) => {
    return (
      
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseDetailsScreen', {exercise: exercise})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 20,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={exercise.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise.title}
        </Text>
      </TouchableOpacity>
      
      
    );
  };

  const YogaItem = ({yoga}) => {
    return (
      
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseDetailsScreen2', {yoga: yoga})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={yoga.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {yoga.title}
        </Text>
      </TouchableOpacity>
      
      
    );
  };

  const DietItem = ({diet}) => {
    return (
      
      <TouchableOpacity flex
        onPress={() =>
          navigation.navigate('DietScreen', {diet: diet})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
                width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
          
        }}>
        <Image
          source={diet.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {diet.title}
        </Text>
      </TouchableOpacity>
      
      
    );
  };
  const MeditationItem = ({meditation}) => {
    return (
      
      <TouchableOpacity flex
        onPress={() =>
          navigation.navigate('ExerciseDetailsScreen3', {meditation: meditation})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
          
        }}>
        <Image
          source={meditation.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {meditation.title}
        </Text>
      </TouchableOpacity>
      
      
    );
  };


    
  

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.accent + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.45 * SIZES.height,
          padding: 30,
          backgroundColor: COLORS.accent + '20',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/BgOrange.png')}
          style={{
            position: 'absolute',
            top: 350,
            left: -5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              width: 0,
              height: 35,
              backgroundColor: COLORS.accent + '45',
              marginRight: 0,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginBottom: 8,
                marginLeft: -5,
              }}></View>
            <View
              style={{
                height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginLeft: 5,
              }}></View>
          </View>
        </View>

        <Text style={{fontSize: 25, lineHeight: 40}}>
          Good Morning Champ
        </Text>

        
      
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.accent + '55',
            position: 'absolute',
            right: -30,
            bottom: 50,
          }}></View>
      </View>

      <FlatList
        data={exercises}
        style={{
          paddingHorizontal: 20,
         margin: -250,
         right: 80,
         bottom: -130,
          
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems:'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem exercise={item} />}
      />

<FlatList
        data={yogas}
        style={{
          paddingHorizontal: 20,
          left: 85,
          bottom: -178,

          
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <YogaItem yoga={item} />}
      />
      
      <FlatList
        data={diets}
        style={{
          paddingHorizontal: 20,
          left: 85,
          bottom: -190
          
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <DietItem diet={item} />}
      />

<FlatList
        data={meditations}
        style={{
          paddingHorizontal: 20,
          right: 80,
          bottom:22
         
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <MeditationItem meditation={item} />}
      />
      
      

      
    </SafeAreaView>

    
  );
  
};





export default ExerciseHomeScreen;