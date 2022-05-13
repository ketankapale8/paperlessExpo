import { View, Text , Button , StyleSheet , Image} from 'react-native'
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import styles from '../OrderDetailsScreen/styles';

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };
  
  const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
  const color = isLight => backgroundColor(!isLight);
  
  const Done = ({ isLight, ...props }) => (
    <Button
      title={'Done'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );
  
  const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button
      title={'Skip'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        paddingLeft:20,
        width: 70,
      }}
      textStyle={{ color: color(isLight) }}
    
      {...props}
    >
      {skipLabel}
    </Button>
  );
  
  const Next = ({ isLight, ...props }) => (
    <Button
      title={'Next'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );

const OnboardingScreens = () => {
    const navigation = useNavigation();
  return (
    <Onboarding
    DotComponent={Square}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    onSkip={()=>navigation.navigate("Home")}
    onDone={()=>navigation.navigate("Home")}
    pages={[
      
      {
        backgroundColor: 'white',
        image: <Image source={require('../../OnboardingImgs/1.png')} style={{ width:300 , height:200 , marginTop:50}} />,
        title: 'Shopping from a local store',
        subtitle: 'Check for Paperless Option',
      },
      {
        backgroundColor: '#ffff',
        image: <Image source={require('../../OnboardingImgs/2.png')} style={{ width:300 , height:200 , marginTop:50}}/>,
        title: 'Search for your Order',
        subtitle: 'Check on Orders tab for your recent purchase'
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../OnboardingImgs/3.png')} style={{ width:300 , height:200 , marginTop:50}} />,
        title: 'Save your order on the go',
        subtitle: 'Export it to format of your choice',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../OnboardingImgs/4.png')} style={{ width:300 , height:200 , marginTop:50}}/>,
        title: 'Save Paper',
        subtitle: 'Go Paperless',
      },
      
      
    ]}
  />
  )
}

export default OnboardingScreens

