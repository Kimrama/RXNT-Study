import {
    View,
    TextInput,
    Pressable,
    StyleSheet,
    Text,
    Modal,
    Button,
} from "react-native";
import { useState } from "react";

interface InputComponentProps {
    handleSave: (workInput: string) => void;
    visibleState: boolean;
    setModalFunction: (visible: boolean) => void;
}

export default function InputComponent({
    handleSave,
    visibleState,
    setModalFunction,
}: InputComponentProps) {
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
    function handleSetModalFunction() {
        setModalFunction(false);
        setWorkInput("");
    }
    return (
        <Modal visible={visibleState} animationType="slide">
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter work title"
                    value={workInput}
                    onChangeText={handleInputChange}
                />
                <Pressable style={styles.button} onPress={inputHandleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={handleSetModalFunction}
                >
                    <Text style={styles.buttonText}>Closs</Text>
                </Pressable>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
