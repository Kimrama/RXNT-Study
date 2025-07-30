import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
    const [workInput, setWorkInput] = useState("");
    const [workList, setWorkList] = useState<string[]>([]);
    function handleInputChange(text: string) {
        setWorkInput(text);
    }
    function handleSave() {
        if (workInput.trim() === "") {
            return;
        }

        setWorkList((currentList) => [...currentList, workInput]);
        setWorkInput("");
    }
    return (
        <View style={styles.container}>
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
                    onPress={handleSave}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </Pressable>
            </View>
            <View style={styles.workContainer}>
                {workList.map((work, index) => (
                    <Text
                        key={index}
                        style={{ fontSize: 18, marginVertical: 5 }}
                    >
                        {work}
                    </Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
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
    workContainer: {
        width: "80%",
        height: "80%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
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
