import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Signup({ navigation }: any) {
  let [firstName, setfirstName] = useState('')
  let [lastName, setlastName] = useState('')
  let [Email, setEmail] = useState('')
  let [Password, setPassword] = useState('')
  let [ConfirmPassword, setConfirmPassword] = useState('')
  const data = {
    firstName, lastName, Email, Password, ConfirmPassword
  }
  const Submit = () => {
    console.log(data);
    navigation.navigate('Login');
  }


  return (
    <ScrollView style={styles.bg}>
    <View>
      <Text style={styles.signup}>Create Account</Text>
      
        <TextInput
         onChangeText={(e) => setfirstName(e)}
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="white"
        />
        <TextInput
        onChangeText={(e) => setlastName(e)}
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="white"
        />
        <TextInput
        onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
        <TextInput
        onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
        <TextInput
         onChangeText={(e) => setConfirmPassword(e)}
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
      
      <TouchableOpacity onPress={Submit} style={styles.btn}>
        <Text
         style={styles.btnText}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.txt}>
        Already have an Account?
        <Text onPress={() => { navigation.navigate('Login') }} style={{ color: 'green', fontWeight: 'bold' }}> Login</Text>
      </Text>
    </View>
    </ScrollView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 10,
    backgroundColor: "#000203",
  },
  signup: {
    textAlign: "center",
    marginTop: "32%",
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    paddingVertical: 10,
    marginBottom: 10,
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "95%",
    padding: 12,
    marginLeft: 10,
    fontSize: 16,
    color: "white",
    marginBottom: 13,
  },
  btn: {
    backgroundColor: "green",
    borderRadius: 20,
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  txt: {
    marginTop: 8,
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    fontStyle: "normal",
    textAlign: "center",
  },
});
