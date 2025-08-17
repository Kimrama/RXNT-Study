import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

function MealOverviewScreen({ route }: any) {
    const categoryId = route.params.id;

    function renderMealItem(item: Meal) {
        return (
            <MealItem
                title={item.title}
                imageUrl={item.imageUrl}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
            />
        );
    }

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.includes(categoryId);
    });
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => renderMealItem(item)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default MealOverviewScreen;
