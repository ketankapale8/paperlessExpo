import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch , useSelector} from "react-redux";
import {setLogout} from '../../../redux/features/authSlice'
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../Molecules/colors";
import Button from "../../Molecules/Button";
import axios from 'react-native-axios'

const Profile = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  // const [CardNo, setCardNO] = useState("");
  const [email, setEmail] = useState("");
  const [aadhaar, setAadharNo] = useState("");
  const [mob, setMobileNo] = useState("");
  const [alt_mob , setaltNo] = useState("");
  const [state , setStateInIndia] = useState("");
  const [country , setCountry] = useState("");

  const dispatch = useDispatch()
  const navigation = useNavigation();


  const handleLogout = () =>{
    dispatch(setLogout())
    navigation.navigate('SignInScreen')

    
  }

  useEffect(()=>{
    updateUser()

  },[])

  const {user} = useSelector((state) => ({...state.auth}))
  let id = user?.result?._id

  const updateUser = () =>{
    const url ="https://paperlessapi7.herokuapp.com/users/update"
    axios.put(`${url}/${id}`, {
      name,
      email,
      address,
      aadhaar,
      mob,
      alt_mob,
      state,
      country
    })
      
  }
  // console.log(user)
  // const {sub , setDbUser} = useAuthContext();
  // console.log(sub)


  // const onSave = () => { 
    // try{
      //  DataStore.save(  
      //     new UserData({
      //       Name , 
      //       Address,
      //       CardNo ,
      //       AadhaarNo ,
      //       Email,
      //       Mobile,
      //       Alternate_mob,
      //       State,
      //       Country,
      //       sub
      //     })
      //   );
        // console.log(user)

        // setDbUser(user)

        // }catch(e){
        //   Alert.alert("Error" , e.message)
        // }
    
  // };



  return (
    <View>
    <SafeAreaView >
      {/* <ScrollView > */}
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />

      <TextInput
        value={state}
        onChangeText={setStateInIndia}
        placeholder="State"
        style={styles.input}
      />
       <TextInput
        value={country}
        onChangeText={setCountry}
        placeholder="Country"
        style={styles.input}
      />
      {/* <TextInput
        value={CardNo}
        onChangeText={setCardNO}
        placeholder="Card No"
        style={styles.input}
        keyboardType="numeric"
      /> */}

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        style={styles.input}
        // keyboardType="numeric"

      />
      <TextInput
        value={aadhaar}
        onChangeText={setAadharNo}
        placeholder="Aadhaar Number"
        style={styles.input}
        keyboardType="numeric"

      />
      <TextInput
        value={mob}
        onChangeText={setMobileNo}
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="numeric"

      />

     <TextInput
        value={alt_mob}
        onChangeText={setaltNo}
        placeholder="Alternate Number"
        style={styles.input}
        keyboardType="numeric"

      />
      <Button onPress={updateUser} title="UPDATE" 
        style={{
          color: COLORS.black,
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 12,
        }}
        />

  
      <Text onPress={handleLogout} style={{textAlign:'center' , paddingTop:30 , color:'red' }}>SIGN OUT</Text>
        {/* </ScrollView> */}
      </SafeAreaView>
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
