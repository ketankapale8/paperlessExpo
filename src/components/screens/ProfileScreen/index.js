import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Auth , DataStore} from "aws-amplify"
import { useAuthContext } from "../../../contexts/AuthContext";
import {UserData} from '../../../models/index'

const Profile = () => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [CardNo, setCardNO] = useState("");
  const [Email, setEmail] = useState("");
  const [AadhaarNo, setAadharNo] = useState("");
  const [Mobile, setMobileNo] = useState("");
  const [Alternate_mob , setaltNo] = useState("")
  const [State , setStateInIndia] = useState("")
  const [Country , setCountry] = useState("")

  const {sub , setDbUser} = useAuthContext();
  console.log(sub)


  const onSave = () => {
    // try{
       DataStore.save(  
          new UserData({
            Name , 
            Address,
            CardNo ,
            AadhaarNo ,
            Email,
            Mobile,
            Alternate_mob,
            State,
            Country,
            sub
          })
        );
        // console.log(user)

        // setDbUser(user)

        // }catch(e){
        //   Alert.alert("Error" , e.message)
        // }
    
  };


  // const onSave = () =>{};

  return (
    <View>
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={Name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={Address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />

      <TextInput
        value={State}
        onChangeText={setStateInIndia}
        placeholder="State"
        style={styles.input}
      />
       <TextInput
        value={Country}
        onChangeText={setCountry}
        placeholder="Country"
        style={styles.input}
      />
      <TextInput
        value={CardNo}
        onChangeText={setCardNO}
        placeholder="Card No"
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        value={Email}
        onChangeText={setEmail}
        placeholder="Email Address"
        style={styles.input}
        // keyboardType="numeric"

      />
      <TextInput
        value={AadhaarNo}
        onChangeText={setAadharNo}
        placeholder="Aadhaar Number"
        style={styles.input}
        keyboardType="numeric"

      />
      <TextInput
        value={Mobile}
        onChangeText={setMobileNo}
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="numeric"

      />

     <TextInput
        value={Alternate_mob}
        onChangeText={setaltNo}
        placeholder="Alternate Number"
        style={styles.input}
        keyboardType="numeric"

      />

    </SafeAreaView>
      <Button onPress={onSave} title="Save" />
      <Text onPress={()=> Auth.signOut()} style={{textAlign:'center' , paddingTop:30 , color:'red' }}>SIGN OUT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  buttons:{
    paddingTop:50,
    backgroundColor : 'yellow'
  }
});

export default Profile;
