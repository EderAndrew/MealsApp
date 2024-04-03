import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { ICategory } from './src/models/interfaces/Icategory';
import { RootStackParamList } from './src/models/types/RootStackParamList';
import { MealDetailScreen } from './src/screens/MealDetailScreen';


const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            cardStyle: {
              backgroundColor: '#3f2f25'
            }
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
              
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /* options={({route, navigation}) => {
              const catId = route.params.categoryId
              return {
                title: catId
              }
            }} */
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
        <StatusBar style='light'/> 
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
