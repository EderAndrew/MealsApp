import { Text, View, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { CATEGORIES, MEALS } from '../../data/dummy-data'
import { RootStackParamList } from '../models/types/RootStackParamList'
import { FlatList } from 'react-native-gesture-handler'
import { MealItem } from '../components/MealItem'
import { IMeal } from '../models/interfaces/Imeal'
import { useLayoutEffect } from 'react'

type Props = StackScreenProps<RootStackParamList, 'MealsOverview'>

export const MealsOverviewScreen = ({route, navigation}:Props) => {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((categoryItem) => categoryItem.id === catId)?.title
        navigation.setOptions({title: categoryTitle})
    }, [catId, navigation])

    const renderMealItem = (itemData:IMeal) => {
        return <MealItem meal={itemData}/>
    }

    return(
        <View style={style.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => renderMealItem(item)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})