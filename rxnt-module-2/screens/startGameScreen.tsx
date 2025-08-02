import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Button from "../components/button";
function StartGameScreen() {
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
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={handleInputChange}
                value={enteredValue}
            />
            <View style={styles.buttonContainer}>
                <View style={{ flex: 1 }}>
                    <Button>Reset</Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button onPress={handleStartPressed}>Start</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#0062ff",
        borderRadius: 8,
        elevation: 4,
        alignItems: "center",
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
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
export default StartGameScreen;
