import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Stadistic from '../Screen/Stadistic';
import {
  createDrawerNavigator,
  useDrawerStatus
} from "@react-navigation/drawer";
import RightDrawerContent from './RightDrawer';
import { HomeStack } from './NavStack';
const Tab = createBottomTabNavigator();
const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator ID="LeftDrawer" screenOptions={{ drawerPosition: "left", headerShown: false }}>
      <LeftDrawer.Screen name="TabHome" component={Tabs} />
      <LeftDrawer.Screen name="Home" component={Home} />
      <LeftDrawer.Screen name="Stadistic" component={Stadistic} />
    </LeftDrawer.Navigator>
  );
}

const Navigation = () => {
  
  return (
    
      <RightDrawer.Navigator ID="RightDrawer"
        drawerContent={(props) => <RightDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
          drawerStyle: { backgroundColor: "#d0d0d0" },
        }}
      >
        
        <RightDrawer.Screen name="LeftDrawer" component={LeftDrawerScreen}  />
      </RightDrawer.Navigator>
    
  );
};


function Tabs() {
  return (
        <Tab.Navigator screenOptions={{
          headerShown: false,
        //unmountOnBlur: true,
       // tabBarShowLabel: false,
        tabBarStyle: { height: 50 }
        }
        }>
            
            <Tab.Screen name="HomeStack" component={HomeStack}/>
        </Tab.Navigator>
  )
}

export default Navigation;
