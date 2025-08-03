import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/title";
import Colors from "../constants/colors";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/numberContainer";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import GuessLog from "../components/game/guessLog";

interface GameScreenProps {
    userNumber: number;
    gameOverHandler: (endRound: number) => void;
}
let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min: number, max: number, exclude: number) {
    if (max - min <= 1 && min === exclude) {
        throw new Error("No valid numbers left to guess.");
    }
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GamseScreen({ userNumber, gameOverHandler }: GameScreenProps) {
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessLog, setGuessLog] = useState<number[]>([]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOverHandler(guessLog.length);
        }
    }, [currentGuess, userNumber, gameOverHandler]);

    function nextGuessHandler(direction: string) {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "higher" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        if (maxBoundary - minBoundary <= 1 && minBoundary === userNumber) {
            gameOverHandler(guessLog.length);
            return;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            userNumber
        );
        setGuessLog((current) => [currentGuess, ...current]);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Guess My Number</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.instruction}>Higher or Lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {
                                nextGuessHandler("higher");
                            }}
                        >
                            <Ionicons name="remove" size={24} color="white" />
                        </Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {
                                nextGuessHandler("lower");
                            }}
                        >
                            <Ionicons name="add" size={24} color="white" />
                        </Button>
                    </View>
                </View>
            </Card>
            <View style={styles.logContainer}>
                <FlatList
                    data={guessLog}
                    renderItem={(itemdata) => (
                        <GuessLog
                            round={guessLog.length - itemdata.index}
                            guess={itemdata.item}
                        />
                    )}
                    keyExtractor={(itemdata) => itemdata.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    instruction: {
        fontFamily: "open-sans",
        fontSize: 20,
        color: "white",
        marginBottom: 10,
    },
    logContainer: {
        marginTop: 8,
        flex: 1,
    },
});

export default GamseScreen;
