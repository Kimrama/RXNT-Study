import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

interface CategoryGridTileProps {
    title: string;
    color: string;
}

function CategoryGridTile({ title, color }: CategoryGridTileProps) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.buttonStyle,
                    pressed && styles.buttonPressed,
                ]}
            >
                <View
                    style={[styles.innerContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "black",
        shadowColor: "black",
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    innerContainer: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonPressed: {
        opacity: 0.5,
    },
    buttonStyle: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default CategoryGridTile;
