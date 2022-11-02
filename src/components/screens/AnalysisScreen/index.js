import { View, Text , StyleSheet, Button } from 'react-native';
import {useState , useEffect} from "react";
import { useSelector } from "react-redux";
import isodate from 'isodate';
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import axios from "react-native-axios";
import moment from 'moment';


const AnalysisScreen = () => {
    const [selectedStartDate , setSelectedStartDate] = useState(null);
    const [selectedendDate , setSelectedEndDate] = useState(null);
    const [fetchData, getFetchedData] = useState([]);
    const [refreshing, setisRefreshing] = useState(false);
    const {user} = useSelector((state)=> ({...state.auth}));
    const [year , setYear] = useState(null);
    const [month , setMonth] = useState(null);
    const [day , setDay] = useState(null);
    const [date , setDate] = useState(null);




    useEffect(()=>{
        onDateChange();
        getData();
        fetchCartItems()

    }, [])

    const onRefresh = () => {
      setisRefreshing(true);
      fetchCartItems();
      setisRefreshing(false)
    };

    
  const getData = async () => {
    try {
      await AsyncStorage.getItem("@profile").then((resp) => {
        resp && getName(JSON.parse(resp));
        // getEmail(JSON.parse(resp.result))
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCartItems = () => {
    const url = "https://paperlessapi7.herokuapp.com/users/allcarts";
    axios.get(url).then((resp) => getFetchedData(resp.data));
    // getUserData(fetchData?.allCarts?.filter(item=>item.email === name.result.email))
  };

    const onDateChange = (date , type) =>{
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
          } else {
      
            setSelectedEndDate(null);
      
            setSelectedStartDate(date);
      
          }
    }
 
   const startDate = selectedStartDate ? selectedStartDate.toString() : null;
   const endDate = selectedendDate ? selectedendDate.toString() : null;

   const filteredItems = fetchData?.allCarts?.filter(
    (item) => item?.email === user?.result?.email
   )
   
   let yearData = filteredItems?.map(item=>(new Date(item.createdAt).getFullYear()));
   let dateData = filteredItems?.map(item=> (new Date(item.createdAt).getDate()))
   let monthData = filteredItems?.map(item=> (new Date(item.createdAt).getUTCMonth()))
   let dayData = filteredItems?.map(item=> (new Date(item.createdAt).getDay()))
   let fullDate = [dateData , monthData , yearData]
   console.log(fullDate)

   
  //  const dateConv = (data) =>{
  //   console.log('data',moment(data).format("YYYY-MM-DDTHH:mm:ss"))
  //  }

  //  dateConv()

    
  return (
    <>
        <View style={styles.container}>
        <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={new Date(2021, 1, 1)}
            maxDate={new Date(2050, 6, 3)}
            weekdays={
              [
                'Mon', 
                'Tue', 
                'Wed', 
                'Thur', 
                'Fri', 
                'Sat', 
                'Sun'
              ]}
            months={[
              'January',
              'Febraury',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            previousTitle="Previous"
            nextTitle="Next"
            todayBackgroundColor="#e6ffe6"
            selectedDayColor="#66ff33"
            selectedDayTextColor="#000000"
            scaleFactor={375}
            textStyle={{
              color: '#000000',
            }}
            onDateChange={onDateChange}

        />
        </View>

        <View>
            <Text>Selected Start Date : {startDate}</Text>
            <Text>Selected End Date : {endDate}</Text>

        </View>

        <View>
            <Button title='Filter'/>
        </View>
        <View>
          <Text>Cart Items</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      marginTop: 100,
    },
  });

export default AnalysisScreen