import { View, Text, StyleSheet } from 'react-native'
import { IMeal } from '../../models/interfaces/Imeal'

type Props = {
    data: String[]
}

export const List = ({data}:Props) => {
    return (
        data.map((dataPoint, index) => (
            <View key={index} style={styles.listItem}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText:{
        color: '#351401',
        textAlign: 'center'
    }
})