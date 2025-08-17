import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Platform,
} from "react-native";

interface MealItemProps {
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
}

function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}: MealItemProps) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
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
                    <View style={styles.detail}>
                        <Text style={styles.detailItem}>{duration} min</Text>
                        <Text style={styles.detailItem}>
                            {complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {affordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
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
    detail: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center",
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
export default MealItem;
