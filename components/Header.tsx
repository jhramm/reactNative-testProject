import {View, Text} from 'react-native';

export default function Header() {
  return (
    <>
   <View style={{width: "100%", height: 200, backgroundColor: "lightblue", alignItems:"center",  justifyContent: "center"}}>
    <Text style={{color: "black", fontSize: 35, fontWeight: "bold", textShadowColor: "#ffff", textShadowOffset: {width: 0.5, height: 0.5}, textShadowRadius: 1.5}}>Welcome to my app</Text>
   </View>
   </>
  )
}
