import { FlatList, View, StyleSheet } from "react-native"
import { IMeal } from "../../models/interfaces/Imeal"
import { MealItem } from "../MealItem"

type Props = {
    item: IMeal[]
}
export const MealsList = ({item}:Props) => {
    const renderMealItem = (itemData:IMeal) => {
        return <MealItem meal={itemData}/>
    }

    return(
        <View style={style.container}>
            <FlatList
                data={item}
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