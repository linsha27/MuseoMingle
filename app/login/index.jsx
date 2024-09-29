import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'

export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/museum.png')}
      style={{
        width:'100%',
        height:500}}/>
      <View style={{
        padding:20,
        display:'flex',
        alignItems:'Left'
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:30
        }}>Let's Explore MuseoMingle</Text>
        <Pressable 
        style={{
            padding:14,
            marginTop:100,
            backgroundColor:Colors.PRIMARY,
            width:'100%',
            borderRadius:14
        }}
        >
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
                textAlign:'center'
            }}

            >Get Started</Text>
        </Pressable>
      </View>
    </View>
  )
}