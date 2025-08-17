import { View, Text, StyleSheet } from "react-native";

function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <Text>Favorite Meals</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default FavoriteScreen;
