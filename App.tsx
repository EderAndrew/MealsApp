import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { ICategory } from './src/models/interfaces/Icategory';
import { RootStackParamList } from './src/models/types/RootStackParamList';


const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
        <StatusBar style='dark'/> 
      </NavigationContainer>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
