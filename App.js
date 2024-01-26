import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible,setModalVisible]=useState(false);
  const [GoalDis, setGoal] = useState([]);
  function setModal(){
    setModalVisible(true);

  }
  function closeModal(){
    setModalVisible(false);

  }

  function goalButtonHandler(Iptext) {
    setGoal((CourseGoal) => [
      ...CourseGoal,
      { text: Iptext, id: Math.random().toString() },
    ]);
    closeModal();
  }
  function DeleteGoal(id) {
    setGoal((CourseGoal) => {
      return CourseGoal.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.AppContainer}>
    <Button title="Add New Goals" color={'#a065ec'}onPress={setModal} ></Button>
     <GoalInput  visible={modalIsVisible} OnAddGoal={goalButtonHandler} cancel={closeModal}/>
      <View style={styles.GoalContainer}>
        {/* <ScrollView>
        {GoalDis.map((goal) => (
          <Text style={styles.goalItem} key={goal}>{goal}</Text>
        ))}
        </ScrollView> */}
        <FlatList
          data={GoalDis}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                OnDelete={DeleteGoal}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#311b6b'
  },

  GoalContainer: {
    flex: 5,
  },
});
