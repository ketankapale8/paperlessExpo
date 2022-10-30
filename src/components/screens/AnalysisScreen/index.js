import { View, Text , StyleSheet } from 'react-native';
import {useState , useEffect} from "react";
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';


const AnalysisScreen = () => {
    const [selectedStartDate , setSelectedStartDate] = useState(null);
    const [selectedendDate , setSelectedEndDate] = useState(null);

    useEffect(()=>{
        onDateChange()

    }, [])

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

    


  return (
    <>
        <View style={styles.container}>
        <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={new Date(2018, 1, 1)}
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