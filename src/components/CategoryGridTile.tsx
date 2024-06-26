import { Pressable, View, Text, StyleSheet, Platform } from "react-native"

type Props = {
    title: string
    color: string,
    onPress: () => void
}

export const CategoryCridTile = ({ title, color, onPress }:Props) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed })=>[styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{color: '#ccc'}}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.select({ios: 'visible', android: 'hidden'})
    },
    button:{
        flex: 1
    },
    buttonPressed:{
       opacity: 0.5 
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
})