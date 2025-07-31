import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";

interface InputComponentProps {
    handleSave: (workInput: string) => void;
}

export default function InputComponent({ handleSave }: InputComponentProps) {
    const [workInput, setWorkInput] = useState("");
    function handleInputChange(text: string) {
        setWorkInput(text);
    }
    function inputHandleSave() {
        if (workInput.trim() === "") {
            return;
        }

        handleSave(workInput);
        setWorkInput("");
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your work"
                onChangeText={handleInputChange}
                value={workInput}
            ></TextInput>
            <Pressable
                style={styles.button}
                android_ripple={{ color: "#75b8ff" }}
                onPress={inputHandleSave}
            >
                <Text style={styles.buttonText}>Save</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        gap: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        fontSize: 18,
        flex: 1,
        borderRadius: 8,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
    },
});
