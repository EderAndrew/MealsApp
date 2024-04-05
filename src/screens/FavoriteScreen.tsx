import { Text, StyleSheet, View } from 'react-native'
import { MealsList } from '../components/MealsList/MealList'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../../data/dummy-data'

export const FavoriteScreen = () => {
    const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx?.ids.includes(meal.id))

    if (favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meal</Text>
            </View>
        )
    }

    return <MealsList item={favoriteMeals} />
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})