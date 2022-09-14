import React, { useEffect, useState } from 'react'
import { View , Text} from 'react-native-animatable';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {dialogflowConfig} from '../../../../env.js'


const bot = require('../../../../assets/icons/bot.png')

const PaperBot = {
  _id : 2,
  name : "Paperbot",
  avatar : bot
}


const Bot = () => {
  useEffect(()=>{
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    )
  
  })
  const [data , setData] = useState({
    messages : [{
      _id : 1 , text: "Hi My name is Paperbot- An AI Assistant designed for Paperless , How can I help?" ,createdAt : new Date() , user: PaperBot
    }]
    ,id : 1 , name : ""})

    



  const sendBotResponse = (text) =>{
      let msg = {
        _id : data.messages.length + 1,
        text,
        createdAt : new Date(),
        user : PaperBot
      }
  

  setData((prevState)=>({
    messages : GiftedChat.append(prevState.messages, [msg])
  }))
  }

  const handleGoogleResponse = (result) =>{
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    sendBotResponse(text)

  }
    
 

  const onSend = (messages = []) =>{
    setData((prevState)=> ({
      messages : GiftedChat.append(prevState.messages , messages)
    }))

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result)=>
        handleGoogleResponse(result),
      (error)=>{
        console.log(error)
      }
    )
  }

  const onQuickReply = (quickReply) =>{
    setData((prevState)=> ({
      messages : GiftedChat.append(prevState.messages , quickReply)
    }))

    let message = quickReply[0].value;

    Dialogflow_V2.requestQuery(
      message,
      (result)=>
        handleGoogleResponse(result),
      (error)=>{
        console.log(error)
      }
    )
  }

  return (
    <View style={{flex:1 , backgroundColor:'#ffff' }}>
      <GiftedChat
        messages={data.messages}
        onSend={(message)=> onSend(message)}
        onQuickReply={(quickReply)=> onQuickReply(quickReply)}
        user={{_id : 1 }}

      />
    </View>
  )
}

export default Bot