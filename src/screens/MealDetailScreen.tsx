import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, Image, StyleSheet } from 'react-native'
import { RootStackParamList } from '../models/types/RootStackParamList'
import { MEALS } from '../../data/dummy-data'
import { IMeal } from '../models/interfaces/Imeal'
import { MealDetails } from '../components/MealDetails'

type Props = StackScreenProps<RootStackParamList, 'MealDetail'>

export const MealDetailScreen = ({route, navigation}:Props) => {
    const mealId = route.params.mealId

    const selectedMeal:IMeal = MEALS.find(meal => meal.id === mealId) as IMeal

    return (
        <View>
            <Image
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}
            /> 
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                meal={selectedMeal}
                textStyle={styles.detailText}
            />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subTitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map(ingredient => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}

            <View style={styles.subtitleContainer}>
                <Text style={styles.subTitle}>Steps</Text>
            </View>
            {selectedMeal.steps.map(step => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
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
    subTitle:{
        color:'#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer:{
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
})