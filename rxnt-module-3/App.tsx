import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

import FavoriteContextProvider from "./store/context/favorites-context";

import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                sceneStyle: { backgroundColor: "#3f2f25" },
            }}
        >
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Favorites" component={FavoriteScreen} />
        </Drawer.Navigator>
    );
}
export default function App() {
    return (
        <>
            {/* <FavoriteContextProvider> */}
            <Provider store={store}>
                <StatusBar style="light" />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: "#351401" },
                            headerTintColor: "white",
                            contentStyle: { backgroundColor: "#3f2f25" },
                        }}
                    >
                        <Stack.Screen
                            name="Categories"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealOverview"
                            component={MealOverviewScreen}
                            options={{
                                headerShown: true,
                                title: "Meal Overview",
                            }}
                        />
                        <Stack.Screen
                            name="MealDetail"
                            component={MealDetailScreen}
                            options={{
                                headerShown: true,
                                title: "Meal Detail",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/* </FavoriteContextProvider> */}
        </>
    );
}
