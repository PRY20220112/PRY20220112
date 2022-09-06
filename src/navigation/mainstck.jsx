import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from "../pages/LogIn.jsx";
import SingIn from "../pages/SingIn.jsx";
import VoiceTest from "../pages/VoiceTest.jsx";
import APITEST from "../pages/APITest.jsx";
import Home from "../pages/Home.jsx";
import RegisterMH from "../pages/RegisterMH.jsx";
import VisualizeMH from "../pages/VisualizeMH copy.jsx";

const stack = createNativeStackNavigator()

const Mainstack = () => {
    return(
    <NavigationContainer> 
       <stack.Navigator
       screenOptions={
        {
            headerShown:false,
        }}
       >
        <stack.Screen
         name='Historia clinica'
         component={RegisterMH}
        />
        <stack.Screen
         name='Incio'
         component={LogIn}
        />
         <stack.Screen
         name='Registrarse'
         component={SingIn}
        />
       </stack.Navigator>   

    </NavigationContainer>
    )
}
export default Mainstack