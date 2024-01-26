import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "black" }}
      onPress={props.OnDelete.bind(this, props.id)}
    >
      <Text style={styles.goalItemtext}>{props.text}</Text>
    </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  goalItemtext:{
    padding: 8,
  } 
});
