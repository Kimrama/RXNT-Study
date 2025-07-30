import { Button, View, TextInput, StyleSheet, Modal } from "react-native";
import { useState } from "react";

export default function WorkInput({ addWork, modalState, closeModal }) {
    const [inputWorkText, setInputWorkText] = useState("");
    function workInputHandler(text) {
        setInputWorkText(text);
    }
    function addWorkHandler() {
        addWork(inputWorkText);
        setInputWorkText("");
    }
    return (
        <Modal visible={modalState} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={workInputHandler}
                    placeholder="Enter Your work"
                    value={inputWorkText}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={addWorkHandler} title="Add Work" />
                    <Button
                        onPress={closeModal}
                        title="Cancel"
                        color={"#f25b44"}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 8,
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        width: "70%",
    },
});
