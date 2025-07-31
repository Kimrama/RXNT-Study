import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

import InputComponent from "./components/inputComponent";

export default function App() {
    const [workList, setWorkList] = useState<string[]>([]);

    function handleSave(workInput: string) {
        if (workInput.trim() === "") {
            return;
        }

        setWorkList((currentList) => [...currentList, workInput]);
    }
    return (
        <View style={styles.container}>
            <InputComponent handleSave={handleSave} />
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
    workContainer: {
        width: "80%",
        height: "80%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
});
