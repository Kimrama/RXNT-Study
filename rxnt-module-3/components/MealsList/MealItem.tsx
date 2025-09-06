import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Platform,
} from "react-native";

import MealDetails from "../MealDetails";

interface MealItemProps {
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
    onPress: () => void;
}

function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    onPress,
}: MealItemProps) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View>
                    <View style={styles.innerContainer}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 2,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    pressed: {
        opacity: 0.5,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        margin: 8,
    },
});
export default MealItem;
