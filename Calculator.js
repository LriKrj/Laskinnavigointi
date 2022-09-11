import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';



export default function Calculate({navigation}) {
 
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
   
    const addPressed = () => {
        const operation= (number1 + " + " + number2 + " = " + (parseInt(number1) + parseInt(number2)));
        const adding= [...data,{key:operation}];
        setData(adding)
        setText(parseInt(number1) + parseInt(number2)); 
        setNumber1("")
        setNumber2("")
    
      };
      const minusPressed = () => {
        const operation= (number1 + " - " + number2 + " = " + (parseInt(number1) - parseInt(number2)));
        const minus= [...data,{key:operation}];
        setData(minus)
        setText(parseInt(number1) - parseInt(number2)); 
        setNumber1("")
        setNumber2("")
      };
      
      
   
  
   
   
   
    return (
      <View style={styles.container}>
      <Text> Result: {text}</Text> 
      
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1}/>
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2}/>
      <View style={styles.buttoncontainer}>
          <View style={styles.button}>
             <Button onPress={addPressed} title="+" />
          </View>
          <View style={styles.button}>
            <Button onPress={minusPressed} title="-" />
          </View>
          <Button style={styles.button}
            title="History"
            onPress={() => navigation.navigate("History", { data: data} )}
          
          />
      </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      
    },
   
    button: {
      
      justifyContent: 'space-between',
      borderWidth: 1,
      margin:10,
      fontSize:30,
      width: 40,
      backgroundColor: "blue",
      
     
      },
     
      buttoncontainer: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        
        },
   
    input : {
      width:'50%'  , 
      borderColor: 'gray', 
      borderWidth: 1,
      padding: 10,
      margin:5,
    }
  });