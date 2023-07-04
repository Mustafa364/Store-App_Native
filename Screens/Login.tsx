import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Login({ navigation }: any) {
  let [Email, setEmail] = useState('')
  let [Password, setPassword] = useState('')
  const data = {
    Email, Password
  }
  const Submit = () => {
    console.log(data);
    navigation.navigate('Products');
  }
  return (
      <ScrollView style={styles.bg}>
    <View>
      <Text style={styles.header}>Login</Text>

        <TextInput
        onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
        />
        <TextInput
        onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
        <TouchableOpacity  onPress={Submit} style={styles.btn}>
          <Text
           style={[styles.button, { fontWeight: 'bold' }]}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>
          Don't Have an Account?
          <Text onPress={() => { navigation.navigate('Signup') }} style={{ color: 'green', fontWeight: 'bold', paddingLeft: 10 }}>Signup</Text>
        </Text>
    </View>
      </ScrollView>
  );
}

export default Login;

const styles = StyleSheet.create({
  bg: {
    padding: 11,
    backgroundColor: '#000203',
    flex: 1,
  },
  header: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
    marginTop: '30%',
  },
  input: {
    borderColor: 'white',
    color: 'white',
    borderRadius: 6,
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '500',
  },
  button: {
    textAlign: 'center',
    marginTop: 10,
    color: 'whitesmoke',
    fontSize: 18,
    marginBottom: 10,
    fontStyle: 'normal',
  },
  btn: {
    backgroundColor: 'green',
    borderRadius: 20,
  },
  txt: {
    color: 'white',
    padding: 15,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    fontStyle: 'normal',
  },
});
