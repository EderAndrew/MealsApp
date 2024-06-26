
import { Text, View, Image, StyleSheet, Button } from 'react-native'

import { MEALS } from '../../data/dummy-data'
import { IMeal } from '../models/interfaces/Imeal'
import { MealDetails } from '../components/MealDetails'
import { Subtitle } from '../components/MealDetail/Subtitle'
import { List } from '../components/MealDetail/List'
import { ScrollView } from 'react-native-gesture-handler'
import { useContext, useLayoutEffect } from 'react'
import { IconButton } from '../components/IconButton'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../models/types/RootStackParamList'
import { FavoritesContext } from '../store/context/favorites-context'


type Props = StackScreenProps<RootStackParamList, 'MealDetail'>

export const MealDetailScreen = ({route, navigation}:Props) => {
    const mealsFavorite = useContext(FavoritesContext)
    const mealId = route.params.mealId

    const selectedMeal:IMeal = MEALS.find(meal => meal.id === mealId) as IMeal

    const mealIsFavorite = mealsFavorite?.ids.includes(mealId)

    const changeFavoriteStatusHandler = () => {
        if(mealIsFavorite){
            mealsFavorite?.removeFavorite(mealId) 
        }else{
            mealsFavorite?.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white" onPress={changeFavoriteStatusHandler}
                    />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}
            /> 
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                meal={selectedMeal}
                textStyle={styles.detailText}
            />
           <View style={styles.listOutContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />

                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    detailText:{
        color: 'white'
    },
    listOutContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
})