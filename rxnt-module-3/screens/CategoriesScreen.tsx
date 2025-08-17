import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/data";
import Category from "../models/category";

interface CategoriesScreenProps {
    navigation: any;
}

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
    function renderCategoryItem(item: Category) {
        function pressHandler() {
            navigation.navigate("MealOverview", { id: item.id });
        }
        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderCategoryItem(item)}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
