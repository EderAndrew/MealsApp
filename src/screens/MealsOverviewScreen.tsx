import { Text, View, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { CATEGORIES, MEALS } from '../../data/dummy-data'
import { RootStackParamList } from '../models/types/RootStackParamList'
import { FlatList } from 'react-native-gesture-handler'
import { MealItem } from '../components/MealItem'
import { IMeal } from '../models/interfaces/Imeal'
import { useLayoutEffect } from 'react'
import { MealsList } from '../components/MealsList/MealList'

type Props = StackScreenProps<RootStackParamList, 'MealsOverview'>

export const MealsOverviewScreen = ({route, navigation}:Props) => {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((categoryItem) => categoryItem.id === catId)?.title
        navigation.setOptions({title: categoryTitle})
    }, [catId, navigation])

    return <MealsList item={displayedMeals} />
}