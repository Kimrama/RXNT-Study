import { MEALS } from "../data/data";

import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/data";
import MealsList from "../components/MealsList/MealsList";

function MealOverviewScreen({ route, navigation }: any) {
    const categoryId = route.params.id;
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => {
            return category.id === categoryId;
        })?.title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.includes(categoryId);
    });

    return <MealsList items={displayedMeals} />;
}

export default MealOverviewScreen;
