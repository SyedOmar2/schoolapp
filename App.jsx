import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Childern from "./src/screens/Childern";
import Dashbord from "./src/screens/Dashbord";
import Homework from "./src/screens/Homework";
import Materials from  "./src/screens/Materials";
import Timeline from "./src/screens/Timeline";
import Attendance from "./src/screens/Attendance";
import Teacher from "./src/screens/Teacher";
import Examination from  "./src/screens/Examination";
import Schedule from "./src/screens/Schedule";
import Result from "./src/screens/Result";
import Leave from "./src/screens/Leave";
import Notice from "./src/screens/Notice";
import Subject from "./src/screens/Subjects";
import SearchAttendance from "./src/screens/SearchAttendance";
import About from "./src/screens/About";
import Setting from "./src/screens/Setting";
const Stack = createNativeStackNavigator();
const App=()=>{
  return(
    <>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="Setting" component={Setting}/>
          <Stack.Screen name="Childern" component={Childern} />
          <Stack.Screen name="Dashbord" component={Dashbord} />
          <Stack.Screen name="Homework" component={Homework} />
          <Stack.Screen name="Materials" component={Materials} />
          <Stack.Screen name="Timeline" component={Timeline} />
          <Stack.Screen name="Attendance" component={Attendance} />
          <Stack.Screen name="SearchAttendance" component={SearchAttendance} />
          <Stack.Screen name="Teacher" component={Teacher} />
          <Stack.Screen name="Examination" component={Examination} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Leave" component={Leave} />
          <Stack.Screen name="Notice" component={Notice} />
          <Stack.Screen name="Subject" component={Subject}/>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
export default App