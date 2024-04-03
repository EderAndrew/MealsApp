import { Text, FlatList } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import { CategoryCridTile } from '../components/CategoryGridTile'
import { ICategory } from '../models/interfaces/Icategory'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../models/types/RootStackParamList'

type Props = StackScreenProps<RootStackParamList>

export const CategoriesScreen = ({navigation}:Props) => {
    const renderCategoryItem = (itemData: ICategory) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview',{
                categoryId: itemData.id
            })
        }
    
        return <CategoryCridTile
                    title={itemData.title}
                    color={itemData.color}
                    onPress={pressHandler}
                />
    }
    return(
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => renderCategoryItem(item)}
            numColumns={2}
        >

        </FlatList>
    )
}