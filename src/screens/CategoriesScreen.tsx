import { Text, FlatList } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import { CategoryCridTile } from '../components/CategoryGridTile'
import { ICategory } from '../models/interfaces/Icategory'

const renderCategoryItem = (itemData: ICategory) => {
    return <CategoryCridTile title={itemData.title} color={itemData.color}/>
}

export const CategoriesScreen = () => {
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