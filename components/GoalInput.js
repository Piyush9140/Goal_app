import { Button, Modal, StyleSheet, Text, TextInput, View ,Image } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [Iptext, setText] = useState("");
  function goalInputHandler(Enteredtext) {
    setText(Enteredtext);
  }
  function goalButtonHandler() {
    props.OnAddGoal(Iptext);
    setText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image}source={require('../assets/Images/goal.png')}></Image>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Your goals here"
          onChangeText={goalInputHandler}
          value={Iptext}
        ></TextInput>
        <View style={styles.buttonStyle}>
            <View style={styles.button}>
            <Button title="Add Goals " onPress={goalButtonHandler} color={'#a065ec'}></Button>
            </View>
            <View style={styles.button} >
            <Button title="cancel" onPress={props.cancel} color={'#f31299'}></Button>
            </View>
        </View>
        
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    padding:16,
    backgroundColor:'#311b6b',
  },
  image:{
   height:100,
   width:100,
},
  inputText: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    width: "100%",
    padding: 16,
    color:'#120438',
    borderRadius:6,
  },
  buttonStyle:{
    marginTop:16,
    flexDirection:'row',
  },
  button:{
    width:101,
    marginHorizontal:8,
  }
});
