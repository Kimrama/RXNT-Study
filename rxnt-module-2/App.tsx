import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/startGameScreen";
import GamseScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOverScreen";
import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>(null);
    const [isOver, setIsOver] = useState<boolean>(true);
    const [endRound, setEndRound] = useState<number | null>(null);

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        // return <AppLoading />;
    }

    function pickNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setIsOver(false);
    }
    function gameOverHandler(endRound: number) {
        setIsOver(true);
        setEndRound(endRound);
    }
    function startNewGameHandler() {
        setUserNumber(null);
    }

    let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
    if (userNumber) {
        screen = (
            <GamseScreen
                gameOverHandler={gameOverHandler}
                userNumber={userNumber}
            />
        );
    }
    if (isOver && userNumber) {
        screen = (
            <GameOverScreen
                endRound={endRound}
                userNumber={userNumber}
                startNewGameHandler={startNewGameHandler}
            />
        );
    }
    return (
        <LinearGradient
            colors={[Colors.cyan500, Colors.cyan600, Colors.cyan700]}
            style={styles.rootContainer}
        >
            <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
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
