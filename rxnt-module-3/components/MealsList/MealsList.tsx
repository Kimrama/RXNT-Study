import { View, FlatList, StyleSheet } from "react-native";
import Meal from "../../models/meal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import MealItem from "./MealItem";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function MealsList({ items }: { items: Meal[] }) {
    const navigation = useNavigation<NavigationProp>();
    const displayedMeals = items;

    function renderMealItem(item: Meal) {
        function selectMealHandler() {
            navigation.navigate("MealDetail", {
                mealId: item.id,
            });
        }
        return (
            <MealItem
                title={item.title}
                imageUrl={item.imageUrl}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
                onPress={selectMealHandler}
            />
        );
    }

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
    },
});
