import { createDrawerNavigator } from "@react-navigation/drawer"
import { RootDrawerParamList } from "../models/types/RootDrawerParamList"
import { CategoriesScreen } from "./CategoriesScreen"
import { Ionicons } from '@expo/vector-icons'
import { FavoriteScreen } from "./FavoriteScreen"

const Drawer = createDrawerNavigator<RootDrawerParamList>()
export const DrawerScreen = () => {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                backgroundColor: '#351401'
                },
                headerTintColor: 'white',
                sceneContainerStyle: {
                backgroundColor: '#3f2f25'
                },
                drawerContentStyle: {
                backgroundColor: '#351401'
                },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#e4baa1',
          }}
        >
            <Drawer.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({color, size}) => (
                        <Ionicons name="list" color={color} size={size}/>
                    )
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoriteScreen}
                options={{
                    drawerIcon: ({color, size}) => (
                        <Ionicons name="star" color={color} size={size}/>
                    )
                }}
            />
        </Drawer.Navigator>
    )
}