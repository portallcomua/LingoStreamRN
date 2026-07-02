import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import MediaScreen from './screens/MediaScreen';
import i18n from './i18n/i18n';

const Tab = createBottomTabNavigator();

export default function App() {
  const [language, setLanguage] = useState('UK');
  
  useEffect(() => {
    i18n.setLanguage(language);
  }, [language]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'flash-on';
            } else if (route.name === 'Media') {
              iconName = 'video-library';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00FFFF',
          tabBarInactiveTintColor: '#666666',
          headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerTintColor: '#00FFFF',
          tabBarStyle: {
            backgroundColor: '#141414',
            borderTopColor: '#222222',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          options={{ 
            title: '🛸 LingoStream AI',
            tabBarLabel: '⚡',
          }}
        >
          {(props) => <HomeScreen {...props} language={language} setLanguage={setLanguage} />}
        </Tab.Screen>
        
        <Tab.Screen 
          name="Media"
          options={{ 
            title: '🎬 Collections',
            tabBarLabel: '🎬',
          }}
        >
          {(props) => <MediaScreen {...props} language={language} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
