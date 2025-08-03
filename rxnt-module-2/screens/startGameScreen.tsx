import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import Button from "../components/ui/button";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
interface StartGameScreenProops {
    onPickNumber: (pickedNumber: number) => void;
}
function StartGameScreen({ onPickNumber }: StartGameScreenProops) {
    const [enteredValue, setEnteredValue] = useState("");
    function handleInputChange(enteredText: string) {
        setEnteredValue(enteredText);
    }
    function handleStartPressed() {
        const parsedValue = parseInt(enteredValue);
        if (isNaN(parsedValue) || parsedValue <= 0 || parsedValue > 99) {
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "OK",
                        style: "destructive",
                        onPress: () => setEnteredValue(""),
                    },
                ]
            );
        }
        onPickNumber(parsedValue);
        setEnteredValue("");
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.instruction}>Enter A Number</Text>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    onChangeText={handleInputChange}
                    value={enteredValue}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Button>Reset</Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={handleStartPressed}>Start</Button>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    instruction: {
        fontSize: 36,
        color: "white",
    },
    textInput: {
        fontSize: 32,
        height: 60,
        width: 50,
        borderBottomWidth: 3,
        borderColor: "#ffffff",
        textAlign: "center",
        marginBottom: 16,
        color: "#ffffff",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
export default StartGameScreen;
