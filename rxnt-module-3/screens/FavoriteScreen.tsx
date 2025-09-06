import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/data";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
function FavoriteScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsCtx.ids.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No favorite meals found!</Text>
            </View>
        );
    }
    return <MealsList items={favoriteMeals} />;
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
