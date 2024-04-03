import { View, Text, StyleSheet } from "react-native"
import { IMeal } from "../models/interfaces/Imeal"

type Props = {
    meal:IMeal,
    style?: object,
    textStyle?: object
}

export const MealDetails = ({ meal, style, textStyle }:Props) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{meal.duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{meal.complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{meal.affordability}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    },
})