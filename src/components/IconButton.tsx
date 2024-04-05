import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

type Props = {
    onPress: () => void,
    icon: any,
    color: string
}
export const IconButton = ({icon, color, onPress}:Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7
    }
})