import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/startGameScreen";

export default function App() {
    return (
        <LinearGradient
            colors={["#bffaff", "#4ed3de", "#0597a3"]}
            style={styles.rootContainer}
        >
            <StartGameScreen />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    backgoundImage: {
        flex: 1,
    },
    imageScreen: {
        opacity: 0.15,
    },
});
