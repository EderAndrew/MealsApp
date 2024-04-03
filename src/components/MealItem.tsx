import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native"
import { IMeal } from "../models/interfaces/Imeal"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from "../models/types/RootStackParamList"
import { MealDetails } from "./MealDetails"


type Props = {
    meal: IMeal
}
export const MealItem = ({meal}:Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'MealDetail'>>() as any

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail' as never, {mealId: meal.id})
    }

    

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({ pressed })=> pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{uri: meal.imageUrl}}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{meal.title}</Text>
                    </View>
                    <MealDetails meal={meal} />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: Platform.select({ios: 'visible', android: 'hidden'}),
        backgroundColor: 'white',
        elevation: 4,
        shadowColor:'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
    buttonPressed:{
        opacity: 0.5 
    }
})