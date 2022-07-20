import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import ListItem from '../screens/ListItem';

const ChallengesScreen = ({ data, navigation }) => (
  <View>
    <Text style={styles.listTitle}>Challenges</Text>
    
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={itemData => {
        return (
          <TouchableOpacity>
          <ListItem
            name={itemData.item.name}
            days={itemData.item.days}
            workouts={itemData.item.workouts}
            level={itemData.item.level}
            uri={itemData.item.url}
          /></TouchableOpacity>
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  listTitle: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default ChallengesScreen;