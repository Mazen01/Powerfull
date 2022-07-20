import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from "react-native";

import Menu from "../Data/Dietmenu";
import Menu2 from "../Data/Dietmenu2";

export default DietScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Diet Plan</Text>
      <ScrollView>
        <View style={styles.oddplan}>
          <Text style={styles.planheading}>&#x1F375; Breakfast</Text>
          {Menu.Breakfast.map((item, index) => (
            <Text key={index} style={{ color: "#ececec", margin: 3 }}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
        <View style={styles.evenplan}>
          <Text style={styles.planheading}>&#x1F36A; Snack</Text>
          {Menu.Snack.map((item, index) => (
            <Text key={index} style={styles.content}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
        <View style={styles.oddplan}>
          <Text style={styles.planheading}>&#x1F957; Lunch</Text>
          {Menu.Lunch.map((item, index) => (
            <Text key={index} style={styles.content}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
        <View style={styles.evenplan}>
          <Text style={styles.planheading}>&#x1F958; Dinner</Text>
          {Menu.Dinner.map((item, index) => (
            <Text key={index} style={styles.content}>
              &#x2724; {item.item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#515993",
  },
  heading: {
    fontSize: 35,
    marginVertical: 10,
    marginLeft: 15,
    color: "#ececec",
  },
  oddplan: { backgroundColor: "#7b82b6", paddingVertical: 15, paddingLeft: 20 },
  evenplan: { paddingVertical: 15, paddingLeft: 20 },
  planheading: { color: "#fff", fontSize: 17, marginBottom: 10 },
  content: { color: "#ececec", margin: 3 },
});