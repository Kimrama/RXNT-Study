import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/data";
import Category from "../models/category";

function renderCategoryItem(item: Category) {
    return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoriesScreen() {
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
