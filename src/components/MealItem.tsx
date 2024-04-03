import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { IMeal } from "../models/interfaces/Imeal"

type Props = {
    meal: IMeal
}
export const MealItem = ({meal}:Props) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Image
                        source={{uri: meal.imageUrl}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})