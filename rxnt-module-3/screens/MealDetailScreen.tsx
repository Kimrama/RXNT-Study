import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button,
} from "react-native";
import { useLayoutEffect, useContext } from "react";

import { MEALS } from "../data/data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }: any) {
    const mealId = route.params.mealId;
    const mealSelected = MEALS.find((meal) => meal.id === mealId);

    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function handleFavorite() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? "star" : "star-outline"}
                        onPress={handleFavorite}
                        color="white"
                    />
                );
            },
        });
    }, [navigation, handleFavorite]);

    if (!mealSelected) {
        return (
            <View>
                <Text>Meal not found.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: mealSelected.imageUrl }}
            />
            <Text style={styles.title}>{mealSelected.title}</Text>
            <MealDetails
                duration={mealSelected.duration}
                complexity={mealSelected.complexity}
                affordability={mealSelected.affordability}
                textStyle={styles.detailText}
                style={styles.detail}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={mealSelected.ingredients} />
                    <Subtitle>Instructions</Subtitle>
                    <List data={mealSelected.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 8,
        color: "white",
    },
    detailText: {
        color: "white",
    },
    detail: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    },
});

export default MealDetailScreen;
